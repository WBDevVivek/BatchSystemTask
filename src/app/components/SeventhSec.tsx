"use client"

import React from 'react'
import Heading from './smallcomp/Heading'
import Text from './smallcomp/Text'
import { appleIcon, seventhSecUserImg, seventhSectionData, starImg } from '../data'
import ImgComp from './smallcomp/ImgComp'
import ButtonComp from './smallcomp/ButtonComp'
import IconComp from './smallcomp/IconComp'
import GradBackRedYellow from './GradBackRedYellow'

const SeventhSec = () => {
    return (

        <section className={` pinkBorderClass borderClass relative w-full h-[700px] flex justify-center items-center py-12`} >


            <ImgComp src={starImg} className={` object-cover w-[50px] h-[50px] absolute top-[5%] left-[50%] z-50`} ></ImgComp>

            <ImgComp src={starImg} className={` object-cover w-[60px] h-[60px] absolute top-[1%] right-[3%] z-50`} ></ImgComp>


            <div className={`absolute top-[50%] left-[50%] z-50 translate-x-[-70%]  translate-y-[-50%] text-white`} >

                <Heading as="h6" className={`text-2xl tracking-[6px] w-[80%]`} >{seventhSectionData.heading}</Heading>

                <Text className={`w-[80%] py-4 text-lg font-ClashDisplayMedium  `} >{seventhSectionData.para}</Text>


                <ButtonComp className={`btnClass w-[150px] bg-background text-btnColor`}>
                    <div className={`flex justify-between items-center gap-2`} >
                        <span className={`text-center align-middle `} >download</span>
                        <IconComp className={`fill-btnColor flex mb-[3px] w-[20px]`} >{appleIcon}</IconComp>

                    </div>
                </ButtonComp>

            </div>

            <GradBackRedYellow className={`z-0  absolute w-[350px] h-[300px] rounded-full top-[10%] -left-[3%] rotate-[0deg] `} />


            <div className={`w-[80%] h-[80%]`} >

                <ImgComp src={seventhSecUserImg} className={` object-contain w-[100%] h-[100%] z-50 scale-[1] origin-left`} ></ImgComp>

            </div>

        </section>

    )
}

export default SeventhSec