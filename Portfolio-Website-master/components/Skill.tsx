import React from 'react';
import {Bounce, SpringText} from '@/motion';
import {Icon }from "@/components";

interface mapProps {
    skillList: readonly string[];
    text: string;
    text2?: string;
}

const Skill: React.FC<mapProps> = ({skillList, text, text2}) => {
    return (
        <div className={'mb-4'}>
            <span className={`text-2xl font-black text-white p-2 mb-2 italic dark:text-black font-SourceSansPro `}>
                {text}</span>
            <div className={`grid grid-cols-4 mt-4 gap-5`}>
                {skillList.map((item) => (
                    <Bounce key={item}>
                        <SpringText key={item}>
                            <div>
                                <Icon item={item}/>
                            </div>
                        </SpringText>
                    </Bounce>
                ))}
            </div>
        </div>
    );
};

export default Skill;
