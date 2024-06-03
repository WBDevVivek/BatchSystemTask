"use client"

import React from 'react'
import ImgComp from './smallcomp/ImgComp'
import { BudgeIntervalsCompData, heroRightImg1, secSectionData, starImg } from '../data'
import RingComp from './RingComp'
import Heading from './smallcomp/Heading'
import BudgeIntervalsComp from './BudgeIntervalsComp'
import GradBackRedYellow from './GradBackRedYellow'

const SecSec = () => {
  return (
    <section id="#aboutus" className={` pinkBorderClass borderClass relative w-full h-lvh max-h-[600px] flex flex-row items-center justify-betweem mt-20 `} >


      <ImgComp src={starImg} className={` object-cover w-[50px] h-[50px] absolute top-[5%] left-[-7%] z-50`} ></ImgComp>


      <div className={`w-[50%] h-full flex justify-center items-center relative scale-[0.6] lg:scale-[0.8] xl:scale-[1]`} >

        <ImgComp src={heroRightImg1} className={` object-contain w-[300px] h-[500px] z-50 rotate-[15deg]  scale-[1.7] origin-left`} ></ImgComp>

        <RingComp className={`borderClass w-[300px] h-[550px] absolute top-[5%] left-[40%] rotate-[180deg] scale-[1.9] object-contain object-center`} />

        <GradBackRedYellow className={`z-0 absolute w-[300px] top-[25%] left-[20%] rotate-[150deg] `} />

      </div>

{/* ==================================================================================================== */}


      <div className={`w-[50%] h-full flex flex-col justify-center items-center gap-5 scale-[0.6]  lg:scale-[0.8] xl:scale-[1]`} >

        <div className={`w-full flex flex-col justify-center items-start gap-0 `} >

          <Heading as="h6" className={`text-lg tracking-[8px] text-iconColor`} >{`features`}</Heading>
          <Heading as="h1" className={`text-5xl tracking-[1px] `} >{secSectionData.heading}</Heading>

        </div>
        <div className={`flex flex-col justify-center items-center gap-4 `} >

          {
            BudgeIntervalsCompData.map((val,i) => {
              return <BudgeIntervalsComp key={val.id} val={val} fillColor={i===0 ? true : false}/>
            })
          }

        </div>




      </div>

      <GradBackRedYellow className={`border-4 border-blue-800 z-0 absolute w-[300px] top-[5%] right-[-2%] rounded-tl-full rounded-tr-full rotate-[270deg] `} />

    </section>
  )
}

export default SecSec