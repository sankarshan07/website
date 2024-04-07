import {motion, useMotionValue, useTransform} from "framer-motion";
import React from "react";

// const items = [0, 1, 2, 3, 4];
// const items=[' Gamer ',' Web Developer ', ' Software Engineer ',' DevOps Engineer ',' Tech Enthusiast']
const height = 70;
const padding = 10;
const size = 150;

interface ScrollRefreshProps {
    items: string[],
    outerClassName?: string,
    innerClassName?: string,
    boxClassName?: string
}

const ScrollRefresh: React.FC<ScrollRefreshProps> = ({items, outerClassName, innerClassName, boxClassName}) => {
    const scrollY = useMotionValue(0);
    const scale = useTransform(scrollY, [0, 100], [0, 1]);
    const opacity = useTransform(scrollY, [0, 100], [0, 1]);
    return (
        <>
            <motion.div
                className={`flex justify-center  items-center`}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    scale: scale,
                    opacity: opacity
                }}
            />
            <motion.div
                className={`flex justify-center bg-blue-400 items-center ` + outerClassName}
                style={{
                    borderRadius: 10,
                    overflow: "hidden",
                    position: "relative",
                    transform: "translateZ(0)",
                    cursor: "grab"
                }}
                whileTap={{cursor: "grabbing"}}
            >
                <motion.div
                    className={innerClassName}
                    style={{
                        y: scrollY
                    }}
                    drag="y"
                    dragConstraints={{
                        top: 0,
                        bottom: 0
                    }}
                >
                    {items.map((item, index) => {
                        return (
                            <motion.div
                                className={'flex justify-center items-center ' + boxClassName}
                                style={{
                                    borderRadius: 20,
                                    marginBottom:
                                        index !== items.length - 1 ? 10 : 0
                                }}
                                key={index}
                            >
                                <span>{item}</span>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </>
    );
}

function getHeight(items: string | any[]) {
    const totalHeight = items.length * height;
    const totalPadding = (items.length - 1) * padding;
    const totalScroll = totalHeight + totalPadding;
    return totalScroll;
}

export default ScrollRefresh
