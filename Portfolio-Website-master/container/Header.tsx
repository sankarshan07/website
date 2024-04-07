import React from 'react';
import {Bounce, SpringText} from "@/motion";
import {motion} from "framer-motion";
import {BsCodeSlash} from "react-icons/bs";
import {MdDeveloperMode} from "react-icons/md";
import {FaConnectdevelop} from "react-icons/fa";
import {SiYoutubegaming} from "react-icons/si";
import {VscCircuitBoard} from "react-icons/vsc";
import {HiDocumentText} from "react-icons/hi";

const Header: React.FC = () => {
    const gradientText = "bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent ";
    const handleResumeDownload = () => {

    };
    const handleNothing = () => {
        console.log('nothing')
    }
    const hobbies = {
        "PROGRAMMING": <BsCodeSlash className={`text-red-500`} size={30}/>,
        "TECHNOLOGY": <VscCircuitBoard className={`text-blue-500`} size={30}/>,
        "DEVELOPMENT": <MdDeveloperMode className={`text-green-500`} size={30}/>,
       
        "GAMING": <SiYoutubegaming className={`text-pink-500`} size={30}/>,
        "Resume": <HiDocumentText size={30} onClick={handleResumeDownload} style={{cursor: 'pointer'}}/>
    }
    return (
        <section
            id={`home`}
            className={`select-none transition duration-300 max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4`}>
            <div className={`relative transition duration-500 top-32 w-full flex justify-center items-center `}>
                <div className={`absolute mix-blend-plus-lighter bg-indigo-700 
                 dark:mix-blend-multiply dark:bg-teal-400 
                 animate-blob  top-0 -left-4 w-72 h-72 md:w-[450px] md:h-[450px]  rounded-full filter blur-xl`}></div>
                <div className={`absolute mix-blend-plus-lighter bg-orange-500
                 dark:mix-blend-multiply dark:bg-pink-400 
                  z-1 animate-blob   -bottom-80 left-36 md:left-60 w-72 h-72 md:w-[450px] md:h-[450px] rounded-full filter blur-xl`}></div>
                <div className={`absolute mix-blend-screen bg-teal-500
                 dark:mix-blend-multiply dark:bg-purple-500 
                  animate-blob  -bottom-40 left-20 w-72 h-72 md:w-[450px] md:h-[450px]  rounded-full filter blur-xl`}></div>
            </div>
            <motion.h3
                initial={{y: 10, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: .4, duration: .5}}
                className={`ml-4 text-lg font-inter tracking-wide font-black dark:text-black font-Inter text-white text-black`}>
                {/*⚠️ Backend Server Not Live  ⚠️*/}
                Hi, i'm
            </motion.h3>
            <SpringText className={'relative z-999 inline-flex'}>

                <motion.h1
                    initial={{y: 10, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{delay: .5, duration: .6}}
                    className={`pb-2 ml-5 text-6xl z-99 font-Inter transition duration-300 tracking-wide 
                    //dark
                    text-white 
                    //light
                    dark:text-black 
                     font-black `}>
                    Sankarshan Desai{' '}
                </motion.h1>
            </SpringText>
            <motion.h1
                initial={{y: 10, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: .6, duration: .6}}
                className={`text-neutral-600 text-4xl font-Inter  tracking-wide italic dark:text-gray-950/10 transition duration-300`}>
                <span className={'font-black'}>{'<I code maybe/>'}</span>
            </motion.h1>
            <motion.div
                initial={{y: 10, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: .7, duration: .6}}
                className={`text-base md:max-w-[650px] text-neutral-200 font-medium `}>
                <div className={` relative z-9999 ml-5 mt-4 text-white font-Inter text-base`}>
                    {Object.entries(hobbies).map(([key, Icon], index) => (
                        <span
                            className={`mb-4 dark:text-black text-white select-none font-BebasNeue text-3xl font-black hover:text-white transition duration-250 ease-in whitespace-normal flex `}
                            key={index}>
                            <Bounce>
                                <div onClick={key === 'Resume' ? handleResumeDownload : handleNothing}
                                     className={`${key === 'Resume' ? 'cursor-pointer dark:bg-black dark:text-white bg-white hover:text-white hover:bg-black text-black rounded transition duration-300 ' : ' '} flex flex-row justify-center items-center`}>
                                {Icon}&nbsp;
                                    {key === 'Resume' ? (<div>
                                        <a href={'https://drive.google.com/file/d/17cj7ftuI1h9dnHOf2NlRscV3JOrgZGvR/view?usp=sharing'}
                                           download={'P Sankarshan_resume.pdf'}>Resume</a>
                                    </div>) : (<div>
                                        {key}
                                    </div>)}
                                    &nbsp;&nbsp;
                                </div>
                            </Bounce>
                        </span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Header;
