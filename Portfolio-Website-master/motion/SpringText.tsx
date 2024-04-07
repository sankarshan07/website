import {motion} from "framer-motion";
import React from "react";

interface SpringTextProps {
    text?: string
    height?: number
    width?: number
    className?: string
    motionClassName?: string
    textSize?: number
    size?: number
    children?: React.ReactNode
}

const SpringText: React.FC<SpringTextProps> = ({
                                                   size,
                                                   motionClassName,
                                                   text,
                                                   textSize,
                                                   children,
                                                   width,
                                                   className,
                                                   height
                                               }) => {
    return (
        <div>
            <motion.div
                className={className}
                style={{
                    cursor: "grab",
                }}
                drag
                dragConstraints={{top: 0, right: 0, bottom: 0, left: 0}}
                dragTransition={{bounceStiffness: 600, bounceDamping: 20}}
                dragElastic={0.7}
                whileTap={{cursor: "grabbing"}}
            >
                {children ? (
                    React.cloneElement(children as React.ReactElement, {text})
                ) : (
                    <span>{text}</span>
                )}
            </motion.div>
        </div>
    );
}
export default SpringText;
