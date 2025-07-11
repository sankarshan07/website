// import * as React from "react";
// import {useState} from "react";
// import {motion, MotionValue, useMotionValue, useSpring} from "framer-motion";
// import {distance} from "@popmotion/popcorn";
// import {Icon, Title} from "@/components";

// const gridWeb: string[][] = [
//     [],
//     [ 'web3' ,'framermotion','react'],
//     ['express', 'mongoose','ejs'],
//     ['tailwind','sass','vercel'],
//     ['nodejs', 'nextjs2',  'mongodb'],
//     ['netlify', 'nestjs', 'sql'],
   
//     []
// ];
// const gridSystem: string[][] = [
//     [],
//     ['ec2', 'rust', 'c', 'gitlab'],
//     ['ansible', 'aws', 'kubernetes', 'python'],
//     ['ubuntu', 'bash', 'cpp', 'typescript'],
//     ['terraform', 'jenkins', 'github', 'docker'],
//     ['nginx', 'graphql', 'java', 'gcp'],
//     ['maven', 'solidity', 'vagrant', 'computeengine'],
//     []
// ];
// const size = 60;
// const gap = 10;
// const hexWidth = (size * 3) / 2 + gap;
// const hexHeight = Math.sqrt(3) * size + gap;

// interface SquareProps {
//     active: { row: number; col: number };
//     setActive: React.Dispatch<React.SetStateAction<{ row: number; col: number }>>;
//     colIndex: number;
//     rowIndex: number;
//     skillIcon: string;
//     x: MotionValue<number>;
//     y: MotionValue<number>;
// }

// const Square: React.FC<SquareProps> = ({
//                                            skillIcon,
//                                            active,
//                                            setActive,
//                                            colIndex,
//                                            rowIndex,
//                                            x,
//                                            y
//                                        }) => {
//     const isDragging = colIndex === active.col && rowIndex === active.row;
//     const diagonalIndex = (360 / 6) * (colIndex + rowIndex);
//     const d = distance(
//         {x: active.col, y: active.row},
//         {x: colIndex, y: rowIndex}
//     );
//     const springConfig = {
//         stiffness: Math.max(700 - d * 120, 0),
//         damping: 20 + d * 5
//     };
//     const dx = useSpring(x, springConfig);
//     const dy = useSpring(y, springConfig);

//     return (
//         <motion.div
//             drag
//             dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
//             dragTransition={{bounceStiffness: 500, bounceDamping: 20}}
//             dragElastic={1}
//             onDragStart={() => setActive({row: rowIndex, col: colIndex})}
//             style={{
//                 // background: `hsla(calc(var(--base-hue) + ${diagonalIndex}), 80%, 60%, 1)`,
//                 width: size,
//                 height: size,
//                 top: rowIndex * (hexHeight - gap),
//                 left:
//                     rowIndex % 2 === 0
//                         ? colIndex * (hexWidth - gap)
//                         : colIndex * (hexWidth - gap) + hexWidth / 2,
//                 position: "absolute",
//                 borderRadius: "50%",
//                 x: isDragging ? x : dx,
//                 y: isDragging ? y : dy,
//                 zIndex: isDragging ? 1 : 0
//             }}
//         >
//             <Icon item={skillIcon}/>
//         </motion.div>
//     );
// };

// const Skills: React.FC = () => {
//     const [isChecked, setIsChecked] = useState(false)
//     const [skills, setSkills] = useState()

//     const handleCheckboxChange = () => {
//         setIsChecked(!isChecked)
//     }
//     const [active, setActive] = useState<{ row: number; col: number }>({
//         row: 0,
//         col: 0
//     });
//     const x = useMotionValue<number>(0);
//     const y = useMotionValue<number>(0);

//     return (
//         <div
//             className="select-none transition duration-300 max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
//             <Title title={`Skills`} number={`02.`} line/>
//             <div className={`select-none mt-12 flex items-center gap-10 justify-center `}>
//                 <span className={' -mt-10 mb-10  text-white dark:text-black font-inter'}>Development</span>
//                 <label className='flex -mt-10 mb-10 cursor-pointer select-none items-center'>
//                     <div className='relative'>
//                         <input
//                             type='checkbox'
//                             checked={isChecked}
//                             onChange={handleCheckboxChange}
//                             className='sr-only'
//                         />
//                         {/* <div
//                             className={`box block h-8 w-14 rounded-full ${
//                                 isChecked ? 'bg-red-500' : 'bg-yellow-500'}`}
//                         ></div> */}
//                         {/* <div
//                             className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
//                                 isChecked ? 'translate-x-full' : ''}`}
//                         ></div> */}
//                     </div>
//                 </label>
//                 {/* <span className={'-mt-10 mb-10  text-white dark:text-black font-inter'}>System</span> */}
//             </div>
//             <motion.div
//                 className={'mt-40'}
//                 animate={{"--base-hue": 360} as any}
//                 initial={{"--base-hue": 0} as any}
//                 transition={{duration: 10, loop: Infinity, ease: "linear"}}
//                 style={{width: "100%", height: "100%"}}
//             >
//                 <motion.div
//                     style={{
//                         display: "flex",
//                         width: (hexWidth - gap) * 4 + gap,
//                         height: (hexHeight - gap) * 4 + gap,
//                         top: "50%",
//                         left: "50%",
//                         transform: "translate(-50%, -50%)",
//                         position: "relative",
//                         perspective: 500
//                     }}
//                 >
//                     {(isChecked ? gridSystem : gridWeb).map((row, rowIndex) =>
//                         row.map((_item, colIndex) => (
//                             <Square
//                                 skillIcon={_item || "react"}
//                                 x={x}
//                                 y={y}
//                                 active={active}
//                                 setActive={setActive}
//                                 rowIndex={rowIndex}
//                                 colIndex={colIndex}
//                                 key={rowIndex + colIndex}
//                             />
//                         ))
//                     )}
//                 </motion.div>
//             </motion.div>
//         </div>
//     );
// }

