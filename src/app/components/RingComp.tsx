import React from 'react'
import { heroRing, heroRingGroup } from '../data'
import ImgComp from './smallcomp/ImgComp'


type RingCompType = {
  className: string;
}

const RingComp = ({ className }: RingCompType) => {
  return (
    <div className={`z-10`} >
      <ImgComp src={heroRingGroup} className={`${className}`} ></ImgComp>
    </div>
  )
}

export default RingComp

