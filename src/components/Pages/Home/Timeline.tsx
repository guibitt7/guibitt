import React from "react";
import Image from "next/image";

export function Timeline() {
    return (
        <div className="relative w-full flex justify-center sm:h-[760px] h-[660px]">
            <div className="relative md:w-[350px] h-[580px]  w-[280px] sm:h-[760px]">
                <Image
                    fill
                    quality={100}
                    priority={true}
                    src="/mockup.jpg"
                    className=""
                    alt="timeline photo"
                    placeholder="empty"
                />
            </div>
        </div>
    );
}