"use client";



import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { BatchSystemTaskStatesType, BatchSystemTaskContextProviderPropsType } from "../interface";



export const BatchSystemTaskAppStates = createContext<BatchSystemTaskStatesType | null>(null);


export const BatchSystemTaskContextProvider: React.FC<BatchSystemTaskContextProviderPropsType> = ({ children }) => {


    const [selectNav, setSelectNav] = useState("01")
    const [bgNav, setBgNav] = useState("bg-transparent")
    const [changeMode, setChangeMode] = useState(false);


    function scrollFun() {

        if (window.scrollY > 50) {
            setBgNav("fixed")
        } else {
            setBgNav("bg-transparent")
        }

    }


    useEffect(() => {

        window.addEventListener("scroll", scrollFun);

        return () => {
            window.removeEventListener("scroll", scrollFun);
        };

    }, [scrollFun])



    
    return (
        <BatchSystemTaskAppStates.Provider
            value={{
                bgNav,
                setBgNav,
                selectNav, 
                setSelectNav, 
                changeMode, 
                setChangeMode
            }}
        >
            {children}
        </BatchSystemTaskAppStates.Provider>
    )
}

export const BatchSystemTaskAllState = () => {
    return useContext(BatchSystemTaskAppStates)
};