import React from 'react';
import Skill from "@/components/Skill";

const Programming: React.FC = () => {
    const Languages = [
        'typescript',
        'cpp',
        'c',
        'java',
        'python',
        'rust',
        'graphql',
        'solidity',
    ] as const;
    const Tools = [
        'cpp',
        'docker',
        'kubernetes',
        'aws',
        'nginx',
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
            <Skill skillList={Languages} text={"Languages"}/>
        </div>
    );
};
export default Programming;
