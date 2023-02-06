import React, { useEffect } from "react";
import becomeapartner from '../../assets/becomeapartner.png'
import { Banner } from '../../components'
import One from '../../assets/1.png'
import Two from '../../assets/2.png'
import Three from '../../assets/3.png'
import Button from '../../utils/Button';

import ReactGA from "react-ga";

const BecomeAPartner = () => {
  useEffect(() => {
    window.scroll(0, 0)
  });

  useEffect(()=>{
    ReactGA.pageview(window.location.pathname);
  },[])

  return (
    <>
      <div className='lg:mt-20'>
        <Banner heading="Earn Income without Investing!" highlight="Investing!" decription="Become a KKS Capitals Business Partner and earn income without investment"
          buttontext="Get my Referral Link" btncolor="blue" wordbreak="Income" partner path="maintenance" image={becomeapartner} />
        <div className="shadow-blue mt-16" >
          < div className="pt-1 pb-1" >
            <div className=' text-justify flex flex-col justify-center items-center font-main text-xl mx-[8%] lg:mx-[15%] my-16 gap-16'>
              <h4 className=' font-normal'>Under the KKS Capitals Business partner program after the approval of a partner by
                KKS Capitals, the partner can bring new customers to our Businesses. They can earn a
                10% of revenue from transactions made by the clients through their referral. Being a
                partner of KKS Capitals comes with a host of advantages and you do not have to
                make any investment. All you need are good networking skills and the passion to
                assist customers who want to invest in the global stock market. KKS Capitals will
                provide you with necessary support and training. When you as a KKS Capitals
                partner engage more clients, your incentives increase significantly, contributing to
                your income.

              </h4>

              <h6 className=' font-light text-darkGrey'>Example:<br />
                If our Partner brings 100 clients to our premium subscription services ie.
                Revenue Generated through partner clients= 14789*100 =14,78,900/-
                Partner’s Earning = 14,78,900 * 10% = 1,47,890/-
              </h6>
            </div>
          </div>

        </div>


        <div className='flex flex-col items-start mx-[8%] lg:mx-[15%] gap-12'>
          <h1 className='text-4xl font-medium font-main text-black'><span className='font-bold text-darkBlue'>How</span> It Works ?</h1>
          <img className="w-4" src={One} alt="one" />
          <h5 className='text-2xl font-main font-normal text-darkGrey'>After approval share your unique referral link with your friends
          </h5>
          <img className="w-7" src={Two} alt="two" />
          <h5 className='text-2xl font-main font-medium text-darkGrey'>We will help your friends to get their account up and invest.</h5>
          <img className="w-7" src={Three} alt="three" />
          <h5 className='text-2xl font-main font-medium text-darkGrey'>Once your friend successfully subscribed to our services, we will credit your
            bank account with in 3-5 working days with a cash reward</h5>
          <Button text="Become a partner"
            className="font-semibold min-w-[200px]  py-3 px-8 rounded-xl mt-3 hover:scale-[1.02] flex items-center  transition ease-in-out duration-200 bg-darkBlue text-secondary"
            icon={<svg className='w-[15px] h-[15px] ml-3' width="9" height="19" viewBox="0 0 9 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.910156 17.4201L7.43016 10.9001C8.20016 10.1301 8.20016 8.87008 7.43016 8.10008L0.910156 1.58008" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>}
            path="maintenance"
          />
        </div>


      </div>
    </>
  )
}

export default BecomeAPartner