import React ,{useEffect} from 'react';
import maintainance from "../assets/maintainance.svg"
import { Button } from '../utils';

const Maintenance = () => {
  useEffect(()=>{
    window.scroll(0,0)
  })
  return (
    <section className='container-full flex justify-center items-center'>
      <div className='lg:w-[30%] lg:h-[30%] md:w-[60%] md:h-[60] text-center lg:text-start mx-auto'>
        <img src={maintainance} alt="maintenance" className='' />
        <h3 className='text-2xl font-bold text-center'>We'll be back.<br />
         <span className='text-xl font-normal' > We're busy updating the Applicaiton for you .<br/> please check back soon.</span>
        </h3>
        <div className='mt-9 ml-8 lg:ml-0'>
          <Button   className='btn2 items-center ml-24 md:ml-44' text="Back to Home" color="blue" path="/" />
        </div>
      </div>
    </section>
  )
}

export default Maintenance