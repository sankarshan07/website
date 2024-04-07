import React from 'react';

interface TitleProps {
    title?: string;
    number?: string;
    line?: boolean;
}

const Title: React.FC<TitleProps> = ({title, line, number}) => {
    return (
        <div
            className={'p-2  text-white hover:bg-white hover:text-black transition duration-300 dark:text-black dark:hover:text-white dark:hover:bg-black  font-Inter xs:text-3xl text-4xl  font-black w-auto flex items-center select-none  ease-in'}>
            <span
                className={`text-base rounded-full dark:hover:text-black dark:hover:bg-white transition duration-300  hover:text-white hover:bg-black md:text-lg text-white bg-black p-1 mr-2`}>{number}</span>{" "}
            {title}
            {
                line &&
                <span className={'hidden text-white md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6 '}></span>
            }
        </div>
    );
};
export default Title;
