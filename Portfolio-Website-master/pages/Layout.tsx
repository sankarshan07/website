import React from 'react';
import Links from "@/components/Links";
import {About, Footer, Header, Skills} from "@/container";
// import Coding from "@/components/Coding";
import {motion} from "framer-motion";
import SkillsBackup from "@/container/SkillsBackup";
import Projects from "@/container/Projects";
// import Contact from "@/components/Contact";


import Title from "@/components/Title";

const Layout: React.FC = () => {
    const componentMap: JSX.Element[] = [
        <Header key={1}/>,
        <About key={2}/>,
        <SkillsBackup key={3}/>,
        <Projects key={4}/>,
    ];

    return (
        <motion.div className={` w-full h-[88vh] xl:items-center gap-20 justify-between`}>
            <motion.div
                initial={{x: -100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{delay: 1}}
                className={`hidden text-white xl:inline-flex w-32 h-full fixed left-0 bottom-0`}>
                <Links/>
            </motion.div>
            <div className={`h-[88vh] sm:mt-16 md:mt-5 xl:mt-0 mx-auto p-4 `}>
                <Header/>
                <About/>
                <Skills/>
              
                <Projects/>
                
                
                <Footer/>
            </div>
            <motion.div
                initial={{x: 100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{delay: 1}}
                className={`hidden  xl:inline-flex w-32 h-full fixed right-0 bottom-0`}>
                {/* <Coding/> */}
            </motion.div>
        </motion.div>
    );
};

export default Layout;
