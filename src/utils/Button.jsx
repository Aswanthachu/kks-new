import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({className,text,logo,icon,path}) => {
  return (
    <Link to={path}>
    <button className={className}>
    {logo}
     {text}
      {icon}
    </button>
    </Link>
  )
}

export default Button










// import React from 'react'
// import { Link } from 'react-router-dom'

// const Button = ({text,color,icon,border,roundedxl,path,logo,wfull}) => {
//   return (
//     <Link to={path}>
//     <button className={`${color === "white" ? "bg-white text-darkBlue":"bg-darkBlue text-white"} ${wfull? "w-full" : "max-w-fit"} ${border  && "border border-black "} font-semibold min-w-[200px]  py-4 px-8 rounded-xl mt-3 hover:scale-105 flex items-center  transition ease-in-out duration-200 ${roundedxl && "rounded-[8px]"} flex justify-center`}>
//       {logo}
//       {text}
//       {icon}
      
//     </button>
//     </Link>
//   )
// }

// export default Button