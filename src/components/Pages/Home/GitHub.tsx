import React from "react";
import Link from "next/link";
import Image from "next/image";
import {github_url} from "@/utils/Consts";
import { BsGithub } from "react-icons/bs";


interface GitHubProps {
    className?: string;
}

export function GitHub({ className }: GitHubProps) {
    return (
        <Link
            href={github_url}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative h-48 w-full glow flex rounded-md backdrop-blur hover:brightness-90 ${className}`}
        >
            <Image
                fill
                sizes="100"
                quality={75}
                src={"https://i.pinimg.com/originals/c8/4f/b7/c84fb740471d58ba9597ace28969d490.gif"}
                className="w-full select-none rounded-lg object-cover object-bottom opacity-30"
                alt="coding"
                unoptimized
            />
            <BsGithub className="absolute top-4 right-4 text-3xl glow-icon" />

            <span className="absolute bottom-2 sm:top-4 left-4 w-full -space-y-1 font-mclaren select-none text-left">
                <span className="display text-base font-bold text-violet-200 sm:block md:text-lg">
                    Check out my projects
                </span>
            </span>
        </Link>
    );
}