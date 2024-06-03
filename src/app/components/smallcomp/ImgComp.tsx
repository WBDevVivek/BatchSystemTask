import { motion, Variants, MotionProps  } from "framer-motion"

type ImgProps =  React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & MotionProps &
  Partial<{
    className: string;
    src: string;
    alt: string;
  }> ;


  const ImgCompVariants: Variants = {
    offscreen: {
      opacity: 0,
      // scale: 0.5,
    },
    onscreen: {
      opacity: 1,
      // scale: 1,
      transition: {
        duration: 0.8
      }
    }
  };

const ImgComp: React.FC<React.PropsWithChildren<ImgProps>> = ({
    className,
    src = "",
    alt = "testImg",
    ...restProps
  }) => {
  return (
    <motion.img className={className} src={src} alt={alt} {...restProps} loading={"lazy"} 
    
    initial="offscreen"
    whileInView="onscreen"
    variants={ImgCompVariants}
    />
  )
}

export default ImgComp