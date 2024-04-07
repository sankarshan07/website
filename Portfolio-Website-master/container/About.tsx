import React from 'react';
import {Title} from "@/components";
import {BsWindowFullscreen} from "react-icons/bs";
// import {SiAzuredevops, SiWebpack} from "react-icons/si";
import {Bounce} from "@/motion";
import Image from "next/image";
import images from "@/assets";
import {motion} from "framer-motion";
// import {AiOutlineMobile} from "react-icons/ai";

const About = () => {
    const domains = {
        // "DevOps": <SiAzuredevops className={``} size={40}/>,
        "FullStack": <BsWindowFullscreen className={``} size={40}/>,
        // 'AppDev': <AiOutlineMobile className={``} size={40}/>,
        // "BlockChain": <SiWebpack className={``} size={40}/>,
    }
    return (
        <>
            <motion.section
                initial={{y: 10, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: .7, duration: .7}}
                className={` select-none mt-32 mb-32 max-w-contentContainer mx-auto  flex flex-col gap-8`}
                id={`about`}>
                <Title title={`About Me`} number={`01.`} line/>
                <div className={`flex flex-col items-center lgl:flex-row gap-16`}>
                    <div
                        className={`w-full lgl:w-2/3 font-SourceSansPro text-xl text-black  font-medium flex flex-col   gap-4`}>
                        <p className={`-mt-5  tracking-wide font-medium font-SourceSansPro md:text-left xs:text-center text-neutral-200 dark:text-black `}>
                            


As a second-year BCA student, I'm passionate about coding and software development. Though I'm still gaining experience, I'm focused on Full Stack development. I'm eager to tackle complex problems and make a positive impact through technology.
                        </p>
                        <div
                            className={`flex xs:justify-center sm:justify-center md:justify-start tracking-widest text-neutral-400 dark:text-black font-black font-SourceSansPro `}>
                            <span>
                            {`I'm currently `}
                            </span>
                            &nbsp;
                            <span className={'text-purple-500 font-black dark:text-teal-500 font-SourceSansPro italic'}>
                                 Mastering!
                            </span>
                        </div>
                        <ul className={`max-w-auto flex sm:justify-center md:justify-start text-white text-md font-Inter `}>
                            <li className={`xs:grid  xm:grid-rows-2 xs:grid-cols-2 md:flex `}>
                                {Object.entries(domains).map(([key, Icon], index) => (
                                    <span
                                        className={`mb-4 font-black select-none hover:text-black transition duration-250 ease-in whitespace-normal flex `}
                                        key={index}>
                                    <Bounce whileTapCustom={1.3} whileHoverCustom={1.2}>
                                        <div
                                            className={`p-7 font-SourceSansPro tracking-widest font-black bg-neutral-900 border-neutral-200 h-32 w-32  
                                            rounded-full text-sm 
                                            
                                            dark:bg-neutral-950/10 dark:text-black bg-black text-white hover:bg-white hover:text-black transition duration-300  m-2 ml-5 flex flex-col overflow-visible uppercase justify-center items-center`}>
                                        {Icon}&nbsp;&nbsp;
                                            {key}&nbsp;&nbsp;
                                        </div>
                                    </Bounce>
                                    </span>
                                ))}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Bounce>
                            <Image className={`no-drag select-none rounded-full h-60 w-60 object-cover`}
                                   src={images.sankyy}
                                   alt={`Sankarshan`}/>

                        </Bounce>
                    </div>

                </div>
            </motion.section>
        </>
    );
};

export default About;
