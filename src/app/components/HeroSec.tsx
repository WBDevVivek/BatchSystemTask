"use client"

import React from 'react'
import Heading from './smallcomp/Heading'
import ImgComp from './smallcomp/ImgComp'
import { heroLeftImg, heroRightImg1, heroRightImg2, heroRing, heroSecData, rightArrowIcon, starImg, watchVideoIcon } from '../data'
import Text from './smallcomp/Text'
import ButtonComp from './smallcomp/ButtonComp'
import IconComp from './smallcomp/IconComp'
import RingComp from './RingComp'
import GradBackRedYellow from './GradBackRedYellow'

const HeroSec = () => {
  return (
    <section id="#home" className={` pinkBorderClass borderClass relative w-full h-lvh max-h-[700px] flex  items-start lg:items-center  `} >


      <ImgComp src={starImg} className={` object-cover w-[60px] h-[60px] absolute top-[1%] right-[3%] z-50`} ></ImgComp>

      <ImgComp src={starImg} className={` object-cover w-[50px] h-[50px] absolute top-[5%] left-[-7%] z-50`} ></ImgComp>

      <ImgComp src={starImg} className={` object-cover w-[40px] h-[40px] absolute top-[65%] left-[13%] z-50`} ></ImgComp>

      <ImgComp src={starImg} className={` object-cover w-[40px] h-[40px] absolute top-[80%] right-[38%] z-50`} ></ImgComp>

      {/*  ------------------------------------- */}

      <div className={`borderClass  w-[50%] h-full relative  scale-x-[1.2] origin-left pt-12`} >

        <GradBackRedYellow className={`z-0  absolute top-[5%] right-[35%] rotate-12 `} />

        <div className={`z-50 relative borderClass w-full h-[60%]  flex flex-col justify-evenly items-start gap-6 lg:gap-2`} >

          <Heading className={`text-4xl lg:text-5xl xl:text-6xl w-[95%] lg:w-[85%] xl:w-[95%]`} as="h1">{heroSecData.heading}</Heading>

          <Text className={` w-[95%] lg:w-[85%] xl:w-[95%] text-base sm:text-lg font-ClashDisplayMedium`} >{heroSecData.para}</Text>


          <div className={`flex gap-5 items-center`} >

            <ButtonComp className={`btnClass w-[150px] bg-btnColor text-background`} >

              {heroSecData.btnLink.firstBtn}
              <IconComp className={`fill-background`} >{rightArrowIcon}</IconComp>

            </ButtonComp>


            <ButtonComp className={`btnClass w-[150px] border-2 px-1`} >

              <IconComp className={`fill-btnColor  `} >{watchVideoIcon}</IconComp>
              {heroSecData.btnLink.secBtn}

            </ButtonComp>

          </div>
        </div>

        <div className={` borderClass w-full h-[40%] flex justify-start items-center`} >

          <ImgComp src={heroLeftImg} className={`w-[570px] h-full object-contain lg:scale-y-[1.5] xl:scale-y-[2] origin-right scale-[0.9]  md:scale-[1.1]  lg:scale-x-[1.5] xl:scale-x-[1.6] rotate-0 ml-[0%] lg:ml-[30%] mt-[40px]  sm:mt-[10px] self-start

          hover:ml-[40%] hover:scale-[1.2] 
          md:hover:ml-[40%] md:hover:scale-[1.6] 

          `} />

        

        </div>

      </div>

      {/*  ------------------------------------- */}

      <div className={` lg:z-[-1]  flex absolute borderClass min-w-[100%]  sm:min-w-[50%] h-full top-[-10%] md:top-[0%] right-[0%] lg:right-[0px] lg:top-[70px] lg:scale-x-[1.2] xl:scale-x-[1.15]  lg:scale-y-[1.2] 
      origin-right 
      scale-[0.4] sm:scale-[0.6] md:scale-[0.8] 
      
      hover:scale-[0.8] hover:top-[0px] sm:hover:scale-[1]  sm:hover:top-[70px]  
       md:hover:scale-[1.2]  md:hover:top-[70px]  
      
      `} >

        <ImgComp src={heroRightImg1} className={` object-cover w-[300px] h-[500px] absolute top-[-30px] right-[160px] z-50`} ></ImgComp>
        <ImgComp src={heroRightImg2} className={` object-cover w-[300px] h-[500px] absolute top-[30px] right-[80px] z-40`} ></ImgComp>
        <ImgComp src={heroRightImg1} className={` object-cover w-[300px] h-[500px] absolute top-[80px] right-[0px] z-30`} ></ImgComp>

        <RingComp className={`z-[-1] borderClass w-[300px] h-[550px] absolute -top-[50px] right-[40px] rotate-[180deg] scale-x-[1.2] scale-y-[1.5] object-contain`} />

        <GradBackRedYellow className={`z-0 absolute w-[300px] top-[40%] right-[20%] rotate-[150deg] `} />
      </div>

    </section>
  )
}

export default HeroSec