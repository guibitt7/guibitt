"use client";
import React from "react";
import { IconStyle } from "@/components/TechnologiesStyle";
import { 
    SiPhp,
    SiLaravel,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiFlutter,
    SiPostgresql,
    SiDocker,
    SiPostman,
    SiGit,
    SiVercel,
    SiVite,
    SiVisualstudiocode,
    SiPhpstorm,
    SiUbuntu
} from "react-icons/si";

export function Technologies(){
    return(
        <div className="relative h-48 select-none flex w-full backdrop-blur rounded-lg hue-rotate-15">
            <span className="absolute bottom-2 right-4 w-full -space-y-1 font-mclaren select-none text-right opacity-100">
                <span className="display text-base font-bold glow text-violet-200 sm:block md:text-lg">
                    some of my knowlege
                </span>
            </span>
            <div className="m-4 mb-20 grid w-full grid-cols-7 flex-wrap houver:glow-icon justify-center gap-2 self-center sm:m-4 sm:mb-14 sm:grid-cols-6 sm:gap-2 md:grid-cols-7 md:gap-4">
            <IconStyle Component={SiPhp} tooltip="PHP" />
            <IconStyle Component={SiLaravel} tooltip="Laravel" />
            <IconStyle Component={SiJavascript} tooltip="JavaScript" />
            <IconStyle Component={SiTypescript} tooltip="TypeScript" />
            <IconStyle Component={SiReact} tooltip="React" />
            <IconStyle Component={SiNextdotjs} tooltip="Next.js" />
            <IconStyle Component={SiTailwindcss} tooltip="Tailwind CSS" />
            <IconStyle Component={SiFlutter} tooltip="Flutter" />
            <IconStyle Component={SiPostgresql} tooltip="PostgreSQL" />
            <IconStyle Component={SiDocker} tooltip="Docker" />
            <IconStyle Component={SiPostman} tooltip="Postman" />
            <IconStyle Component={SiGit} tooltip="Git" />
            <IconStyle Component={SiVercel} tooltip="Vercel" />
            <IconStyle Component={SiVite} tooltip="Vite" />
            <IconStyle Component={SiVisualstudiocode} tooltip="Visual Studio Code" />
            <IconStyle Component={SiPhpstorm} tooltip="PhpStorm" />
            <IconStyle Component={SiUbuntu} tooltip="Ubuntu" />
            </div>
        </div>
    );
}