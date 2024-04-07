import React from 'react';
import Skill from "@/components/Skill";

const Backend: React.FC = () => {
    const frameworks = [
        'nodejs',
        'nestjs',
        'express',
        // 'django',
        'trpc',
    ] as const
    const databases = [
        'mongodb',
        'sql',
        'firebase',

    ] as const
    const orm = ['prisma', 'mongoose', 'nextauth', 'ejs'] as const

    return (
        <div className={`select-none p-4 flex flex-col gap-3`}>
            <Skill skillList={frameworks} text={'Frameworks'}/>
            <Skill skillList={databases} text={'Databases'}/>
            <Skill skillList={orm} text={'ORM'}/>
        </div>
    );
};

export default Backend;
