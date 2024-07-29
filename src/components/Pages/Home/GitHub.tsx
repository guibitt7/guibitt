import React from "react";
import Link from "next/link";
import Image from "next/image";
import {github_url} from "@/utils/Consts";
import { BsGithub } from "react-icons/bs";



export function GitHub(){
    return(
        <Link
        href={github_url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative h-44 w-full glow flex rounded-md backdrop-blur hover:brightness-90"
        >
            <Image
                fill
                sizes="100"
                quality={10}
                src={"/coding.webp"}
                className="w-full select-none rounded-md bg-gray-300 object-cover object-bottom opacity-90"
                alt="coding gif"
            />
            <BsGithub className="absolute top-4 right-4 text-3xl glow-icon" />

            <span className="absolute bottom-2 sm:top-4 left-4 w-full -space-y-1 font-mclaren select-none text-left">
                <span className="display text-base font-bold text-pink-200 sm:block md:text-lg">
                check out my projects 
                </span>
            </span>
        </Link>
    );
}