import React from 'react';
import Skill from "@/components/Skill";

const Frontend: React.FC = () => {
    const frameworks = [
        'react',
        'redux',
        'nextjs2',
    ] as const
    const styling = [
        'sass',
        'tailwind',
        'framermotion'
    ] as const
    const deploy = [
        'netlify',
        'vercel',
    ] as const
    // @ts-ignore
    return (
        <div className={`select-none p-4 flex flex-col gap-3`}>
            <Skill skillList={frameworks} text={'Frameworks'}/>
            <Skill skillList={styling} text={'Styling'}/>
            <Skill skillList={deploy} text={'Deployment'}/>
        </div>
    );
};

export default Frontend;
