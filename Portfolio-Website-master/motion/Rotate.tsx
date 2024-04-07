import {motion} from "framer-motion";
import React from "react";

interface EmojiProps {
    text?: string
    height?: number
    size?: number
    width?: number
    className?: string
    initial?: number
    mid?: number
    max?: number
    children?: React.ReactNode
}

const Rotate: React.FC<EmojiProps> = ({text, initial, mid, max, children, className, width, height, size}) => {
    return (
        <motion.div
            className={`rounded-full text-${size ? size : 3}xl `}
            initial={{scale: initial}}
            animate={{rotate: 720, scale: initial}}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            whileHover={{scale: initial, rotate: 90}}
            whileTap={{scale: max, rotate: -90, borderRadius: "50%"}}
        >
            {children ? (
                React.cloneElement(children as React.ReactElement, {text})
            ) : (
                <span>{text}</span>
            )}
        </motion.div>
    );
}
export default Rotate;
