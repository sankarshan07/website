import React from 'react';
import Skill from "@/components/Skill";

const Web3: React.FC = () => {
    const Languages = [
        'metamask',
        'solidity',
        'truffle',
        'web3',
    ] as const;

    return (
        <div className={`select-none p-4 flex flex-col gap-3`}>
            <Skill skillList={Languages} text={"Stack"}/>
        </div>
    );
};
export default Web3;
