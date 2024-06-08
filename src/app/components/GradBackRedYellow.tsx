import React from 'react'

type GradBackRedYellowType = {
  className: string;
}

// blur-3xl 
const GradBackRedYellow = ({ className }: GradBackRedYellowType) => {
  return (
      <div className={`${className} w-[250px] h-[180px] rounded-[50%] bg-gradientColor blur-3xl `} >

      </div>
  )
}

export default GradBackRedYellow


/*

250
180
*/