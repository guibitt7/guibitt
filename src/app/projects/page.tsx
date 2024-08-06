import { Main } from "@/components/Main";
import { MainCard } from "@/components/MainCard/MainCard";
import { Navbar } from "@/components/MainCard/Navbar";
import { Resume } from "@/components/MainCard/Resume";
import { Time } from "@/components/MainCard/Time"
import Image from "next/image";
import { projects } from "@/utils/Consts";
import Link from "next/link";



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
                Main Projects
            </div>

            <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 justify-center">
                {projects.map((project, index) => (
                    <div key={index} className="opacity-100 mb-0 flex justify-center">
                        <div className="w-full max-w-xs md:max-w-sm md:h-[530px] h-[580px] rounded-xl flex flex-col bg-violet-100/40 p-4">
                            <div className="flex gap-2 mb-2">
                                <section className="w-3 h-3 rounded-full bg-red-500"></section>
                                <section className="w-3 h-3 rounded-full bg-yellow-500"></section>
                                <section className="w-3 h-3 rounded-full bg-green-500"></section>
                            </div>
                            <div className="flex flex-col justify-center items-center text-start font-mclaren mb-4">
                                <span className="text-xl text-violet-200 glow text-center">{project.name}</span>
                                <span className="text-violet-100 text-sm">
                                    {project.description}
                                </span>
                            </div>
                            <p className="font-mclaren glow mb-2 text-violet-100 flex-grow">
                                {project.status}
                            </p>
                            <div className="flex flex-col">
                                <div className="flex justify-start mb-2">
                                    {project.technologies.map((tech, idx) => (
                                        <Image
                                            key={idx}
                                            width={100}
                                            height={100}
                                            quality={100}
                                            priority={false}
                                            src={tech.icon}
                                            className="h-8 w-8 opacity-90 mr-2 glow-tech hover:glow-tech hover:opacity-100"
                                            alt={`${tech.label} icon`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="mt-auto">
                                <Link
                                    id=""
                                    href={project.link || "/"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=""
                                >
                                    <Image
                                        width={500}
                                        height={200}
                                        quality={100}
                                        src={project.cover}
                                        className="h-40 w-full object-cover select-none rounded-md"
                                        alt="coding"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Main>
    );
}