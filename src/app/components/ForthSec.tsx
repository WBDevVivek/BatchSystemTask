"use client"

import React from 'react'
import ImgComp from './smallcomp/ImgComp'
import RingComp from './RingComp'
import Heading from './smallcomp/Heading'
import Text from './smallcomp/Text'
import { creditCardImg, fourStarIcon, heroRightImg1, starImg, thirdSectionData } from '../data'
import IconComp from './smallcomp/IconComp'
import GradBackRedYellow from './GradBackRedYellow'

const ForthSec = () => {
  return (
    <section id="#aboutus" className={` pinkBorderClass borderClass  w-full h-lvh max-h-[600px] flex flex-row items-center justify-betweem relative`} >


      <ImgComp src={starImg} className={` object-cover w-[50px] h-[50px] absolute top-[5%] left-[50%] z-50`} ></ImgComp>

      <ImgComp src={starImg} className={` object-cover w-[60px] h-[60px] absolute bottom-[1%] right-[3%] z-50`} ></ImgComp>


      <div className={`w-[50%] h-full flex justify-center items-center relative`} >

        <ImgComp src={heroRightImg1} className={` object-contain w-[300px] h-[500px] z-50 rotate-[15deg]  scale-[1.7] origin-left`} ></ImgComp>
        <ImgComp src={creditCardImg} className={` absolute top-[29%] left-[46%] object-cover w-[300px]  z-50 rotate-[0deg] scale-[0.8] origin-left`} ></ImgComp>

        <RingComp className={`borderClass w-[300px] h-[550px] absolute top-[5%] left-[40%] rotate-[180deg] scale-[1.9] object-contain object-center`} />

        <GradBackRedYellow className={`z-0 absolute w-[300px] top-[45%] left-[50%] rotate-[10deg] `} />

      </div>
      <div className={`w-[50%] h-full flex flex-col justify-center items-center gap-5`} >

        <div className={`w-full flex flex-col justify-center items-start gap-4 `} >




          <div className={`flex w-[400px] h-[50px] gap-3 items-center`} >

            <IconComp className={`w-[50px]  h-[50px] bg-iconColor p-3 rounded-full stroke-background fill-background`} >{fourStarIcon}</IconComp>
            <Heading as="h1" className={`text-2xl tracking-[2px]`} >{`fully customizable`}</Heading>

          </div>


          <Text className={`w-[95%] text-lg font-ClashDisplayMedium`} >{thirdSectionData.para1}</Text>

        </div>


      </div>
    </section>
  )
}

export default ForthSec