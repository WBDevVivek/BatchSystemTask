"use client"

import React from 'react'
import Heading from './smallcomp/Heading'
import { fifthSecLeftImg, fifthSecUserImg, fourthSectionData, starImg } from '../data'
import ImgComp from './smallcomp/ImgComp'
import RingComp from './RingComp'
import Text from './smallcomp/Text'
import GradBackRedYellow from './GradBackRedYellow'

const FifthSec = () => {
  return (
    <section className={` pinkBorderClass borderClass relative w-full h-[800px] flex flex-col items-center justify-between py-12`} >

      <div className={`w-full h-[20%] flex flex-col justify-center items-center gap-0 `} >

        <Heading as="h6" className={` py-4 text-lg tracking-[8px]  text-center`} >{`testimonial`}</Heading>
        <Heading as="h1" className={`text-5xl tracking-[1px] w-[70%] text-center`} >{fourthSectionData.heading}</Heading>

      </div>

      <div className={`w-full h-auto flex justify-center items-start gap-0 `} >


        <div className={`w-[50%] h-full flex justify-center items-center relative `} >

          <ImgComp src={fifthSecLeftImg} className={` object-contain w-[300px] h-[500px] z-50 rotate-[0deg] scale-[2] origin-left  absolute right-[35%]`} ></ImgComp>

          <RingComp className={`borderClass w-[300px] h-[550px] absolute -top-[35%]  left-[40%] rotate-[180deg] scale-[1.9] object-contain object-center`} />

          <GradBackRedYellow className={`z-0 absolute w-[300px] top-[25%] left-[20%] rotate-[150deg] `} />
          
        </div>
        <div className={`w-[50%] h-full flex flex-col justify-center items-start gap-2`} >

          <Heading as="h6" className={`text-2xl tracking-[6px] w-[80%]`} >{fourthSectionData.heading2}</Heading>

          <Text className={`w-[80%] py-4 text-lg font-ClashDisplayMedium  `} >{fourthSectionData.para}</Text>

          <ImgComp src={fifthSecUserImg} className={` object-contain w-[150px] h-[30px] z-50 rotate-[0deg] scale-[1.7] origin-left `} ></ImgComp>


          <Text className={` py-4  text-2xl !font-ClashDisplayBold !text-btnColor`} >{fourthSectionData.para2}</Text>

        </div>



      </div>

      <ImgComp src={starImg} className={` object-cover w-[50px] h-[50px] absolute bottom-[5%] -left-[5%] z-50`} ></ImgComp>

    </section>
  )
}

export default FifthSec