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
import StarImgComp from './smallcomp/StarImgComp'

const HeroSec = () => {
  return (
    <section id="#home" className={` pinkBorderClass borderClass relative w-full h-auto lg:h-[650px] lg:min-h-lvh lg:max-h-[700px] flex flex-col lg:flex-row items-start  
    origin-left 
    
    pl-4

    scale-x-[1] scale-y-[1]  
    lg:scale-x-[0.95] lg:scale-y-[0.95]  
    xl:scale-x-[1] xl:scale-y-[1]  
    
    `} >

      <StarImgComp className={`w-[60px] h-[60px] top-[-5%]  lg:top-[1%] right-[35%] lg:right-[3%] `} />
      <StarImgComp className={`w-[50px] h-[50px] top-[-5%] left-[-7%] `} />
      <StarImgComp className={`w-[40px] h-[40px] top-[50%] left-[13%] `} />
      <StarImgComp className={`w-[40px] h-[40px] top-[65%]  lg:top-[65%] right-[20%] lg:right-[35%] `} />

{/* -------------------------------------- */}


      {/*  ------------------------------------- */}

      <div className={` pinkBorderClass borderClass flex grow justify-between items-center
      
      flex-col  md:flex-row  lg:flex-col 
      
      gap-4 
      w-[100%] lg:w-[50%] 
      h-full relative   
      mr-2 xl:mr-0
      
      origin-left 
      
      scale-x-[1]  
      lg:scale-x-[1.1] scale-y-[1]  
     
      
      `} >

        <GradBackRedYellow className={` pinkBorderClass sm:w-[340px] h-[317px] z-0  absolute top-[-5%] left-[25%] scale-[0.8] rotate-0 `} />

        <div className={` pinkBorderClass borderClass z-50 relative w-[100%] sm:w-[80%] md:w-[60%] lg:w-full h-full lg:h-[60%]  flex flex-col justify-evenly items-start gap-6 lg:gap-2 p-4 sm:p-0`} >

          <Heading className={`pinkBorderClass text-4xl sm:text-4xl lg:text-5xl xl:text-5xl w-full lg:w-[90%] xl:w-[95%]`} as="h1">{heroSecData.heading}</Heading>

          <Text className={`pinkBorderClass w-full lg:w-[85%] xl:w-[93%] 
           text-xs sm:text-sm font-ClashDisplayMedium`} >{heroSecData.para}</Text>


          <div className={`w-full pinkBorderClass flex flex-col sm:flex-row gap-5 items-center  `} >

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


        <div className={` pinkBorderClass relative 
        w-full sm:w-[80%]  md:w-[60%] lg:w-full h-full lg:h-[60%] 
        ml-[0%] lg:ml-[-5%] mt-[0%] 
        origin-right  lg:origin-left 

        scale-x-[1] scale-y-[1]

         lg:scale-x-[100%] lg:scale-y-[100%]`} >


          <ImgComp src={heroLeftImg} className={``} />
        </div>

      </div>

      {/*  ------------------------------------- */}

      <div className={` pinkBorderClass relative flex grow justify-start sm:justify-center lg:justify-end items-start  borderClass sm:min-w-[400px] w-full lg:w-[60%] xl:w-[50%] h-full 

      overflow-hidden

      origin-right 

      top-[-5%] right-[0%] lg:right-[-5%] xl:right-[0%] 

      scale-x-[1] scale-y-[1] 
      sm:scale-x-[1] sm:scale-y-[1] 
      lg:scale-x-[1.1] lg:scale-y-[1.2] 
      `}
      >


        <div className={` pinkBorderClass z-50 relative max-w-[300px] sm:w-[350px] h-[500px] flex grow justify-center items-center scale-[0.7] sm:scale-[0.9]  lg:scale-[1.3] rotate-[0deg] top-[15%] right-[0%] lg:right-[22%] xl:right-[25%] `}>

          <ImgComp src={heroRightImg1} className={` scale-x-[1] sm:object-cover  absolute top-[-30px] right-[12%] z-50 rotate-[0deg] `} ></ImgComp>
          <ImgComp src={heroRightImg2} className={` scale-x-[1] sm:object-cover  absolute top-[30px] right-[-12%] z-40`} ></ImgComp>
          <ImgComp src={heroRightImg1} className={` scale-x-[1] sm:object-cover  absolute top-[80px] right-[-35%] z-30`} ></ImgComp>

          <RingComp className={`pinkBorderClass borderClass absolute origin-left scale-x-[1.1]  scale-y-[0.9] sm:scale-x-[1.4] sm:scale-y-[0.9]  rotate-x-[10deg] rotate-y-[0deg] top-[-11%] sm:top-[-10%] right-[-10%] sm:right-[15%]   `} />

          <GradBackRedYellow className={` pinkBorderClass z-0 absolute w-[400px] h-[200px] 
          top-[60%] right-[-25%]  
           rotate-[-40deg] scale-x-[0.6] scale-y-[0.9] `} />

        </div>

      </div>

    </section>
  )
}

export default HeroSec




