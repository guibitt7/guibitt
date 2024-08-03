"use client";
import React, { useEffect, useState } from "react";
import { HTMLProps } from "react";
import Link from "next/link";
import Image from "next/image";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";


type ResumeProps = {
    tooltip?: string;
  };

export function Resume({tooltip}: ResumeProps & HTMLProps<HTMLAnchorElement>) {
    return (
        <Tippy
          content={tooltip || "Download CV"}
          theme="custom-theme"
          duration={[100, 100]}
          delay={[0, 50]}
        >
          <div className="center relative flex h-full items-center justify-center">
            <Link href="/Assets/Curriculo.pdf" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
              <Image
                fill
                sizes="100"
                quality={90}
                src="/resume1.svg"
                className="z-10 w-full select-none absolute opacity-80"
                alt="{}"
              />
              </a>
            </Link>
          </div>
        </Tippy>
    );    
}