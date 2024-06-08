import React from 'react'
import ImgComp from './smallcomp/ImgComp'
import IconComp from './smallcomp/IconComp'
import Heading from './smallcomp/Heading'
import Text from './smallcomp/Text'


type BudgeIntervalsCompType = {
    className?: string;
    val: {
        icon?: JSX.Element;
        heading?: string;
        para?: string;
    };
    fillColor?: boolean;
}


const BudgeIntervalsComp = ({ className, val, fillColor }: BudgeIntervalsCompType) => {
    return (
        <section className={`${className} flex flex-col gap-3 flex-1`} >

            <div className={`sm:h-[25px] flex items-center gap-2 ${fillColor && "fill-iconColor"}`} >
                <IconComp className={`w-[24px] h-auto`} >{val.icon}</IconComp>
                <Heading className={`text-base sm:text-lg tracking-[1px] sm:tracking-[2px]`} >{val.heading}</Heading>
            </div>

            <Text className={`w-full sm:w-[95%] text-xs sm:text-sm font-ClashDisplayMedium`} >{val.para}</Text>

        </section>
    )
}

export default BudgeIntervalsComp