import {Inter} from 'next/font/google'
import {Navbar} from "@/components";
import React from "react";
import Layout from "@/pages/Layout";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <div className={' relative flex flex-col justify-center items-center overflow-hidden'}>
            <div className={`absolute top-0 z-9999999 w-[100%] overflow-visible `}>
                <Navbar/>
            </div>
            <div
                className={` bg-black ease-out dark:bg-white/5 transition duration-500 select-none w-full h-screen overflow-x-hidden overflow-scroll`}>
                <Layout/>
            </div>
        </div>
    )
}
