import React from "react";
import {motion, useMotionValue, useSpring} from "framer-motion";

interface RotateAndSpringGrabProps {
    text?: string;
    height?: number;
    size?: number;
    width?: number;
    className?: string;
    initial?: number;
    mid?: number;
    max?: number;
    children?: React.ReactNode;
}

const RotateAndSpringGrab: React.FC<RotateAndSpringGrabProps> = ({
                                                                     text,
                                                                     initial,
                                                                     mid,
                                                                     max,
                                                                     children,
                                                                     className,
                                                                     width,
                                                                     height,
                                                                     size,
                                                                 }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(0, {stiffness: 200, damping: 15});
    const rotateY = useSpring(0, {stiffness: 200, damping: 15});

    function handleDrag(event: any, info: { offset: { y: number; x: number } }) {
        rotateX.set(info.offset.y * 0.1);
        rotateY.set(info.offset.x * -0.1);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            className={className}
            drag
            dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
            style={{
                width: size || 50,
                height: size || 50,
                // backgroundColor: "red",
                borderRadius: "50%",
                rotateX: rotateX,
                rotateY: rotateY,
                perspective: 400,
                cursor: "grab",
            }}
            onDrag={handleDrag}
            onDragEnd={() => {
                rotateX.set(0);
                rotateY.set(0);
            }}
            dragElastic={0.2}

            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                initial={{scale: initial, borderRadius: "50%"}}
                animate={{rotate: 720, scale: initial}}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                }}
                whileHover={{scale: initial, rotate: 90}}
                whileTap={{scale: max, rotate: -90, borderRadius: "50%"}}
                className="flex items-center justify-center h-2/3 w-2/3 rounded-full"
            >
                {children ? (
                    React.cloneElement(children as React.ReactElement, {text})
                ) : (
                    <span>{text}</span>
                )}
            </motion.div>
        </motion.div>
    );
};

export default RotateAndSpringGrab;
