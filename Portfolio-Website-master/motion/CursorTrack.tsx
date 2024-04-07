import {motion, useMotionValue, useTransform} from "framer-motion";
import React from "react";

interface CursorProps {
    text?: string;
    sizeInside?: number;
    height?: number;
    size?: number;
    width?: number;
    className?: string;
    initial?: number;
    mid?: number;
    max?: number;
    children?: React.ReactNode;
}

const CursorTrack: React.FC<CursorProps> = ({
                                                sizeInside,
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
    const x = useMotionValue(200);
    const y = useMotionValue(200);

    const rotateX = useTransform(y, [0, 400], [45, -45]);
    const rotateY = useTransform(x, [0, 400], [-45, 45]);

    function handleMouse(event: {
        currentTarget: { getBoundingClientRect: () => any };
        clientX: number;
        clientY: number;
    }) {
        const rect = event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }

    function handleMouseLeave() {
        x.set(200);
        y.set(200);
    }

    return (
        <div style={{backfaceVisibility: "hidden"}}>
            <motion.div
                className={`w-${size ? size : 50} h-${
                    size ? size : 50
                } flex items-center justify-center rounded-full bg-blue-500`}
                style={{
                    perspective: 9999999,
                }}
                onMouseMove={handleMouse}
                onMouseLeave={handleMouseLeave}
            >
                <motion.div
                    className={`flex items-center justify-center rounded-full bg-red-500`}
                    style={{
                        width: sizeInside || 50,
                        height: sizeInside || 50,
                        borderRadius: 30,
                        rotateX: rotateX,
                        rotateY: rotateY,
                    }}
                >
                    {children ? (
                        React.cloneElement(children as React.ReactElement, {text})
                    ) : (
                        <span>{text}</span>
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default CursorTrack;
