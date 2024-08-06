import React from "react";
import { Main } from "@/components/Main";
import { MainCard } from "@/components/MainCard/MainCard";
import { Navbar } from "@/components/MainCard/Navbar";
import { Resume } from "@/components/MainCard/Resume";
import { Time } from "@/components/MainCard/Time";
import ContactForm from "@/components/Pages/Contact/Contact-form";

export default async function Contact(){
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

            <ContactForm />

        </Main>
    );
}