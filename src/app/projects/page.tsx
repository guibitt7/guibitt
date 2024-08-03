import { Main } from "@/components/Main";
import { MainCard } from "@/components/MainCard/MainCard";
import { Navbar } from "@/components/MainCard/Navbar";
import { Resume } from "@/components/MainCard/Resume";
import { Time } from "@/components/MainCard/Time"




export default async function Projects() {
    return(
        <Main>
            <div className="col-span-12 flex justify-center">
                <Navbar />
            </div>
            
            <MainCard className="col-span-12 md:col-span-10 flex-grow"/>

            <div className="col-span-4 flex h-full hidden md:flex grid-cols-1 flex-col justify-evenly gap-3 md:col-span-2">
                <Time />
                <Resume />
            </div>

            <div className="relative text-3xl font-mclaren col-span-12 flex justify-center glow text-violet-200">
                Main Project
            </div>

            <div className="relative col-span-12">
                <div className="w-72 h-72 rounded-md backdrop-blur">
                    <div className="relative flex justify-center font-mclaren">
                        Teste
                    </div>
                    <div className="">
                        Desccrição 
                    </div>
                    <div className="">
                        
                    </div>
                </div>
            </div>
        </Main>

    );
}