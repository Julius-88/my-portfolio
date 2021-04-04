import React from 'react'
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
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
                    <NavLink to="/languages"
                        activeClassName="text-red-100 bg-blue-800"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-red-800">
                        Languages
                    </NavLink>
                    <NavLink to="/about"
                        activeClassName="text-red-500 bg-blue-800"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-red-800">
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://github.com/Julius-88" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://www.linkedin.com/in/julius-alamarvdashti-38649270/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    )
}