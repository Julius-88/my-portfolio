import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";


const api = {
    key: "0c145d2701598a41a9f7e2604e6f793c",
    base: "https://api.openweathermap.org/data/2.5/"
}


export default function NavBar() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => { setQuery(''); setWeather(result) });
        }
    }

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/"
                        exact
                        activeClassName="text-red-100 bg-blue-800"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-red-800 text-4xl font-bold cursive tracking-widest">
                        Julius
                    </NavLink>
                    <NavLink to="/post"
                        activeClassName="text-red-100 bg-blue-800"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-red-800">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project"
                        activeClassName="text-red-100 bg-blue-800"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-red-800">
                        Projects
                    </NavLink>
                    <NavLink to="/about"
                        activeClassName="text-red-500 bg-blue-800"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-red-800">
                        About Me!
                    </NavLink>
                </nav>
                <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
                    <SocialIcon url="https://github.com/Julius-88" className="my-8 mx-5  " target="_blank" fgColor="#fff" rel="noopener noreferrer" mt-8 style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://www.linkedin.com/in/julius-alamarvdashti-38649270/" className="" rel="noopener noreferrer" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                </div>
                <div className="search-box">
                    <input type="text"
                        className="search-bar"
                        placeholder="Find out your local weather"
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                </div>
                {(typeof weather.main != "undefined") ? (
                    <div>
                        <div className="location-box">
                            <div className="location">{weather.name}, {weather.sys.country} </div>
                            <div className="date">{dateBuilder(new Date())} </div>
                        </div>
                        <div className="weather-box">
                            <div className="temp">
                                {Math.round(weather.main.temp)}&deg;C
                            </div>
                            <div className="weather">{weather.weather[0].main} </div>
                        </div>
                    </div>
                ) : ('')}
            </div>

        </header >
    )
}