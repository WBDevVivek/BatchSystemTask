"use client"

import React from 'react'
import ImgComp from './smallcomp/ImgComp'
import Heading from './smallcomp/Heading'
import {  notificationIcon,  thirdSecFullImgWithRing, thirdSecPrice, thirdSectionData } from '../data'
import Text from './smallcomp/Text'
import IconComp from './smallcomp/IconComp'
import GradBackRedYellow from './GradBackRedYellow'
import StarImgComp from './smallcomp/StarImgComp'

const ThirdSec = () => {
  return (
    <section id="#aboutus" className={`  pinkBorderClass borderClass relative w-full h-auto lg:h-lvh lg:max-h-[600px] flex flex-col lg:flex-row items-center justify-betweem mt-20 overflow-hidden
      gap-4 lg:gap-0 pl-4`} >

      <StarImgComp className={`w-[60px] h-[60px] top-[-5%]  lg:top-[1%] right-[35%] lg:right-[3%] `} />

      <div className={`w-full lg:w-[50%] h-full flex flex-col justify-center items-center gap-5`} >

        <div className={`w-full flex flex-col justify-center items-start gap-2 sm:gap-0 `} >

          <Heading as="h6" className={`text-base sm:text-lg tracking-[8px] text-iconColor`} >{`advantages`}</Heading>
          <Heading as="h1" className={`text-4xl sm:text-5xl tracking-[1px]  `} >{thirdSectionData.heading}</Heading>

        </div>

        <div className={`w-full  flex flex-col justify-center items-start gap-4 `} >

          <div className={`flex sm:w-[400px] h-[50px] gap-3 items-center`} >

            <IconComp className={`w-[40px] sm:w-[50px]  h-[40px] sm:h-[50px] bg-iconColor p-1 sm:p-3 rounded-full stroke-background fill-background`} >{notificationIcon}</IconComp>

            <Heading as="h1" className={`text-base sm:text-2xl sm:tracking-[2px]  `} >{`cleaver notification`}</Heading>

          </div>

          <Text className={`w-full sm:w-[85%] py-4 text-xs sm:text-sm  font-ClashDisplayMedium`} >{thirdSectionData.para1}</Text>

        </div>

      </div>

{/* ------------------------------------------ */}


      <div className={`greenBorderClass relative h-full flex justify-center lg:justify-end items-center left-[0%]
        origin-center xl:origin-right

        order-2 lg:order-1
        
          w-full sm:w-[60%] lg:w-[50%] 

        scale-x-[1] scale-y-[1] 
        lg:scale-x-[1.2] lg:scale-y-[1.2]  `} >

        <ImgComp src={thirdSecFullImgWithRing} className={`greenBorderClass  z-50  w-[100%] h-[100%] scale-[1] `} ></ImgComp>

        <ImgComp src={thirdSecPrice} className={` object-contain w-[250px] h-auto z-50  scale-x-[0.4] scale-y-[0.5] origin-right absolute top-[0%] lg:top-[2%] right-[18%] `} ></ImgComp> 

        <GradBackRedYellow className={`z-0 absolute  w-[250px] h-[150px] top-[40%] right-[28%] rotate-[150deg] `} />

      </div>

    </section>
  )
}

export default ThirdSec





