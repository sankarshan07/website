import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs'
import {Bounce} from "@/motion";

const Links: React.FC = () => {
    const spanClassName = 'w-14 h-14  text-xl rounded-full inline-flex items-center justify-center cursor-pointer dark:text-black transition duration-250 ease-in'
    return (
        <div className={`p-2 h-full flex flex-col items-center justify-center gap-4`}>
            <div className={'flex flex-col gap-5'}>
                <Bounce>
                    <a href="https://github.com/sankarshan07"  target="_blank">
                        <span className={spanClassName + " hover:text-red-500 dark:hover:text-red-500 "}><BsGithub size={30}/></span>
                    </a>
                </Bounce>
                <Bounce>

                    <a href="https://www.linkedin.com/in/sankarshan-desai-94a026268/" target="_blank">
                        <span className={spanClassName + "  dark:hover:text-[#0077b5] hover:text-[#0077b5]"}><BsLinkedin size={30}/></span>
                    </a>
                </Bounce>
                <Bounce>
                    <a href="https://www.instagram.com/sankarshan_desai/?igsh=Z2hiOXdqcmQwZ2F2" target="_blank">
                        <span className={spanClassName + ' dark:hover:text-yellow-500 hover:text-yellow-500'}>< BsInstagram size={30}/></span>
                    </a>
                </Bounce>
              
            </div>
        </div>
    );
};

export default Links;
