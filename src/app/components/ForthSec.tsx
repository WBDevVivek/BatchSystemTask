"use client"

import React from 'react'
import ImgComp from './smallcomp/ImgComp'
import Heading from './smallcomp/Heading'
import Text from './smallcomp/Text'
import {  forthSecFullImgWithRing, fourStarIcon,  thirdSectionData } from '../data'
import IconComp from './smallcomp/IconComp'
import GradBackRedYellow from './GradBackRedYellow'
import StarImgComp from './smallcomp/StarImgComp'

const ForthSec = () => {
  return (
    <section id="#aboutus" className={`pinkBorderClass borderClass relative w-full h-auto lg:h-lvh lg:max-h-[600px] flex flex-col lg:flex-row items-center justify-betweem mt-20 overflow-hidden
      gap-4 lg:gap-0 pl-4`} >

      <StarImgComp className={`w-[50px] h-[50px] top-[-5%]  lg:top-[5%] right-[35%] lg:left-[50%] `} />

      <div className={`greenBorderClass relative h-full flex justify-center lg:justify-end items-center left-[0%]
        origin-left lg:origin-center
        order-2 lg:order-1
     
        w-full sm:w-[60%] lg:w-[50%] 

        scale-x-[1] scale-y-[1] 
        lg:scale-x-[1.2] lg:scale-y-[1.2]  `} >

        <ImgComp src={forthSecFullImgWithRing} className={`greenBorderClass  z-50  w-[100%] h-[100%] scale-[1]  origin-left`} ></ImgComp>

        <GradBackRedYellow className={`z-0 absolute  w-[250px] h-[150px] top-[35%] left-[20%] rotate-[0deg] `} />

      </div>

      <div className={`w-full lg:w-[50%] h-full flex flex-col justify-center items-center gap-5 order-1`} >

        <div className={`w-full  flex flex-col justify-center items-start gap-4 `} >

          <div className={`flex sm:w-[400px] h-[50px] gap-3 items-center`} >

            <IconComp className={`w-[40px] sm:w-[50px]  h-[40px] sm:h-[50px] bg-iconColor p-1 sm:p-3 rounded-full stroke-background fill-background`} >{fourStarIcon}</IconComp>
            <Heading as="h1" className={`text-base sm:text-2xl sm:tracking-[2px]`} >{`fully customizable`}</Heading>

          </div>

          <Text className={`w-full sm:w-[85%] py-4 text-xs sm:text-sm  font-ClashDisplayMedium`} >{thirdSectionData.para1}</Text>

        </div>

      </div>
    </section>
  )
}

export default ForthSec





