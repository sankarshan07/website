import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import images from '@/assets'
import {motion} from "framer-motion";
import Image from "next/image";
import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";
import {BiCollapseAlt} from "react-icons/bi";
import {IoShareSocialSharp} from "react-icons/io5";
import {Bounce} from "@/motion";

interface NavbarProps {
    navItems?: string[]
}
interface navMotionProps {
    children: React.ReactNode
}

const Navbar: React.FC<NavbarProps> = ({navItems}) => {
    const spanClassName = 'w-14 h-14  text-xl rounded-full inline-flex  items-center justify-center transition duration-250 ease-in'
    const [isExpanded, setIsExpanded] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const handleThemeSwitch = (e: any) => {
        e.stopPropagation();
        e.preventDefault();
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const handleImageHover = (e: any) => {
        e.stopPropagation();
        e.preventDefault();
    }

    const router = useRouter()

    const containerVariants = {
        expanded: {
            width: '75%',
            transition: {
                type: 'spring',
                stiffness: 500,
                damping: 15,
            },
        },
        collapsed: {
            width: '45%',
            transition: {
                type: 'spring',
                stiffness: 500,
                damping: 15,
            },
        },
    };

    const socialMediaLinks = [
        {
            icon: <BsLinkedin size={30}/>,
            link: 'https://www.linkedin.com/in/sankarshan-desai-94a026268/',
            className: 'hover:text-[#0077b5] text-purple-500 dark:text-black'
        },
        {
            icon: <BsInstagram size={30}/>,
            link: 'https://www.instagram.com/sankarshan_desai/?igsh=Z2hiOXdqcmQwZ2F2',
            className: 'dark:text-black text-yellow-500 hover:text-red-500'
        },
        {
            icon: <BsGithub size={30}/>,
            link: 'https://github.com/sankarshan07',
            className: 'dark:text-black text-green-500 hover:text-red-500'
        }
    ];

    return (
        <motion.div className={'overflow-visible select-none  sticky top-0 z-50 transition-100 ease-in'}
            initial={{scale: 0}}
            animate={{scale: .9}}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            whileHover={{scale: 1}}
            style={{
                borderRadius: 30,
                cursor: "grab",
            }}
            whileTap={{
                scale: 1.2,
                borderRadius: "100%",
                cursor: "grabbing"
            }}
            drag
            dragConstraints={{top: 0, right: 0, bottom: 0, left: 0}}
            dragTransition={{bounceStiffness: 600, bounceDamping: 20}}
            dragElastic={0.7}>
            <motion.div className={`flex justify-center items-center`}>
                <motion.nav
                    variants={containerVariants}
                    animate={isExpanded ? 'expanded' : 'collapsed'}
                    whileHover={
                    isExpanded ? {width: '70%',} : {width: '50%'}}
                    className={`select-none z-99999999 flex items-center  text-white  backdrop-blur bg-white/10 dark:bg-neutral-950/10 h-[60px] mt-4 rounded-full border-none transition duration-200 ease-in justify-between`}>

                    <Bounce whileHoverCustom={1.9} whileTapCustom={1.2}>
                        <motion.div
                            onClick={handleThemeSwitch}
                            whileHover={{ rotate: 360 }}
                            whileTap={{
                                rotate: 180,
                                borderRadius: "100%"
                            }}>
                            <Image  src={images.sanky} alt={''} className={`${isExpanded ? 'hidden' : ''} no-drag w-[50px] ml-2 h-[50px] bg-white select-none md:hover:invert md:hover:grayscale dark:invert md:dark:hover:invert-0 md:dark:hover:grayscale-0 transition duration-300 dark:grayscale rounded-full`}/>
                        </motion.div>
                    </Bounce>
                    <div className={`select-none font-black font-BebasNeue italic flex text-3xl  rounded-full transition duration-300 ease-in ${isExpanded ? '' : 'hidden'}`}>
                        <div className={' ml-2 flex '}>
                            {socialMediaLinks.map((link, index) => (
                                <Bounce key={index}>
                                    <a className={'inline-flex'} href={link.link} target="_blank">
                                        <span className={spanClassName + ' ' + link.className}>{link.icon}</span>
                                    </a>
                                </Bounce>
                            ))}
                        </div>
                    </div>
                    <div onClick={(e) => {setIsExpanded(!isExpanded)}}
                        className={' mr-1 dark:text-white   rounded-full'}>
                        <span className={spanClassName + " hover:scale-125 transition duration-200"}>
                            {isExpanded ? <BiCollapseAlt size={35}/> : <IoShareSocialSharp size={35}/>}</span>
                    </div>
                </motion.nav>
            </motion.div>
        </motion.div>
    );
};

export default Navbar;
