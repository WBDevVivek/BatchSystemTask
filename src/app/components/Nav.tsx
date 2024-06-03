"use client"

import { BatchSystemTaskAllState } from "../context/BatchSystemTaskContextProvider";
import { darkModeIcon } from "../data";
import { lightModeIcon } from "../data";
import { navData } from "../data";
import ButtonComp from "./smallcomp/ButtonComp";
import IconComp from "./smallcomp/IconComp";
import LinkComp from "./smallcomp/LinkComp";


export const Nav = () => {


    const contextState = BatchSystemTaskAllState()


    const bgNav = contextState?.bgNav
    const setBgNav = contextState?.setBgNav
    const selectNav = contextState?.selectNav
    const setSelectNav = contextState?.setSelectNav
    const changeMode = contextState?.changeMode
    const setChangeMode = contextState?.setChangeMode

    return (

        <div className={` border-yellow-900 borderClass w-full flex justify-between items-center`} >
            <div className={` w-auto lg:w-[50%] borderClass h-full flex gap-4 sm:gap-10 items-center ml-10`} >
                {
                    navData?.map((val, i) => {

                        return <LinkComp key={val.id} href={val.navLinkHref}
                            className={` dark:hover:text-iconColor hover:font-bold  
                        
                        ${(val.id === selectNav) ? " dark:text-iconColor text-iconColor fill-iconColor font-bold  " : " "} 
                        
                        w-auto lg:w-[100px] 
                        `}
                            onClick={() => setSelectNav && setSelectNav(val.id)}
                        >
                            <span className={`text-sm hidden lg:flex`} >{val.navLinkName}</span>

                            <IconComp className={`flex lg:hidden  dark:hover:fill-iconColor `}>
                                {val.menuIcon}
                            </IconComp>


                        </LinkComp>
                    })
                }
            </div>

            <div className={`borderClass flex justify-between items-center gap-2 sm:gap-4 lg:w-[18%] mr-[0px] md:mr-[100px]`} >

                <IconComp className={`z-100 w-[20px]  h-full cursor-pointer fill-iconColor`} onClick={() => setChangeMode && setChangeMode(!changeMode)}>
                    {!changeMode ? lightModeIcon : darkModeIcon}
                </IconComp>

                <ButtonComp className={`btnClass bg-btnColor text-background  `}>

                    download

                </ButtonComp>
            </div>

            </div>

    )
}

export default Nav;