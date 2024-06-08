"use client"

import React from 'react'
import ImgComp from './smallcomp/ImgComp'
import { BudgeIntervalsCompData, secSecFullImgWithRing, secSectionData } from '../data'
import Heading from './smallcomp/Heading'
import BudgeIntervalsComp from './BudgeIntervalsComp'
import GradBackRedYellow from './GradBackRedYellow'
import StarImgComp from './smallcomp/StarImgComp'

const SecSec = () => {
  return (

    <>

      <StarImgComp className={`w-[50px] h-[50px] top-[45%]  lg:top-[45%] right-[35%] lg:left-[3%] `} />

      <section id="#aboutus" className={` pinkBorderClass borderClass relative w-full h-auto lg:h-lvh lg:max-h-[600px] flex flex-col lg:flex-row items-center justify-betweem mt-20 overflow-hidden
      gap-4 lg:gap-0 
      pl-4
      `} >

        <div className={`greenBorderClass relative h-full flex justify-center lg:justify-end items-center left-[0%]
        origin-center sm:origin-center

        order-2 lg:order-1
        
        w-full sm:w-[60%] lg:w-[50%] 

        scale-x-[1] scale-y-[1] 
        lg:scale-x-[1.2] lg:scale-y-[1.2] 

        `} >

          <ImgComp src={secSecFullImgWithRing} className={`greenBorderClass  z-50  w-[100%] h-[100%] scale-[1]
              `} ></ImgComp>

          <GradBackRedYellow className={`z-0 absolute w-[250px] h-[150px] left-[20%] top-[25%] rotate-[190deg] `} />

        </div>

        {/* =============================================================================================*/}

        <div className={`greenBorderClass w-[100%] lg:w-[50%] h-[80%] flex flex-col justify-evenly items-center gap-8 sm:gap-5 order-1 lg:order-2
        
        scale-x-[0.95] scale-y-[0.95] 
        xl:scale-x-[1] xl:scale-y-[1] 
        
        `} >

          <div className={`w-full flex flex-col justify-center items-start gap-2 sm:gap-0 `} >

            <Heading as="h6" className={`text-base sm:text-lg tracking-[8px] text-iconColor`} >{`features`}</Heading>
            <Heading as="h1" className={`text-4xl sm:text-5xl tracking-[1px] `} >{secSectionData.heading}</Heading>

          </div>
          <div className={`flex flex-col justify-center items-center gap-6 sm:gap-4 w-full h-[70%]`} >

            {
              BudgeIntervalsCompData.map((val, i) => {
                return <BudgeIntervalsComp key={val.id} val={val} fillColor={i === 0 ? true : false} />
              })
            }

          </div>

        </div>

        <GradBackRedYellow className={`border-4 border-blue-800 z-0 absolute  w-[250px] h-[150px]  top-[30%] right-[-10%] rounded-tl-full rounded-tr-full rotate-[270deg] `} />

      </section>
    </>
  )
}

export default SecSec




