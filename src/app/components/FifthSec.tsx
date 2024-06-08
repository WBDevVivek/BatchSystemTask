"use client"

import React from 'react'
import Heading from './smallcomp/Heading'
import { fifthSecFullImgWithRing, fifthSecUserImg, fourthSectionData } from '../data'
import ImgComp from './smallcomp/ImgComp'
import Text from './smallcomp/Text'
import GradBackRedYellow from './GradBackRedYellow'
import StarImgComp from './smallcomp/StarImgComp'

const FifthSec = () => {
  return (
    <section className={` pinkBorderClass borderClass relative w-full lg:h-[800px] flex flex-col items-center justify-between gap-10 lg:gap-4 my-20 pl-4`} >

      <div className={`w-full sm:w-[80%] lg:w-[50%] xl:w-[40%] h-[20%] flex flex-col justify-center items-center gap-0 `} >

        <Heading as="h6" className={`w-full py-4 text-base sm:text-lg tracking-[8px]  text-center`} >{`testimonial`}</Heading>

        <Heading as="h1" className={`text-3xl sm:text-5xl tracking-[1px] !w-full text-center`} >{fourthSectionData.heading}</Heading>

      </div>

      <div className={`w-full h-full flex flex-col lg:flex-row justify-center items-center gap-0 `} >

{/* --------------------------------------------------------------- */}

        <div className={`greenBorderClass relative h-full flex justify-center lg:justify-end items-center left-[0%]
        origin-left lg:origin-center

        order-2 lg:order-1 

          w-full sm:w-[60%] lg:w-[50%] 

        scale-x-[1] scale-y-[1] 
        lg:scale-x-[1.2] lg:scale-y-[1.2]  `} >

          <ImgComp src={fifthSecFullImgWithRing} className={`greenBorderClass  z-50  w-[100%] h-[100%] scale-[1]  origin-left`} ></ImgComp>

          <GradBackRedYellow className={`z-0 absolute  w-[250px] h-[150px] top-[35%] sm:left-[20%] rotate-[10deg] `} />

        </div>

{/* --------------------------------------------------------------- */}

        <div className={` w-full sm:w-[80%] lg:w-[50%]  flex flex-col justify-center items-start gap-2 scale-x-[1] scale-y-[1] order-1 `} >

          <Heading as="h6" className={`text-base sm:text-2xl sm:tracking-[2px] w-[80%]`} >{fourthSectionData.heading2}</Heading>

          <Text className={`pt-4 w-full sm:w-[85%] text-xs sm:text-sm font-ClashDisplayMedium `} >{fourthSectionData.para}</Text>

          <ImgComp src={fifthSecUserImg} className={`!w-[200px]  py-4 object-contain z-50 rotate-[0deg] origin-left scale-x-[1] scale-y-[1] `} ></ImgComp>

          <Text className={` text-xl !font-ClashDisplayBold !text-btnColor`} >{fourthSectionData.para2}</Text>

        </div>

{/* --------------------------------------------------------------- */}

      </div>

      <StarImgComp className={`w-[60px] h-[60px] top-[-5%]  lg:bottom-[5%] right-[35%] lg:right-[5%] `} />

    </section>
  )
}

export default FifthSec


