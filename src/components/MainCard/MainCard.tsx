import React, {ComponentProps} from "react";
import Image from "next/image";
import { twMerge } from 'tailwind-merge';
import { SocialLinks } from "../SocialLinks";


export function MainCard({...props}: ComponentProps<"div">) {
    return (
      <section className={twMerge(
        "relative flex h-56 w-full flex-row gap-2 rounded-lg backdrop-blur",
        props.className
      )}>
        <div className={twMerge(
          "relative z-10 hidden h-full w-2/4 flex-col items-center justify-center md:flex",
          "overflow-hidden rounded-md"
        )}>
          <Image
            fill
            quality={70}
            priority={true}
            src="/guibitt1.jpg"
            className="z-10 flex select-none object-cover opacity-80"
            alt="gui photo"
            placeholder="empty"
            sizes="(max-width: 768px) 250px, (max-width: 1200px) 350px, 400px"
          />
        </div>

        <div className={twMerge("flex w-full flex-col items-center justify-center"
            
        )}>
            <h1 className={twMerge(
            "hover:underline flex select-none text-3xl mt-6 text-center justify-center items-center font-mclaren text-violet-200",
            "decoration-violet-200/50 decoration-[0.25rem]",
            "motion-safe:transition-all motion-safe:duration-300",
            )}>
            Hi, I’m Guilherme 👋
            </h1>

            <p className={twMerge(
              "flex w-full select-none flex-col items-center justify-center  px-6 pb-4 text-center font-mclaren text-base text-violet-200 md:px-0 md:pb-2 md:text-left md:text-lg",
            )}>
              <span className="">I’m a fullstack developer from Brazil</span>
              <span className="text-sm opacity-70 md:text-xs mt-0.5">
              I’m a Software Engineering student currently wrapping up my final year.
              </span>
            </p>

            <hr className="w-[95%] border-t border-t-violet-300/50 opacity-80 md:-ml-5 md:block md:w-full mt-6" />
            <SocialLinks/>
        </div>
      </section>
    );
  }