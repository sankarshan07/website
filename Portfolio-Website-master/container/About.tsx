// import React from 'react';
// import {Title} from "@/components";
// import {BsWindowFullscreen} from "react-icons/bs";
// // import {SiAzuredevops, SiWebpack} from "react-icons/si";
// import {Bounce} from "@/motion";
// import Image from "next/image";
// import images from "@/assets";
// import {motion} from "framer-motion";
// // import {AiOutlineMobile} from "react-icons/ai";

// const About = () => {
//     const domains = {
//         // "DevOps": <SiAzuredevops className={``} size={40}/>,
//         "FullStack": <BsWindowFullscreen className={``} size={40}/>,
//         // 'AppDev': <AiOutlineMobile className={``} size={40}/>,
//         // "BlockChain": <SiWebpack className={``} size={40}/>,
//     }
//     return (
//         <>
//             <motion.section
//                 initial={{y: 10, opacity: 0}}
//                 animate={{y: 0, opacity: 1}}
//                 transition={{delay: .7, duration: .7}}
//                 className={` select-none mt-32 mb-32 max-w-contentContainer mx-auto  flex flex-col gap-8`}
//                 id={`about`}>
//                 <Title title={`About Me`} number={`01.`} line/>
//                 <div className={`flex flex-col items-center lgl:flex-row gap-16`}>
//                     <div
//                         className={`w-full lgl:w-2/3 font-SourceSansPro text-xl text-black  font-medium flex flex-col   gap-4`}>
//                         <p className={`-mt-5  tracking-wide font-medium font-SourceSansPro md:text-left xs:text-center text-neutral-200 dark:text-black `}>
                            


// As a second-year BCA student, I'm passionate about coding and software development. Though I'm still gaining experience, I'm focused on Full Stack development. I'm eager to tackle complex problems and make a positive impact through technology.
//                         </p>
//                         <div
//                             className={`flex xs:justify-center sm:justify-center md:justify-start tracking-widest text-neutral-400 dark:text-black font-black font-SourceSansPro `}>
//                             <span>
//                             {`I'm currently `}
//                             </span>
//                             &nbsp;
//                             <span className={'text-purple-500 font-black dark:text-teal-500 font-SourceSansPro italic'}>
//                                  Mastering!
//                             </span>
//                         </div>
//                         <ul className={`max-w-auto flex sm:justify-center md:justify-start text-white text-md font-Inter `}>
//                             <li className={`xs:grid  xm:grid-rows-2 xs:grid-cols-2 md:flex `}>
//                                 {Object.entries(domains).map(([key, Icon], index) => (
//                                     <span
//                                         className={`mb-4 font-black select-none hover:text-black transition duration-250 ease-in whitespace-normal flex `}
//                                         key={index}>
//                                     <Bounce whileTapCustom={1.3} whileHoverCustom={1.2}>
//                                         <div
//                                             className={`p-7 font-SourceSansPro tracking-widest font-black bg-neutral-900 border-neutral-200 h-32 w-32  
//                                             rounded-full text-sm 
                                            
//                                             dark:bg-neutral-950/10 dark:text-black bg-black text-white hover:bg-white hover:text-black transition duration-300  m-2 ml-5 flex flex-col overflow-visible uppercase justify-center items-center`}>
//                                         {Icon}&nbsp;&nbsp;
//                                             {key}&nbsp;&nbsp;
//                                         </div>
//                                     </Bounce>
//                                     </span>
//                                 ))}
//                             </li>
//                         </ul>
//                     </div>
//                     <div>
//                         <Bounce>
//                             <Image className={`no-drag select-none rounded-full h-60 w-60 object-cover`}
//                                    src={images.sankyy}
//                                    alt={`Sankarshan`}/>

//                         </Bounce>
//                     </div>

//                 </div>
//             </motion.section>
//         </>
//     );
// };

// export default About;

