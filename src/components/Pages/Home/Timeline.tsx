"use client";
import React, { useState } from "react";
import Image from "next/image";

export function Timeline() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative w-full flex justify-center select-none sm:h-[740px] h-[570px]">
            <div
                className="relative sm:w-[360px] h-[560px] w-[280px] sm:h-[720px] image-container"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Image
                    fill
                    sizes="100"
                    quality={100}
                    priority={true}
                    src="/mockup.png"
                    className={`image ${isHovered ? 'image-hidden' : 'image-visible'}`}
                    alt="timeline photo"
                    placeholder="empty"
                />
                <Image
                    fill
                    sizes="100"
                    quality={100}
                    priority={true}
                    src="/aboutme.png"
                    className={`image ${isHovered ? 'image-visible' : 'image-hidden'}`}
                    alt="timeline photo"
                    placeholder="empty"
                />
            </div>
        </div>
    );
}

