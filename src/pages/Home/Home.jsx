import React, { useEffect, useState} from "react";
import { Services, StandardCard, Faq, ResponsiveModal } from "../../components";
import Table from "../../assets/Table.png";
import lapmockup from "../../assets/lapmockup.png";
import Porfolio from "../../assets/Porfolio.svg";
import Testimonial from "../../components/Testimonial";
import Banner3 from "../../components/Banner3";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import ReactGA from "react-ga";

const Home = () => {


  const data = [
    {
      question: "How the Stock Market Works?",
      answer:
        "Stock markets provide a secure and regulated environment where market participants can transact in shares and other eligible financial instruments with confidence, with zero to low operational risk. Operating under the defined rules as stated by the regulator, the stock markets act as primary markets and secondary markets.",
    },
    {
      question: "How Can You Earn Income From Owning Stock?",
      answer:
        "There are two ways to earn money by owning shares of stock is through dividends and capital appreciation. Dividends are cash distributions of company profits. If a company has 1,000 shares outstanding and declares a $5,000 dividend, then stockholders will get $5 for each share they own. Capital appreciation is the increase in the share price itself. If you sell a share to someone for $10, and the stock is later worth $11, the shareholder has made $1.",
    },
    {
      question: "What is an SIP?",
      answer:
        "SIPs are a way to invest a fixed sum of money periodically (quarterly or monthly). It is a convenient way to invest as you do not have to make a lump sum investment, and can start with instalments as low as ₹2500 on our system.",
    },
    {
      question: "What is an SIP Calculator?",
      answer:
        "A Systematic Investment Plan (SIP) Calculator is a smart and easy tool that helps you calculate the returns you will earn on your SIP investments. Using this, you can get an estimate on how much you need to invest every month in order to reach your desired goal. It’s a quick and effective tool for achieving your financial goals. You can easily calculate the estimated returns on your investment by entering just a few basic details.",
    },
  ];

  const [open, setOpen] = useState(false);

  useEffect(()=>{
    ReactGA.pageview(window.location.pathname);
  },[])

  return (
    <>
      
        <Banner3 />
      {/* <Banner image={Man} heading="Here to Build the fortune for you." highlight="fortune" wordbreak="the" decription="By the end of 2030, build a portfolio of
                  multibagger stocks that have a minimum
                  expected return of 6X." buttontext="Learn more" btncolor="blue"
      /> */}
       <AnimationOnScroll animateIn="fadeIn"  animateOut="fadeOut" animateOnce
        delay={300}
        duration={2}>
         <Services home />
      </AnimationOnScroll>
       
  
       <AnimationOnScroll animateIn="fadeIn"  animateOut="fadeOut" animateOnce
        delay={300}
        duration={2}>
        <section className="flex shadow-sm mt-[-22px] md:mt-0 bg-gray-50 ">
          <div className="container px-1 md:px-4 lg:px-4  mx-auto ">
            <div className="max-w-2xl mt-6  md:mt-0  mx-auto mb-16 font-sans text-center">
              <h2 className=" text-2xl md:text-4xl font-bold text-black lg:text-4xl">
                The Best Service
              </h2>
              <h2 className=" text-4xl  leading-1 md:text-5xl font-bold  mt-1 md:mt-2 text-darkBlue lg:text-5xl">
                at the best cost!
              </h2>
            </div>
            <div className=" container-full flex justify-center flex-wrap ">
              <StandardCard />
              <StandardCard premium />
              {/* <PremiumCard /> */}
              <StandardCard standard />
            </div>
          </div>
        </section>
      </AnimationOnScroll>
       <AnimationOnScroll animateIn="fadeIn"  animateOut="fadeOut" animateOnce
        delay={300}
        duration={2}>
        <Testimonial />
      </AnimationOnScroll>
      {/* Here mere outlook */}
       <AnimationOnScroll animateIn="fadeIn"  animateOut="fadeOut" animateOnce
        delay={300}
        duration={2}>
        <section className="container-full bg-darkBlue flex flex-col items-center justify-center py-6 mb-2">
          <div className="w-[90%] md:w-[60%] lg:w-[40%] mx-auto">
            <div className="flex justify-center text-center">
              <h1 className="font-sans text-[46px] md:text-[56px] text-white font-semibold">
                Here's a mere <br className="block" />
                <span className="font-bold">Outlook!</span>
              </h1>
            </div>
            <div className="my-6 px-3 md:px-0">
              <p className="text-center text-white font-main text-lg md:text-xl font-normal">
                A mere outlook of past performance, whats it to be a part
                buisnesses that creates value for both customers and
                stakeholers.
              </p>
            </div>
          </div>

          <div className="container mx-auto w-[80%] mt-6">
            <img
              src={Table}
              alt="outlook"
              className="w-[80%] mx-auto  h-[100%] hidden lg:block"
            />
            <img
              src={lapmockup}
              alt="outlook"
              className="w-[70%] h-[70%]  block lg:hidden mb-10 mt-4 ml-20 md:ml-36 "
            />
            <div className="mx-auto w-full flex items-center justify-center mb-4 mt-0 lg:hidden">
              <button className="btn1 rounded-xl" onClick={() => setOpen(true)}>
                View the Graph
              </button>
            </div>
          </div>
        </section>
      </AnimationOnScroll>

      {/* portfolio performnace */}
       <AnimationOnScroll animateIn="fadeIn"  animateOut="fadeOut" animateOnce
        delay={300}
        duration={2}>
        <section className="container mx-auto flex flex-col justify-center mt-6 mb-10">
          <div className="mx-auto text-center ">
            <h1 className="text-[35px] md:text-[50px] lg:text-[56px] font-sans text-black font-semibold leading-12 mt-5 lg:mt-10">
              Expected Portfolio
              <br className="block" />
              <span className="text-darkBlue font-bold">Performance!</span>
            </h1>
          </div>
          <div className="mx-auto ">
            <img
              src={Porfolio}
              alt="portfolio"
              className=" my-[-35px] md:my-[-60px] lg:my-[-90px] "
            />
          </div>
          <div className="w-[100%] mx-auto lg:w-[70%] mb-4">
            <p className="text-center capitalize text-black font-main text-[16px] md:text-[20px] font-medium">
              Respected Clients, This is the mere outlook of expected portfolio
              performance of our sophisticated system with the investment
              starting with 10lakhs. We can assure you that with the great deal
              of advanced knowledge in the financial markets and high expertise
              team members , We can achieve outperforming Return on investments.
              We invest in the future of Technological sectors & Those that can
              solve the current challenges and improve the living standards of
              our life.
            </p>
          </div>
        </section>
      </AnimationOnScroll>
       <AnimationOnScroll animateIn="fadeIn"  animateOut="fadeOut" animateOnce
        delay={300}
        duration={2}>
        <Faq data={data} />
      </AnimationOnScroll>

      <ResponsiveModal open={open} setOpen={setOpen} image />
    </>
  );
};

export default Home;
