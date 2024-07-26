import React, {ComponentProps} from "react";
import Image from "next/image";
import { twMerge } from 'tailwind-merge';


export function MainCard({...props}: ComponentProps<"div">) {
    return (
      <section className={twMerge(
        "flex h-full w-full", 
        "relative flex h-[200px] w-full max-w-lg flex-row gap-2 rounded-md border-violet-500 backdrop-blur",
        props.className
      )}>
        <div className={twMerge(
          "relative z-10 hidden h-full w-2/4 flex-col items-center justify-center md:flex",
          "bg-violet-500/20 overflow-hidden rounded-md border-violet-300 backdrop-blur"
        )}>
          <Image
            fill
            quality={70}
            priority={true}
            src="/foto.jpg"
            className="z-20 flex select-none object-cover opacity-80"
            alt="gui photo"
            placeholder="empty"
            sizes="(max-width: 768px) 250px, (max-width: 1200px) 350px, 400px"
          />
        </div>

        <div className={twMerge( "flex w-full flex-col items-center justify-center"
            
        )}>
            <h1 className={twMerge("text-center text-4x1"

            )}>
            Guilherme
            </h1>

            <p>sou um estudante de engenhraria de software, e no momento desempregado</p>
        </div>
      </section>
    );
  }