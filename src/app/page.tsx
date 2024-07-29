import { Main } from "@/components/Main";
import { MainCard } from "@/components/MainCard/MainCard";
import { Resume } from "@/components/MainCard/Resume";
import { Time } from "@/components/MainCard/Time"
import { GitHub } from "@/components/Pages/Home/GitHub";

export default function Home() {
  return (
    <Main>
      <MainCard className="col-span-12 md:col-span-10"/>

      <div className="col-span-4 flex h-full grid-cols-1 flex-col justify-evenly gap-3 md:col-span-2">
        <Time />
        <Resume />
      </div>
      <div className="col-span-8 md:col-span-6">
        <GitHub />
      </div>
        
    </Main>
  );
}
