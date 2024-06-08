import React from 'react'
import { motion, Variants } from "framer-motion"



export type HeadingProps = Partial<{
    as: any;
    className?: string;
}>



const headingCompVariants: Variants = {
    offscreen: {
        opacity: 0,
        scale: 0.5,
    },
    onscreen: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8
        }
    }
};


const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({ children, as, className = "",
    ...restProps }) => {


    const Component = as || "h6";

    return (

        <motion.div 
        initial="offscreen"
            whileInView="onscreen"
            variants={headingCompVariants}
            
            
            >
            <Component className={` ${className} font-ClashDisplayBold tracking-[2px]`} {...restProps}
            >
                {children}
            </Component>
        </motion.div>
  
    )
}

export default Heading