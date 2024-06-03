import { motion, Variants, MotionProps } from "framer-motion"

export type TextProps = Partial<{
    className: string;
    as: any;
}> & MotionProps &
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;



const TextVariants: Variants = {
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

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
    children,
    className = "",
    as,
    ...restProps
}) => {

    const Component = as || "p";

    return (

        <motion.div initial="offscreen"
            whileInView="onscreen"
            variants={TextVariants}>
            <Component className={` ${className} font-ClashDisplayLight text-paraColor tracking-[2px]`} {...restProps}
            >
                {children}
            </Component>
        </motion.div>
    )
}

export default Text