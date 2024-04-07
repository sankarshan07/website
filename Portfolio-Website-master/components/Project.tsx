import React from 'react';
import Image, {StaticImageData} from 'next/image';
import image from '@/assets'
import {Bounce, SpringText} from "@/motion";
import {BsGithub, BsLink45Deg} from "react-icons/bs";

interface ProjectProps {
    title?: string;
    mainImage?: StaticImageData | string;
    stack?: string[];
    description?: string;
    github?: string;
    link?: string;
    reverse?: boolean;
}

const Project: React.FC<ProjectProps> = ({title, reverse, github, link, mainImage, stack, description}) => {
    return (
        <div className={` select-none  w-full flex flex-col items-center  justify-center gap-28 mt-10`}>
            <div className={`flex flex-col ${reverse ? 'xl:flex-row-reverse' : 'xl:flex-row'}  gap-6`}>
                <div className={`xl:hidden `}>
                    <p className={`font-BebasNeue text-xl text-purple-500  dark:text-teal-500  tracking-wide `}>Featured
                        Project</p>
                    <span
                        className={'text-2xl font-Inter font-black text-white  dark:text-black inline-flex '}> {title}</span>
                </div>
                <a className={` w-full xl:w-1/2 group h-auto relative group`} href="#" target="" rel="noreferrer">
                    <div className={'overflow-hidden rounded-2xl transition duration-200'}>
                        <Image
                            className={`no-drag group-hover:scale-125 transition duration-200 rounded-2xl w-full h-full object-contain`}
                            src={mainImage || ''} alt=""/>
                    </div>
                </a>
                <div
                    className={`w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between ${reverse ? 'items-start' : `items-end`}  text-right z-10 text-black`}>
                    <p className={`sm:hidden xl:flex font-BebasNeue text-xl text-purple-500 dark:text-teal-500 tracking-wide `}>Featured
                        Project</p>
                    <SpringText
                        className={'sm:hidden font-Inter dark:text-black xl:flex text-2xl text-white font-black'}
                        text={title}/>
                    <p className={`select-none font-SourceSansPro  tracking-widest font-semibold text-sm sm:text-left inline-flex dark:bg-black dark:text-white ${reverse ? 'xl:text-left' : `xl:text-right`} text-black bg-white md:text-base p-4 md:p-6 rounded-2xl`}>
                        {description}
                    </p>
                    <ul className={'xs:flex  gap-5'}>
                        {stack?.map((item) => (
                            <Bounce key={item}>
                                <SpringText key={item}>
                                    <div>
                                        <Image
                                            className={`no-drag ${item === 'next' || item === 'express' ? 'invert mt-2 dark:invert-0' : ''}`}
                                            key={item}
                                            height={50}
                                            src={image[item as keyof typeof image]}
                                            alt={item}
                                        />
                                    </div>
                                </SpringText>
                            </Bounce>
                        ))}
                    </ul>
                    <div className={`flex gap-5`}>
                        <Bounce>
                            <a className={`no-drag`} href={github} target="_blank">
                                <BsGithub className={'text-white'} size={45}/>
                            </a>
                        </Bounce>
                        <Bounce>
                            <a href={link} className={`no-drag`} target="_blank">
                                <BsLink45Deg className={'bg-black text-white rounded-full'} size={45}/>
                            </a>
                        </Bounce>
                    </div>
                </div>
            </div>
            <span className={'-mt-10 md:inline-flex w-full h-[.5px] bg-gray-700  '}></span>
        </div>
    )
        ;
};

export default Project;
