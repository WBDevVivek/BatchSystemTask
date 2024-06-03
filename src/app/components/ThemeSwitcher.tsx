"use client"

import React from 'react'
import { BatchSystemTaskAllState } from '../context/BatchSystemTaskContextProvider'



type ThemeSwitcherType = {
    children: React.ReactNode
}


const ThemeSwitcher = ({ children }: ThemeSwitcherType) => {


    const contextState = BatchSystemTaskAllState();
    const changeMode = contextState?.changeMode;


    return (
        <div className={` ${!changeMode ? "dark" : ""} `}>{children}</div>
    )
}

export default ThemeSwitcher