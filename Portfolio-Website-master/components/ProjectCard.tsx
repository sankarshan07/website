import React from 'react';
import image from "@/assets";
import Image, {StaticImageData} from "next/image";
import {Bounce, SpringText} from "@/motion";

interface ProjectProps {
    title?: string;
    mainImage?: StaticImageData | string;
    stack?: string[];
    titleColor?: string;
    glowColor?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({title, glowColor, mainImage, stack, titleColor}) => {
    return (
        <div className=" w-full  flex group col justify-center relative  rounded-3xl p-2">
            <div className="relative w-full transition  z-999999 h-full rounded-3xl overflow-hidden">
                <Image src={mainImage || ''}
                       className="object-cover group-hover:scale-125 transition duration- h-full w-full rounded-3xl"
                       alt=""/>
                <div
                    className="absolute bottom-0 left-0 w-full h-[100%] bg-gradient-to-t from-black to-transparent"></div>
            </div>
            <div className="absolute bottom-0 p-2">
                <h1
                    className={` ${titleColor} xs:ml-2 font-Inter mb-4 mt-6 sm:text-4xl md:text-5xl font-black tracking-wide`}>
                    {title}
                </h1>
                <div className="relative mt-4 p-3 grid-cols-4 flex  mb-4 gap-5 text-3xl">
                    {stack?.map((item) => (
                        <Bounce key={item}>
                            <SpringText key={item}>
                                <div>
                                    <Image
                                        className={`no-drag ${item === 'next' || item === 'express' ? ' mt-2 dark:invert' : ''}`}
                                        key={item}
                                        height={item === 'next' ? 30 : 50}
                                        src={image[item as keyof typeof image]}
                                        alt={item}
                                    />
                                </div>
                            </SpringText>
                        </Bounce>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
