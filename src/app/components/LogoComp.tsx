import React from 'react'
import ImgComp from './smallcomp/ImgComp'
import Heading from './smallcomp/Heading'
import { logoImg } from '../data'
import LinkComp from './smallcomp/LinkComp'


type LogoCompType = {
    className?: string;
}

const LogoComp = ({ className }: LogoCompType) => {
    return (

        <LinkComp href='/' className={`${className} h-full flex justify-between items-center shrink`}>
            {/* <div className={`${className} h-full flex justify-between items-center`}> */}

                <ImgComp src={logoImg} className=''></ImgComp>
                <Heading
                    after-dynamic-value={`tm`}
                    className={`text-2xl relative after:content-[attr(after-dynamic-value)] after:absolute after:top-[-10px]  -after:mt-0.5 after:text-red-500 after:text-[8px]`} >uifry </Heading>

            {/* </div> */}
        </LinkComp>
    )
}

export default LogoComp