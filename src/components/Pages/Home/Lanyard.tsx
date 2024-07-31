"use client";
import React, { ComponentProps, useEffect, useState } from "react";
import Image from "next/image";
import { Snowflake, useLanyardWS } from "use-lanyard";
import { USER_ID } from "@/utils/Consts";
import { twMerge } from "tailwind-merge";


let startedTimestamp = 0;
let endTimestamp = 0;

interface LanyardProps extends ComponentProps<"div"> {
    hideTimestamp?: boolean;
  }
  
    function getMinuteAndSeconds(date: Date) {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
        return "00:00";
        }
        return date.toLocaleTimeString(navigator.language, {
        minute: "2-digit",
        second: "2-digit",
        });
    }
  
    export function Lanyard({hideTimestamp = false, ...props }: LanyardProps) {
    const [elapsed, setElapsed] = useState<Date | undefined>();
    const user = useLanyardWS(USER_ID as Snowflake);

    const vscodeActivity = user?.activities?.find(activity => activity.name === "Visual Studio Code") || null;

    const imageUrl = vscodeActivity?.assets?.large_image
        ? `https://cdn.discordapp.com/app-assets/${vscodeActivity.application_id}/${vscodeActivity.assets.large_image}.webp`
        : "/day.jpg";
      
    const shouldDisplayTimestamp = vscodeActivity?.timestamps?.start && !hideTimestamp;

      
    const elapsedTime = (startTime: number | undefined) => {
        if (startTime === undefined) return "00:00:00";
        
        const now = new Date().getTime();
        const elapsed = now - startTime;
        const hours = Math.floor(elapsed / 3600000);
        const minutes = Math.floor((elapsed % 3600000) / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);
        return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
        
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (vscodeActivity?.timestamps?.start) {
            interval = setInterval(() => {
                setElapsed(Date.now() - vscodeActivity.timestamps.start);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [vscodeActivity]);

    const spotify = user?.spotify;
    const duration = spotify?.timestamps
    ? new Date(spotify.timestamps.end - spotify.timestamps.start)
    : undefined;

    const progress = spotify?.timestamps
        ? 100 - (100 * (endTimestamp - Date.now())) / (endTimestamp - startedTimestamp)
        : 100;
    
    useEffect(() => {
        if (spotify) {
        if (spotify.timestamps.end !== endTimestamp) {
            startedTimestamp = spotify.timestamps.start;
            endTimestamp = spotify.timestamps.end;
            const interval = setInterval(() => {
            if (Date.now() >= endTimestamp || startedTimestamp !== spotify.timestamps.start || !spotify)
                clearInterval(interval);
            else setElapsed(new Date(Date.now() - startedTimestamp));
            }, 1000);
            return () => {
            clearInterval(interval);
            startedTimestamp = 0;
            endTimestamp = 0;
            };
        }
        } 
    }, [spotify]);

    return (
        <div className={twMerge("h-48 w-full relative select-none p-4 backdrop-blur font-mclaren rounded-md", props.className)}>
        <div className="flex w-full flex-col">
            <h2 className="mb-2 select-none glow text-center text-lg font-bold text-violet-200 sm:text-xl md:text-left">
            What I’m doing now
            </h2>

            {
            vscodeActivity ? (
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                <Image
                    src={imageUrl} 
                    alt="Code Language"
                    width={94}
                    height={94} 
                    className="rounded-lg"
                />
                <div>
                    <h3 className="truncate text-xl font-semibold leading-tight text-violet-100">
                    {vscodeActivity.details || "Unknown Language"}
                    </h3>
                    <p className={`text-base text-violet-200 opacity-80`}>
                    {shouldDisplayTimestamp
                        ? `Time spent: ${elapsedTime(vscodeActivity.timestamps?.start)}`
                        : "Time spent: 00:00:00"
                    }
                    </p>
                </div>
                </div>
            </div>
            ) : spotify ? (
            <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                <Image
                    quality={50}
                    src={spotify.album_art_url || ""}
                    height={94}
                    width={94}
                    className="w-20 select-none justify-self-start rounded-lg"
                    alt="album cover"
                />
                <div className="flex flex-col justify-center">
                    <h2 className="truncate text-base font-semibold leading-tight text-pink-100">
                    {spotify.song}
                    </h2>
                    <h4 className="truncate text-sm leading-tight text-pink-100 opacity-80">
                    by {spotify.artist}
                    </h4>
                    <h4 className="truncate text-sm leading-tight text-pink-100 opacity-80">
                    on {spotify.album}
                    </h4>
                </div>
                </div>

                <div className="mt-4 w-full">
                <div className="relative h-2 w-full rounded-md bg-pink-200/20">
                    <span
                    className="absolute h-2 rounded-md bg-pink-200/70"
                    style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="mt-1 flex items-center justify-between px-0.5 text-sm text-pink-100">
                    {elapsed ? <span>{getMinuteAndSeconds(elapsed)}</span> : <span>00:00</span>}
                    {duration ? <span>{getMinuteAndSeconds(duration)}</span> : <span>00:00</span>}
                </div>
                </div>
            </div>
            ) : (
                <div className="relative flex flex-col items-center justify-center h-full w-full">
                
                    <h2 className="w-full select-none text-center text-base font-bold tracking-tighter text-violet-200 sm:text-lg">
                        I’m offline, probably I’m on the court or I’m sleeping
                    </h2>
                    <div aria-hidden className="absolute inset-1 flex items-center justify-center">
                        <div className="absolute translate-y-[14px]">
                            <span className="block h-16 w-16 animate-ping rounded-full bg-violet-300 duration-1000" />
                        </div>
                    </div>
                    
                    <div className="relative flex items-center justify-center mt-1">
                        <div className="relative h-16 w-16 border-2 rounded-full border-violet-200/70 ">
                            <Image
                                src="/trunksfogao.jpg"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full bg-gray-300 backdrop-blur opacity-80"
                                alt="offline"
                            />
                        </div>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
}

  

