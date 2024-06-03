import React from 'react'

type GradBackRedYellowType={
  className:string;
}


const GradBackRedYellow = ({className}:GradBackRedYellowType) => {
  return (

    <div className={`${className} w-[250px] h-[180px] rounded-[50%] blur-3xl bg-gradientColor `} >

    </div>
    
  )
}

export default GradBackRedYellow


/*

250
180
*/