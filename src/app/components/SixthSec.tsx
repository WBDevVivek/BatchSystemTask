"use client"


import React from 'react'
import Heading from './smallcomp/Heading'
import Text from './smallcomp/Text'
import { fifthSectionData, starImg } from '../data'
import ImgComp from './smallcomp/ImgComp'

const SixthSec = () => {


  return (
    <section className={` pinkBorderClass borderClass relative w-full h-[900px] flex flex-col items-center gap-4 py-12`} >


      <ImgComp src={starImg} className={` object-cover w-[60px] h-[60px] absolute top-[1%] left-[50%] z-50`} ></ImgComp>

      <div className={`w-full h-[20%]  flex flex-col justify-center items-start gap-0 `} >

        <Heading as="h6" className={` text-lg tracking-[3px] text-iconColor`} >{`faq`}</Heading>
        <Heading as="h1" className={`text-5xl tracking-[1px] w-[80%]`} >{fifthSectionData.heading}</Heading>

      </div>

      <div className={`w-full h-[80%] flex flex-wrap justify-between items-center gap-6 `} >

        <SexthLastSecDataComp bgColor />
        <SexthLastSecDataComp bgColor={false} />
        <SexthLastSecDataComp bgColor={false} />
        <SexthLastSecDataComp bgColor />
        <SexthLastSecDataComp bgColor />
        <SexthLastSecDataComp bgColor={false} />

      </div>

    </section>
  )
}

export default SixthSec





type SexthLastSecDataCompType = {
  bgColor?: boolean;
}



const SexthLastSecDataComp = ({ bgColor }: SexthLastSecDataCompType) => {
  return (

    <div className={`w-[49%] h-[200px] rounded-[10px] p-4 flex flex-col justify-evenly items-center gap-0 ${bgColor && "bg-iconColor text-background"} `} >

      <Heading as="h6" className={`text-2xl tracking-[3px] w-full`} >{fifthSectionData.heading2}</Heading>

      <Text className={`w-full py-4 text-xl font-ClashDisplayMedium text-justify ${bgColor && "!text-background"} `} >{fifthSectionData.para}</Text>

    </div>
  )


}