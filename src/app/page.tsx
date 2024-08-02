import { Main } from "@/components/Main";
import { MainCard } from "@/components/MainCard/MainCard";
import { Navbar } from "@/components/MainCard/Navbar";
import { Resume } from "@/components/MainCard/Resume";
import { Time } from "@/components/MainCard/Time"
import { GitHub } from "@/components/Pages/Home/GitHub";
import { Lanyard } from "@/components/Pages/Home/Lanyard";
import { Technologies } from "@/components/Pages/Home/Technologies";
import { Timeline } from "@/components/Pages/Home/Timeline";
import dynamic from "next/dynamic";
const Setup = dynamic(() => import("@/components/Pages/Home/Setup"), { ssr: false })



export default function Home() {
  return (
    <Main>
      
      <div className="col-span-12 flex justify-center">
        <Navbar />
      </div>
      
      <MainCard className="col-span-12 md:col-span-10 flex-grow"/>

      <div className="col-span-4 flex h-full grid-cols-1 flex-col justify-evenly gap-3 md:col-span-2">
        <Time />
        <Resume />
      </div>

      <GitHub className="col-span-8 md:col-span-6"/>
      <Lanyard className="col-span-12 md:col-span-6"/>
      
      <div className="sm:col-span-6 col-span-12">
          <Timeline />
      </div>
      <div className="col-span-12 sm:col-span-6 self-start">
        <Technologies />
      </div>

      <div className="sm:col-span-6 ">
        <Setup />
      </div>

    </Main>
  );
}
