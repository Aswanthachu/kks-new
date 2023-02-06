import React from 'react'
import { Button } from '../../utils'
import { Link } from 'react-router-dom'
const TeamCardV = ({path,name, text,text2,image}) => {
  return (
    <div className='lg:w-7/12  '>
      <div className='p-5 m-5 flex flex-col md:flex-row items-center justify-center rounded-3xl gap-4 shadow-xl'>
      <img src={image} alt="" />
       <div className=''>
       <h3 className='font-main font-medium text-lg text-black'>{name}</h3>
       <p className='font-main font-normal text-base text-black'>{text}</p>
       <p className='font-main font-normal text-base text-black'>{text2}</p>
       <Link to={path}>
       <Button text="View Linkedin" className="bg-darkBlue text-white font-semibold min-w-[200px]  py-2 px-8 rounded-xl mt-3 hover:scale-[1.02] flex items-center  transition ease-in-out duration-200" />
       </Link>
       </div>
      </div>
    </div>
  )
}

export default TeamCardV