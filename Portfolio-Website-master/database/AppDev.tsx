import React from 'react';
import Skill from "@/components/Skill";

const AppDev: React.FC = () => {
    const frameworks = [
        'flutter',
        'dart',
        'firebase',
    ] as const
    return (
        <div className={`select-none p-4 flex flex-col gap-3`}>
            <Skill skillList={frameworks} text={'Frameworks'} text2={'New'}/>
        </div>
    );
};

export default AppDev;
