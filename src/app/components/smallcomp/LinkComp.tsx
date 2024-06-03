import Link from 'next/link'
import { motion, Variants } from "framer-motion"



const LinkCompVariants: Variants = {
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


export type LinkCompProps = {
    children: React.ReactNode;
    href: string;
    target?: string;
    className?: string;
    onClick?: () => void;
}

export const LinkComp: React.FC<React.PropsWithChildren<LinkCompProps>> = ({ children, href, className, ...restProps }) => {
    return (

        <motion.div initial="offscreen"
            whileInView="onscreen"
            variants={LinkCompVariants}>
            <Link
                href={href} className={` ${className} font-ClashDisplayMedium tracking-[2px] text-btnColor`} {...restProps} 
            >
                {children}
            </Link>
        </motion.div>
    )
}

export default LinkComp;