// export default Skills;
// SKills icons  not moving 
import * as React from "react";
import {useState} from "react";
import {motion, MotionValue, useMotionValue, useSpring} from "framer-motion";
import {distance} from "@popmotion/popcorn";
import {Icon, Title} from "@/components";

const gridWeb: string[][] = [
    [],
    [ 'web3' ,'framermotion','react'],
    ['express', 'mongoose','ejs'],
    ['tailwind','sass','vercel'],
    ['nodejs', 'nextjs2',  'mongodb'],
    ['netlify', 'git', 'sql'],
    ['typescript', 'java', 'python'],
   
    []
];
const gridSystem: string[][] = [
    [],
    ['ec2', 'rust', 'c', 'gitlab'],
    ['ansible', 'aws', 'kubernetes', 'python'],
    ['ubuntu', 'bash', 'cpp', 'typescript'],
    ['terraform', 'jenkins', 'github', 'docker'],
    ['nginx', 'graphql', 'java', 'gcp'],
    ['maven', 'solidity', 'vagrant', 'computeengine'],
    []
];
const size = 60;
const gap = 10;
const hexWidth = (size * 3) / 2 + gap;
const hexHeight = Math.sqrt(3) * size + gap;

interface SquareProps {
    active: { row: number; col: number };
    setActive: React.Dispatch<React.SetStateAction<{ row: number; col: number }>>;
    colIndex: number;
    rowIndex: number;
    skillIcon: string;
    x: MotionValue<number>;
    y: MotionValue<number>;
}

const Square: React.FC<SquareProps> = ({
                                           skillIcon,
                                           active,
                                           setActive,
                                           colIndex,
                                           rowIndex,
                                           x,
                                           y
                                       }) => {
    const isDragging = colIndex === active.col && rowIndex === active.row;
    const diagonalIndex = (360 / 6) * (colIndex + rowIndex);
    const d = distance(
        {x: active.col, y: active.row},
        {x: colIndex, y: rowIndex}
    );
    const springConfig = {
        stiffness: Math.max(700 - d * 120, 0),
        damping: 20 + d * 5
    };
    const dx = useSpring(x, springConfig);
    const dy = useSpring(y, springConfig);

    return (
        <motion.div
            drag
            dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
            dragTransition={{bounceStiffness: 500, bounceDamping: 20}}
            dragElastic={1}
            onDragStart={() => setActive({row: rowIndex, col: colIndex})}
            style={{
                // background: `hsla(calc(var(--base-hue) + ${diagonalIndex}), 80%, 60%, 1)`,
                width: size,
                height: size,
                top: rowIndex * (hexHeight - gap),
                left:
                    rowIndex % 2 === 0
                        ? colIndex * (hexWidth - gap)
                        : colIndex * (hexWidth - gap) + hexWidth / 2,
                position: "absolute",
                borderRadius: "50%",
                x: isDragging ? x : dx,
                y: isDragging ? y : dy,
                zIndex: isDragging ? 1 : 0
            }}
        >
            <Icon item={skillIcon}/>
        </motion.div>
    );
};

const Skills: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false)
    const [skills, setSkills] = useState()

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }
    const [active, setActive] = useState<{ row: number; col: number }>({
        row: 0,
        col: 0
    });
    const x = useMotionValue<number>(0);
    const y = useMotionValue<number>(0);

    return (
        <div
            className="select-none transition duration-300 max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
            <Title title={`Frameworks, Libraries & Platforms`} number={`02.`} line/>
            <div className={`select-none mt-12 flex items-center gap-10 justify-center `}>
                {/* <span className={' -mt-10 mb-10  text-white dark:text-black font-inter'}>Development</span> */}
                <label className='flex -mt-10 mb-10 cursor-pointer select-none items-center'>
                    <div className='relative'>
                        <input
                            type='checkbox'
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className='sr-only'
                        />
                        {/* <div
                            className={`box block h-8 w-14 rounded-full ${
                                isChecked ? 'bg-red-500' : 'bg-yellow-500'}`}
                        ></div> */}
                        {/* <div
                            className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                                isChecked ? 'translate-x-full' : ''}`}
                        ></div> */}
                    </div>
                </label>
                {/* <span className={'-mt-10 mb-10  text-white dark:text-black font-inter'}>System</span> */}
            </div>
            <motion.div
                className={'mt-40'}
                animate={{"--base-hue": 360} as any}
                initial={{"--base-hue": 0} as any}
                transition={{duration: 10, loop: Infinity, ease: "linear"}}
                style={{width: "100%", height: "100%"}}
            >
                <motion.div
                    style={{
                        display: "flex",
                        width: (hexWidth - gap) * 4 + gap,
                        height: (hexHeight - gap) * 4 + gap,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        position: "relative",
                        perspective: 500
                    }}
                >
                    {(isChecked ? gridSystem : gridWeb).map((row, rowIndex) =>
                        row.map((_item, colIndex) => (
                            <Square
                                skillIcon={_item || "react"}
                                x={x}
                                y={y}
                                active={active}
                                setActive={setActive}
                                rowIndex={rowIndex}
                                colIndex={colIndex}
                                key={rowIndex + colIndex}
                            />
                        ))
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Skills;
