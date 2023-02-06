import React,{useEffect} from 'react'
import notfound from '../assets/notfound.png'
import { Button } from '../utils';

import ReactGA from "react-ga";

const NotFound = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, [])

  return (
    <div className='w-full flex flex-col items-center justify-center mt-32'>
      <img alt='not found' className=' w-72 md:w-1/3' src={notfound} />
      <p className='font-bold text-2xl  md:text-4xl flex flex-col items-center mt-8 ' ><span>Ooopss!</span> <br /> <span className=' md:text-4xl text-2xl mt-[-30px]' >Something Went Wrong</span> </p>
      <Button className='btn2 items-center !mt-6' text="Back to Home" color="blue" path="/" />
    </div>
  )
}

export default NotFound