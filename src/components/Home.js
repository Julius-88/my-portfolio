import React from 'react'
import image from "../images/river.jpg";

export default function Home() {
    return (
        <main>
            <img src={image} alt="over looking the river in amsterdam" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8" >
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name ">Hi! I'm Julius.</h1>
            </section>
        </main>
    )
}