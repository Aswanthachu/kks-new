import React, { useEffect } from 'react'
import { TextBanner, Services, CardSection } from '../components'
import { Button } from '../utils';
import { plansPageList } from "../utils/constants";
import plansPageLaptop from "../assets/plansPageLaptop.png";

import ReactGA from "react-ga";

const PlansPage = () => {
  useEffect(() => {
    window.scroll(0, 0)
  });

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, [])

  return (
    <>




      <div className='container-full my-20 h-auto'>
        <div className='container mx-auto'>
          <h1 className='text-4xl md:text-6xl font-semibold'>
            Get Access to your
            <br className='block lg:hidden' />{" "}
            own {" "}
            <br className='hidden lg:block' />
            <span className='text-darkBlue'>
              Personal {" "}
              <br className='block lg:hidden' />
              Dashboard</span>
          </h1>
          <p className='w-[100%] md:max-w-[80%] lg:max-w-[45%] text-lg font-medium my-7'>
            A Custom Dashboard made just for you, helping you
            Understand about your Investments in a glance!
          </p>
          <div className='lg:hidden'>
            {/* <Button
              text="Sign Up"
              path="/signup"
            /> */}
            <Button path="/services" text={"See Our Plans "} className="btn2" icon={<svg className='w-[15px] h-[15px] ml-3' width="9" height="19" viewBox="0 0 9 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.910156 17.4201L7.43016 10.9001C8.20016 10.1301 8.20016 8.87008 7.43016 8.10008L0.910156 1.58008" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>} ></Button>
          </div>
        </div>


        <div className='container-full mt-10 flex flex-col'>
          <div className='container mx-auto flex flex-wrap'>
            <div className='max-w-[100%] md:max-w-[60%] flex flex-wrap  gap-5'>
              {plansPageList.map(l =>
                <div key={l.id} className="flex flex-row  gap-5 md:gap-7 items-center min-w-[150px] md:min-w-[200px]">
                  <div className='p-2 md:p-3 bg-darkBlue w-fit h-fit rounded-full text-sm'>
                    {l.icon}
                  </div>
                  <p className='font-main text-sm md:text-lg font-semibold'>
                    {l.text}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className='container hidden lg:block mx-auto mt-10 '>
            {/* <Button
              text="Sign Up"
              path="/signup"
            /> */}
            <Button path="/services" text={"See Our Plans "} className="btn2 " icon={<svg className='w-[15px] h-[15px] ml-3' width="9" height="19" viewBox="0 0 9 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.910156 17.4201L7.43016 10.9001C8.20016 10.1301 8.20016 8.87008 7.43016 8.10008L0.910156 1.58008" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>} ></Button>
          </div>

        </div>

      </div>

      <div className='container-full relative w-full h-[10px] md:h-[350px] lg:h-[450px]'>
        <img
          src={plansPageLaptop}
          alt="plan-lap"
          className='md:flex hidden  absolute right-0 top-[-135px] md:top-[-110px] lg:top-[-250px] z-0 max-w-[250px]  md:max-w-[600px] lg:max-w-[900px] max-h-[700px]'
        />
      </div>



      <Services plans />



      <CardSection />


      {/* Access Personal Dashboard Section */}

      {/* <div className='container-full my-20 h-auto'>
        <div className='container mx-auto'>
          <h1 className='text-4xl md:text-6xl font-semibold'>
            Get Access to your
            <br className='block lg:hidden' />{" "}
            own {" "}
            <br className='hidden lg:block' />
            <span className='text-darkBlue'>
              Personal {" "}
              <br className='block lg:hidden' />
              Dashboard</span>
          </h1>
          <p className='w-[100%] md:max-w-[80%] lg:max-w-[45%] text-lg font-medium my-7'>
            A Custom Dashboard made just for you, helping you
            Understand about your Investments in a glance!
          </p>
          <div className='lg:hidden'>
            <Button
              text="Sign Up"
              path="/signup"
            />
          </div>
        </div>

        <div className='container-full mt-10 flex flex-col'>
          <div className='container mx-auto flex flex-wrap'>
            <div className='max-w-[100%] md:max-w-[60%] flex flex-wrap  gap-5'>
              {plansPageList.map(l =>
                <div key={l.id} className="flex gap-5 md:gap-7 items-center min-w-[200px]">
                  <div className='p-2 md:p-3 bg-darkBlue w-fit h-fit rounded-full text-sm'>
                    {l.icon}
                  </div>
                  <p className='font-main text-sm md:text-lg font-semibold'>
                    {l.text}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className='container hidden lg:block mx-auto mt-10 '>
            <Button
              text="Sign Up"
              path="/signup"
            />
          </div>

        </div>

      </div>
      <div className='container-full relative w-full h-[10px] md:h-[350px] lg:h-[450px]'>
        <img
          src={plansPageLaptop}
          alt="plan-lap"
          className='absolute right-0 top-[-135px] md:top-[-110px] lg:top-[-250px] z-0 max-w-[250px]  md:max-w-[600px] lg:max-w-[900px] max-h-[700px]'
        />
      </div> */}


      <TextBanner />

    </>
  )
}

export default PlansPage