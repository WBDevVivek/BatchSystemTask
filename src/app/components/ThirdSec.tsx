"use client"

import React from 'react'
import ImgComp from './smallcomp/ImgComp'
import RingComp from './RingComp'
import Heading from './smallcomp/Heading'
import { heroRightImg2, notificationIcon, starImg, thirdSecPrice, thirdSectionData } from '../data'
import Text from './smallcomp/Text'
import IconComp from './smallcomp/IconComp'
import GradBackRedYellow from './GradBackRedYellow'

const ThirdSec = () => {
  return (
    <section id="#aboutus" className={` pinkBorderClass borderClass relative w-full h-lvh max-h-[600px] flex flex-row items-center justify-between `} >



<ImgComp src={starImg} className={` object-cover w-[60px] h-[60px] absolute top-[5%] right-[3%] z-50`} ></ImgComp>


      <div className={`w-[50%] h-full flex flex-col justify-center items-center gap-5`} >

        <div className={`w-full flex flex-col justify-center items-start gap-0 `} >


          <Heading as="h6" className={`text-lg tracking-[8px] text-iconColor`} >{`advantages`}</Heading>
          <Heading as="h1" className={`text-5xl tracking-[1px] `} >{thirdSectionData.heading}</Heading>

        </div>

        <div className={`w-full  flex flex-col justify-center items-start gap-4 `} >

          <div className={`flex w-[400px] h-[50px] gap-3 items-center`} >

            <IconComp className={`w-[50px]  h-[50px] bg-iconColor p-3 rounded-full stroke-background fill-background`} >{notificationIcon}</IconComp>
            <Heading as="h1" className={`text-2xl tracking-[2px]  `} >{`cleaver notification`}</Heading>

          </div>

          <Text className={`w-[85%] py-4 text-lg font-ClashDisplayMedium`} >{thirdSectionData.para1}</Text>

        </div>

      </div>

      <div className={`w-[50%] h-full flex justify-start items-center`} >

        <ImgComp src={heroRightImg2} className={` object-contain w-[300px] h-[500px] z-50 rotate-[15deg] scale-[1.7] origin-left `} ></ImgComp>

        <ImgComp src={thirdSecPrice} className={` object-contain w-[250px] h-auto z-50  scale-[0.9] origin-left absolute top-[40%] right-[17%] `} ></ImgComp>

        <RingComp className={`borderClass w-[300px] h-[550px] absolute top-[5%] right-[19%] rotate-[180deg] scale-[1.9] object-contain object-center`} />

        <GradBackRedYellow className={`z-0 absolute w-[300px] top-[40%] right-[28%] rotate-[150deg] `} />


      </div>

    </section>
  )
}

export default ThirdSec