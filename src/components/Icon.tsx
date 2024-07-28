"use client";
import React from "react";
import Link from "next/link";
import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; 



type IconProps = {
  src: string;
  tooltip?: string;
};

export function IconLink({ src, tooltip, ...props }: IconProps & HTMLProps<HTMLAnchorElement>) {
  return (
    <Tippy
      content={tooltip || "Open"}
      theme="custom-theme"
      duration={[100, 100]}
      delay={[0, 50]}
      className="text-blue"
    >
      <Link
        id={`nav-item-${props.id}`}
        href={props.href || "/"}
        target={"_blank" || props.target}
        rel="noopener noreferrer"
        className={twMerge("select-none text-center spring-animation", props.className)}
      >
        <Image
          width={100}
          height={100}
          quality={80}
          priority={false}
          src={src}
          className={twMerge("h-6 w-6 opacity-75 mt-2 hover:opacity-100", props.className)}
          alt="social media icon"
          placeholder="empty"
          sizes="(max-width: 768px) 50px, (max-width: 1200px) 50px, 40px"
        />
      </Link>
    </Tippy>
  );
}