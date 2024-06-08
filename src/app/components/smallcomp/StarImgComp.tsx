import React from 'react'
import ImgComp from './ImgComp'
import { starImg } from '@/app/data'


type StarImgCompType = {
    className?: string;
}


const StarImgComp = ({ className }: StarImgCompType) => {
    return (
        <div  className={`${className} object-cover absolute z-50 `} >
            <ImgComp src={starImg} className={` `} ></ImgComp>
        </div>
    )
}

export default StarImgComp