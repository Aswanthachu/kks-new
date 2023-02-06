import React from 'react'
import kkslogo from  '../assets/kkslogo.svg'
const Loading = () => {
  return (
    <div className='bg-secondary flex justify-center items-center h-screen w-full text-darkBlue font-main font-bold text-2xl animate-pulse -mt-20'><img src={kkslogo} className="md:w-[40%]" alt="" /></div>
  )
}

export default Loading