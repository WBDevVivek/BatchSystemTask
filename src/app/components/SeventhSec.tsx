"use client"

import React from 'react'
import Heading from './smallcomp/Heading'
import Text from './smallcomp/Text'
import { appleIcon, seventhSectionData } from '../data'
import ButtonComp from './smallcomp/ButtonComp'
import IconComp from './smallcomp/IconComp'
import GradBackRedYellow from './GradBackRedYellow'
import StarImgComp from './smallcomp/StarImgComp'

const SeventhSec = () => {
    return (

        <section className={`  pinkBorderClass borderClass 
        
        seventhSecImg
        relative w-full h-[300px] sm:h-[400px]  md:h-[500px] lg:h-[600px] flex justify-start md:justify-center items-center py-12 my-20`} >

            <StarImgComp className={`w-[60px] h-[60px] top-[-15%]  lg:top-[-13%] right-[10%] lg:right-[10%] `} />

            <GradBackRedYellow className={`z-[-1]  absolute sm:w-[350px] h-[300px] rounded-full top-[-10%] left-[-5%] rotate-[0deg] `} />
 
                <div className={` relative top-[0%] left-[0%] z-50  text-white  w-[100%] sm:w-[80%] h-auto scale-[1] sm:scale-[1]`} >

                    <Heading as="h6" className={` text-3xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[1px] w-full sm:w-[80%]`} >{seventhSectionData.heading}</Heading>

                    <Text className={`w-[100%] sm:w-[65%] py-4 text-sm sm:text-sm md:text-lg font-ClashDisplayMedium  `} >{seventhSectionData.para}</Text>

                    <ButtonComp className={`btnClass w-[180px]  sm:w-[200px] h-[60px] bg-background text-btnColor flex justify-center items-center `}>
                        <div className={`flex justify-between items-center gap-2 scale-[0.8] sm:scale-[1]`} >
                            <span className={`text-center align-middle `} >download app</span>
                            <IconComp className={`fill-btnColor flex mb-[3px] w-[20px]`} >{appleIcon}</IconComp>
                        </div>
                    </ButtonComp>

                </div>

        </section>

    )
}

export default SeventhSec