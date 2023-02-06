import React from 'react'
import { Button } from '../utils'

const TextBanner = () => {
    return (
        <section className='container mx-auto min-h-[50vh] md:min-h-[calc(100vh-400px)] lg:min-h-[calc(100vh-300px)] flex lg:mt-10'>
            <div className='text-center w-[100%] my-auto h-fit flex flex-col items-center'>
                <h1 className='font-sans font-bold text-2xl md:text-3xl lg:text-5xl mb-10 !leading-tight'>
                    Gain Exclusive Access to an <span className='text-darkBlue font-extrabold'>Elite Platform</span><br />
                    previously reserved for the <br /><span className='text-darkBlue font-extrabold'>Wealthiest Individuals.</span>
                    {/* The Best Service<br />
                    at the <span className='text-darkBlue font-extrabold'>Best Price</span> */}
                </h1>
                {/* <Button 
                text="View Our Plans"
                path="/plans"
                /> */}
                <Button path="/services" text={"See Our Plans "} className="btn2" icon={<svg className='w-[15px] h-[15px] ml-3' width="9" height="19" viewBox="0 0 9 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.910156 17.4201L7.43016 10.9001C8.20016 10.1301 8.20016 8.87008 7.43016 8.10008L0.910156 1.58008" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>} ></Button>
            </div>
        </section>
    )
}

export default TextBanner