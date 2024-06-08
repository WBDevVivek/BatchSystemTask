"use client"

import React from 'react'
import Nav from './Nav'
import { BatchSystemTaskAllState } from '../context/BatchSystemTaskContextProvider'
import LogoComp from './LogoComp'

const Header = () => {

  const contextState = BatchSystemTaskAllState()


  const bgNav = contextState?.bgNav

  return (
    <section className={`pinkBorderClass z-50   max-w-[1300px] bg-transparant w-full h-auto sm:h-[60px] p-2  ${bgNav}   flex flex-wrap sm:flex-nowrap  gap-6  lg:gap-8  items-center `}>

      <LogoComp />
      <Nav />
    </section>

  )
}

export default Header