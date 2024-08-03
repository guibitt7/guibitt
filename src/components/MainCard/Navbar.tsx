import React from "react";

export function Navbar(){
    return(
        <nav className="w-80 h-10 text-xl flex glow text-violet-200 items-center justify-around rounded-lg font-mclaren">
            <a id="Home" href="/" className="mr-2">Home</a>
            <a id="Projects" href="/projects" className="mr-2">Projects</a>
            <a href="#contact" className="">Contact</a>
        </nav>
    );
}