import React from 'react';
import {Title} from "@/components";
import {BsWindowFullscreen} from "react-icons/bs";
// import {SiAzuredevops, SiWebpack} from "react-icons/si";
import {SiJavascript, SiPython,SiReact} from "react-icons/si";
import { SiVercel, SiNetlify, SiFirebase } from "react-icons/si";

import {Bounce} from "@/motion";
import Image from "next/image";
import images from "@/assets";
import {motion} from "framer-motion";
import {HiDocumentText} from "react-icons/hi";
import {AiOutlineMobile} from "react-icons/ai";

const About = () => {
    const handleResumeDownload = () => {

    };
    const handleNothing = () => {
        console.log('nothing')
    }
    const domains = {
        "Python": <SiPython className={``} size={40}/>,
        'React': <SiReact className={``} size={40}/>,
        "JavaScript": <SiJavascript className={``} size={40}/>,
        "FullStack": <BsWindowFullscreen className={``} size={40}/>,
    }
    const domainsDep = {
        "Firebase": <SiFirebase className={``} size={40}/>,
        'Netlify': <SiNetlify className={``} size={40}/>,
        "Vercel": <SiVercel className={``} size={40}/>,
   
    }
      const hobbies = {
            
            "Resume": <HiDocumentText size={30} onClick={handleResumeDownload} style={{cursor: 'pointer'}}/>
        }
    return (
        <>
            <motion.section
                initial={{y: 10, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: .7, duration: .7}}
                className={` select-none mt-32 mb-32 max-w-contentContainer mx-auto  flex flex-col gap-8`}
                id={`about`}>
                <Title title={`About Project Hub`} number={`01.`} line/>
                <div
                            className={`flex xs:justify-center sm:justify-center md:justify-start tracking-widest text-neutral-400 dark:text-black font-black font-SourceSansPro `}>
                            {/* <span>
                            {`I'm currently `}
                            </span> */}
                            &nbsp;
                            <span className={'text-purple-500 text-4xl font-black dark:text-teal-500 font-SourceSansPro italic'}>
                                Project Hub 
                            </span>
                        </div>
                <div className={`flex flex-col items-center lgl:flex-row gap-16`}>
                    <div
                        className={`w-full lgl:w-2/3 font-SourceSansPro text-xl text-black  font-medium flex flex-col   gap-4`}>
                        <p className={`-mt-5  tracking-wide font-medium font-SourceSansPro md:text-left xs:text-center text-neutral-200 dark:text-black `}>
                            


                        is a platform showcasing web applications built with various technologies. It highlights project purpose, tech stack, and implementation details, providing a structured and engaging presentation for both academic and professional use.
                        </p>
                       





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

                                {/* Resume  */}
                                    {/* <motion.div
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
                                            </motion.div> */}
                                            {/* resume end  */}


                            </li>
                        </ul>
                        <p className={`-mt-5  tracking-wide font-medium font-SourceSansPro md:text-left xs:text-center text-neutral-200 dark:text-black `}>
                            


                            <br/>
                            <br />Webs are deployed in <span className={'text-purple-500 font-bold dark:text-teal-500 font-SourceSansPro italic'}>
                               Firebase, Netlify
                            </span> &nbsp;and&nbsp; <span className={'text-purple-500 font-bold dark:text-teal-500 font-SourceSansPro italic'}>
                                Vercel 
                            </span>, ensuring seamless hosting and accessibility. <br />Each deployment is optimized for performance, reliability, and scalability across different environments.
                            </p>
                            <ul className={`max-w-auto flex sm:justify-center md:justify-start text-white text-md font-Inter `}>
                            <li className={`xs:grid  xm:grid-rows-2 xs:grid-cols-2 md:flex `}>
                                {Object.entries(domainsDep).map(([key, Icon], index) => (
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

                    {/* my image  */}

                    {/* <div>
                        <Bounce>
                            <Image className={`no-drag select-none rounded-full h-60 w-60 object-cover`}
                                //    src={images.sankyy}
                                   alt={`Sankarshan`}/>

                        </Bounce>
                    </div> */}


                    {/* my image end  */}

                </div>
            </motion.section>
        </>
    );
};

export default About;
