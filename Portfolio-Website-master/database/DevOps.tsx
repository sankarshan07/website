import React from 'react';
import Skill from "@/components/Skill";

const DevOps: React.FC = () => {
    const Tools = [
        'kubernetes',
        'docker',
        'aws',
        'nginx',
        'bash',
        'jenkins',
        'github',
        'terraform',
        'ansible',
        'maven',
        'vagrant',
        'ubuntu'
    ] as const;

    return (
        <div className={`select-none p-4 flex flex-col gap-3`}>
            <Skill skillList={Tools} text={'Tools'}/>
        </div>
    );
};

export default DevOps;
