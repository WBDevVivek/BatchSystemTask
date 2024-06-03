import React from 'react'
import { motion, Variants } from "framer-motion"

export type IconCompProps = Partial<{
    className?: string;
    onClick?: () => void
}>



const IconCompVariants: Variants = {
    offscreen: {
        opacity: 0,
        scale: 0.5,
    },
    hover:{
        scale: 1.2,
        rotate: 360,
        transition: {
            duration: 0
        }
      },
    onscreen: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8
        }
    }
};

const IconComp: React.FC<React.PropsWithChildren<IconCompProps>> = ({ children, className = "",
    ...restProps }) => {
    return (
        <motion.span className={`${className}`}  {...restProps}
            initial="offscreen"
            whileInView="onscreen"
            whileHover="hover"
            variants={IconCompVariants}
        >{children}</motion.span>
    )
}

export default IconComp