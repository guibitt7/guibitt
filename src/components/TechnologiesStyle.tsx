"use client";
import React from "react";
import Tippy from "@tippyjs/react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface IconProps {
  tooltip: string;
  className?: string;
  Component: IconType;
}

export function IconStyle({ tooltip, className = "", Component }: IconProps) {
  return (
    <Tippy 
    content={tooltip || "Open"}
    theme="custom-theme"
    duration={[100, 100]}
    delay={[0, 50]}
    >
      <span className="h-full">
        <Component
          className={twMerge(
            className,
            "h-7 w-7 text-violet-200 glow-icon opacity-100 transition duration-300 ease-in-out transform hover:scale-110 hover:text-violet-100 hover:opacity-100 md:h-8 md:w-8",
          )}
        />
      </span>
    </Tippy>
  );
}
