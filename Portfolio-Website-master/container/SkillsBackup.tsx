import React, {useState} from 'react';
import Title from "@/components/Title";
import {BsCreditCard2Front} from "react-icons/bs";
import {BiCodeAlt} from "react-icons/bi";
import {FiCodesandbox} from "react-icons/fi";
import {SiWebpack} from "react-icons/si";
import {AiOutlineCloudServer, AiOutlineMobile} from "react-icons/ai";
import Frontend from "@/database/Frontend";
import Backend from "@/database/Backend";
import DevOps from "@/database/DevOps";
import Programming from "@/database/Programming";
import Web3 from "@/database/Web3";
import AppDev from "@/database/AppDev";

const SkillsBackup: React.FC = () => {
    const skills = {
        'Frontend': <BsCreditCard2Front/>,
        'Backend': <AiOutlineCloudServer/>,
        'Programming': <BiCodeAlt/>,
        'DevOps': <FiCodesandbox/>,
        'App Dev': <AiOutlineMobile/>,
        'Web 3.0': <SiWebpack/>,
    }
    const [renderSkills, setRenderSkills] = useState(<Frontend/>)
    const [active, setActive] = useState('Frontend')
    //
    return (
        <>
            <section
                className={` font-Inter tracking-wider select-none max-w-contentContainer mx-auto py-10 lgl:py-24 `}
                id={`experience`}>
                <div className={`relative top-32 w-full flex justify-center items-center `}>
                    <div
                        className="mix-blend-plus-lighter absolute animate-ping-slow top-0 -left-4 w-24 h-24 bg-red-800 rounded-full filter blur-xl"></div>
                    <div
                        className={`absolute mix-blend-lighten z-1 animate-ping-slow2 top-20 left-49 w-24 h-24 bg-green-700 rounded-full  filter blur-xl`}>
                    </div>
                    <div
                        className={`mix-blend-plus-lighter absolute animate-ping-slow3 top-32 left-40 w-24 h-24 bg-orange-400 rounded-full  filter blur-xl`}>
                    </div>
                    <div
                        className={`mix-blend-plus-lighter absolute animate-ping-slow4 top-32 left-96 w-24 h-24 bg-blue-800 rounded-full  filter blur-xl`}>
                    </div>
                    <div
                        className={`absolute mix-blend-plus-lighter animate-ping-slow5 -bottom-90 left-20 w-24 h-24 bg-white rounded-full  filter blur-xl`}>
                    </div>
                    <div
                        className={`absolute mix-blend-plus-lighter animate-ping-slow2 top-60 bottom-10 left-20 w-24 h-24 bg-pink-400 rounded-full  filter blur-xl`}>
                    </div>
                    <div
                        className={`absolute mix-blend-plus-lighter animate-ping-slow3 top-60 bottom-10 left-60 w-24 h-24 bg-teal-600 rounded-full  filter blur-xl`}>
                    </div>
                </div>
                <Title title={`SkillsBackup`} line number={`02.`}/>
                <div className={`relative z-9999 w-full mt-10 flex flex-col md:flex-row gap-16`}>
                    <ul>
                        {Object.entries(skills).map(([key, Icon], index) => (
                            <li
                                onClick={() => {
                                    switch (key) {
                                        case 'Frontend':
                                            setRenderSkills(<Frontend/>)
                                            setActive('Frontend')
                                            break;
                                        case 'Backend':
                                            setRenderSkills(<Backend/>)
                                            setActive('Backend')
                                            break;
                                        case 'Programming':
                                            setRenderSkills(<Programming/>)
                                            setActive('Programming')
                                            break;
                                        case 'DevOps':
                                            setRenderSkills(<DevOps/>)
                                            setActive('DevOps')
                                            break;
                                        case 'Web 3.0':
                                            setRenderSkills(<Web3/>)
                                            setActive('Web 3.0')
                                            break;
                                        case 'App Dev':
                                            setRenderSkills(<AppDev/>)
                                            setActive('App Dev')
                                            break;
                                    }
                                }}
                                className={`${(active === key) ? ' border-l-green-500  dark:bg-black dark:text-white text-black bg-white  ' : 'border-l-white dark:border-l-black text-white '} border-l-[10px]  font-black uppercase  dark:text-black bg-transparent hover:bg-white hover:text-black py-3 text-sm cursor-pointer duration-300 px-8 `}
                                key={index}>
                                <div className={`flex p-2 flex-row  text-xl md:text-2xl italic items-center`}>
                                    {Icon}&nbsp;
                                    {key}
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className={`flex flex-col md:ml-4`}>
                        {renderSkills}
                        {/*<hr className={`text-white`}/>*/}
                    </div>
                </div>

            </section>
        </>
    );
};

export default SkillsBackup;
