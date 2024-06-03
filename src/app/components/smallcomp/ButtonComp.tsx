
import { motion, MotionProps, Variants  } from "framer-motion"

const ButtonCompVariants: Variants = {
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



type ButtonProps = MotionProps & Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    onClick: () => void;
  }>;

const ButtonComp: React.FC<React.PropsWithChildren<ButtonProps>> = ({
    children,
    className = "",
    ...restProps
  }) => {
  return (
    <motion.button
    className={`${className}  font-ClashDisplayMedium`}
    {...restProps}
    initial="offscreen"
    whileInView="onscreen"
    variants={ButtonCompVariants}
  >
    {children}
  </motion.button>
  )
}

export default ButtonComp