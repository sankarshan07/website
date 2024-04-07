import React from 'react';
import {Title}from "@/components";
import Image from "next/image";
import image from '@/assets/index';
import {Bounce, SpringText} from "@/motion";

const Footer: React.FC = () => {
    const skillList = [
        'nestjs', 'tailwind'] as const
    return (
        <div className={` max-w-contentContainer flex flex-col justify-center item-center mx-auto lgl:px-20 py-24'`}>
            <div className={'flex flex-col gap-10 items-center justify-center'}>
                <Title title={' Already Here?'} number={`04.`}/>
                <h1 className={`font-BebasNeue dark:text-black text-white underline mb-4 mt-14 xs:text-4xl sm:text-6xl text-9xl`}>Connect and collaborate.</h1>
                <p className={'w-[70%] dark:text-black text-center text-white font-Inter mt-2'}>
                Feel free to reach out for questions, opportunities, or just to say hello! Let's collaborate and create something amazing together.
                </p>
                <div className={'flex flex-col mb-10 items-center justify-center mt-6'}>
                    <a href="mailto:sankarshandesai3107@gmail.com" target="_blank"
                       className={`border-2 text-black mt-4 font-black font-Inter bg-black text-white dark:text-black dark:bg-white dark:hover:text-white dark:hover:bg-black hover:text-black hover:bg-white transition duration-300 rounded-full p-2 m-2`}>Connect</a>
                </div>
                <p className={'w-[70%] dark:text-black text-center text-white font-Inter mt-16'}>
                Created using Next.js, Tailwind CSS, and TypeScript.
                </p>

                <div className={'flex gap-16'}>
                    <Bounce>
                        <SpringText>
                            <div>
                                <Image className={`invert dark:invert-0 no-drag mt-2 mb-2 `}
                                       height={30}
                                       src={image.next}
                                       alt={""}/>
                            </div>
                        </SpringText>
                    </Bounce>
                    <Bounce>
                        <SpringText>
                            <div>
                                <Image
                                    className={` no-drag mt-2 gap-5 mb-2 `}
                                    height={30}
                                    src={image.nestjs}
                                    alt={""}/>
                            </div>
                        </SpringText>
                    </Bounce><Bounce>
                    <SpringText>
                        <div>
                            <Image
                                className={` no-drag mt-2 gap-5 mb-2 `}
                                height={30}
                                src={image.tailwind}
                                alt={""}/>
                        </div>
                    </SpringText>
                </Bounce>
                </div>
            </div>
        </div>
    );
}
export default Footer;
