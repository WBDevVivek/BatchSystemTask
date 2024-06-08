import React from 'react'
import { heroRing, heroRingGroup } from '../data'
import ImgComp from './smallcomp/ImgComp'


type RingCompType = {
  className: string;
}

const RingComp = ({ className }: RingCompType) => {
  return (
    <div className={`${className} w-[300px] h-[550px]  `} >
      <ImgComp src={heroRingGroup} ></ImgComp>
    </div>
  )
}

export default RingComp

