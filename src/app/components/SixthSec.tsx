"use client"


import React from 'react'
import Heading from './smallcomp/Heading'
import Text from './smallcomp/Text'
import { fifthSectionData } from '../data'
import StarImgComp from './smallcomp/StarImgComp'

const SixthSec = () => {


  return (
    <section className={`  pinkBorderClass borderClass relative my-20 w-full h-auto flex flex-col items-center gap-12 py-12 pl-4`} >


      <StarImgComp className={`w-[60px] h-[60px] top-[-5%]  lg:top-[10%] right-[35%] lg:left-[50%] `} />


      <div className={`w-full h-[20%]  flex flex-col justify-center items-start gap-2 `} >

        <Heading as="h6" className={` text-base sm:text-lg  tracking-[3px] text-iconColor`} >{`faq`}</Heading>
        <Heading as="h1" className={`text-3xl sm:text-5xl tracking-[1px] w-[80%]`} >{fifthSectionData.heading}</Heading>

      </div>

      <div className={`w-full h-auto  flex flex-col lg:flex-row flex-wrap  items-center gap-6 sm:gap-2 lg:gap-4 `} >

        <SexthLastSecDataComp alignbgcolor="self-start lg:self-start  bg-iconColor text-background" paratextcolor="!text-background" />
        <SexthLastSecDataComp alignbgcolor="self-end lg:self-start  " paratextcolor="" />

        <SexthLastSecDataComp alignbgcolor="self-start  lg:self-start  bg-iconColor text-background lg:bg-transparent lg:text-black " paratextcolor="!text-background lg:!text-paraColor" />

        <SexthLastSecDataComp alignbgcolor="self-end lg:self-start bg-transparent text-black lg:bg-iconColor lg:text-background" paratextcolor="text-black lg:!text-background" />

        <SexthLastSecDataComp alignbgcolor="self-start lg:self-start  bg-iconColor text-background" paratextcolor="!text-background" />
        <SexthLastSecDataComp alignbgcolor="self-end lg:self-start  bg-transparent text-black " paratextcolor="" />

      </div>

    </section>
  )
}

export default SixthSec




type SexthLastSecDataCompType = {
  alignbgcolor: string;
  paratextcolor: string;
}



const SexthLastSecDataComp = ({ alignbgcolor, paratextcolor }: SexthLastSecDataCompType) => {
  return (

    <div className={`sm:min-w-[450px] w-full sm:w-[49%] h-auto sm:h-[230px] xl:h-[200px] rounded-[10px] p-6 sm:p-4 flex flex-col justify-center items-center gap-2  ${alignbgcolor}`} >

      <Heading as="h6" className={`text-xl sm:text-3xl tracking-[3px] w-full  `} >{fifthSectionData.heading2}</Heading>

      <Text className={`w-full text-sm sm:text-base text-justify font-ClashDisplayMedium  ${paratextcolor}`} >{fifthSectionData.para}</Text>

    </div>
  )


}