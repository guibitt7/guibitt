import React from "react";

export function Navbar(){
    return(
        <nav className="w-80 h-10 text-xl flex glow text-violet-200 items-center justify-around text-white rounded-lg font-mclaren backdrop-blur">
            <a href="#home" className="mr-2">Home</a>
            <a href="#projects" className="mr-2">Projects</a>
            <a href="#contact" className="">Contact</a>
        </nav>
    );
}