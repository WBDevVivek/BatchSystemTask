import React from 'react'
import LinkComp from './LinkComp';
import { linksArrayType } from '../Footer';
import Text from './Text';
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



export type ListCompType = {
    listItem: linksArrayType[];
}

const ListComp = ({ listItem }: ListCompType) => {
    return (
        <motion.ul className={``}
            initial="offscreen"
            whileInView="onscreen"
            variants={LinkCompVariants}
        >
            {
                listItem.map((val) => {
                    return <li key={val && val.id} className={`mb-4 `} >
                        {/* <LinkComp href="#">{val}</LinkComp> */}

                        <LinkComp href={"#"}
                            className={` dark:hover:text-iconColor hover:font-bold w-auto lg:w-[100px] 
                        `}
                        >
                            <Text className={`text-lg xl:text-xl font-ClashDisplayMedium !text-btnColor`} >{val && val.linkName}</Text>

                        </LinkComp>

                    </li>
                })
            }
        </motion.ul>
    )
}

export default ListComp