"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BRtime } from "@/utils/Consts";

const getTimeFormatted = (date: Date) => {
  const [hours, minutes] = BRtime.format(date).split(":");
  return { hours: hours.padStart(2, '0'), minutes: minutes.padStart(2, '0') };
};

export function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { hours, minutes } = getTimeFormatted(time);
  const isNight = Number(hours) >= 19 || Number(hours) < 7;
  const imageSrc = isNight ? "/night.jpg" : "/day.jpg";
  const altText = isNight ? "Night time" : "Day time";

  return (
    <div className="center relative flex h-full items-center justify-center rounded-lg bg-violet-300/40">
      <Image
        fill
        sizes="100"
        quality={90}
        src={imageSrc}
        className="z-10 w-full select-none rounded-md object-cover opacity-80"
        alt={altText}
      />

      <div className="z-20 select-none text-center font-semibold text-pink-200">
        <h2 className="text-2xl">
          {hours}
          <span className="">:</span>
          {minutes}
        </h2>
        <p className="text-sm font-mclaren">in Brazil</p>
      </div>
    </div>
  );
}


