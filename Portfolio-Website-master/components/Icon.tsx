import React from 'react';
import Image, {StaticImageData} from 'next/image';
import image from '@/assets/index';

interface iconProp {
    item: string;
}

interface ImageCollection {
    [key: string]: StaticImageData;
}

const Icon: React.FC<iconProp> = ({item}) => {
    const imageCollection: ImageCollection = image;
    const invert = new Set(["next", "nextjs2", "express", "solidity", "sql", "ejs", "ansible", "vercel"]);
    return (
        <div>
            <div className={''}>
                <Image
                    className={`${invert.has(item) ? 'bg-white dark:invert p-1 rounded-full' : ' '} transition duration-400 no-drag mt-2 mb-2 `}
                    key={item}
                    height={65}
                    src={imageCollection[item]}
                    alt={item}
                />
            </div>
        </div>
    )
}
export default Icon
