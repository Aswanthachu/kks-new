import React,{useEffect} from "react";
import { Button } from "../../utils";
import Faq from "../../components/Faq";
import crown from "../../assets/crown.png";
import Success from "../../assets/Success.png";
import { Link } from "react-router-dom";
import RetirmentPlanPageHero from "../../assets/RetirmentPlanPageHero.png";

import {
  retirementPlanPageCard,
  retirementPlanPageCard2,
} from "../../utils/constants";

import CoverVideo from "../../assets/CoverVideo.mp4";
import { useEffect } from "react";

import ReactGA from "react-ga";

const RetirementPlan = () => {
  useEffect(() => {
    window.scroll(0, 0)
  });

  useEffect(()=>{
    ReactGA.pageview(window.location.pathname);
  },[])

  return (
    <>


      <div className="lg:mx-[10%] mx-[7%] md:flex md:flex-col justify-center md:w-[80%] lg:w-[70%] lg:my-24 hidden ">
        <video
          src={CoverVideo}
          className="hidden md:block absolute z-[-80] w-full mt-[-20px]  lg:mt-[-0px] left-0 bg-opacity-50"
          loop
          autoPlay
          muted
        >
          {" "}
        </video>

        <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-7xl text-black lg:text-secondary my-5 z-20 ">
          During the busy days of your life don’t forget to{" "}
          <span className="text-darkBlue">plan about your future.</span>
        </h1>
        <p className="font-main font-light text-xl lg:text-2xl text-black lg:text-secondary mb-5">
          Plan with KKS CAPITALS Advisor for a better Future.
        </p>
        <Button
          text="Get Personal Plan"
          className="btn2 px-5 "
          icon={
            <svg
              className="w-[15px] h-[15px] ml-3"
              width="9"
              height="19"
              viewBox="0 0 9 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.910156 17.4201L7.43016 10.9001C8.20016 10.1301 8.20016 8.87008 7.43016 8.10008L0.910156 1.58008"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        />
      </div>
      
      <div className="container-full mx-auto md:hidden bg-cover w-full flex flex-col">
        <div className="w-full h-full relative flex justify-center">
          <img src={RetirmentPlanPageHero} alt="plans-banner"
            className="w-full  object-contain"
          />
          <div className="container w-full   mx-auto text-white absolute  top-0">
            <h1 className="font-sans text-3xl font-semibold my-10 ">
              During the busy days of your life don’t forget to plan about your future.
            </h1>
            <p className="font-main text-sm">
              Plan with KKS CAPITALS Advisor for a better Future.
            </p>
            <Link to="/maintenance"
              className="flex justify-center items-center font-semibold text-sm rounded-lg gap-2 bg-white text-darkBlue p-3 mt-3 w-[60%]">
              Get Personal Plan
              <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.864 6.49995H1.13604M8.56066 1.19665L13.864 6.49995L8.56066 11.8032" stroke="#0055A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </Link>
          </div>
        </div>

      </div>
    

      

      <div className="bg-darkBlue m-5  md:my-16 lg:mt-64 lg:mb-24 lg:mx-32 px-6 py-6  lg:px-10 lg:py-16 rounded-3xl md:mt-24">
        <p className="text-secondary font-main font-semibold text-center text-lg md:text-xl lg:text-2xl">
          If you want to feel more confident about achieving a comfortable
          retirement and other goals for yourself and your family, our
          Retirement Advisory Service may be the ideal choice. It's designed for
          individuals and their households with investable assets or more who
          want the extra planning that comes from professional advice. Our
          services are diversified across different asset classes and
          currencies.
        </p>
      </div>

      



      <div className="mx-[4%]  md:mx-[7%] lg:mx-[10%] my-28">
        <h2 className="font-sans font-semibold text-3xl lg:text-4xl lg:mx-32 text-black">
          Start Planning <span className="text-darkBlue">Today</span>
        </h2>
        <div className="border  shadow-xl rounded-xl pt-5 lg:mx-32 flex flex-col mt-8 gap-2 lg:gap-0 lg:items-center">
          <img src={crown} alt="crown" className="w-[12%] ml-14 lg:ml-0" />
          <h6 className="font-semibold font-main text-2xl mb-1 mt-2 text-darkBlue ml-14 lg:ml-0">
            Personal Plan
          </h6>
          <h4 className="text-darkBlue  text-5xl font-main font-bold ml-14 lg:ml-0">
            ₹52399.00
          </h4>
          <div className="flex flex-col lg:flex-row items-center flex-wrap w-full justify-center md:mt-9 ">
            <div className="w-[80%] lg:w-[43%] border border-black flex lg:justify-center items-center m-2 p-4 !mt-4 md:mt-0 rounded-lg">
              <img width={"20px"} src={Success} alt="success" />
              <h6 className="font-main font-medium text-xl  md:text-2xl ml-2">
                Wealth security plans
              </h6>
            </div>
            <div className=" w-[80%] lg:w-[43%] border border-black flex lg:justify-center items-center p-4 m-2 rounded-lg">
              <img width={"20px"} src={Success} alt="success" />
              <h6 className="font-main font-medium text-xl  md:text-2xl ml-2">
                Budgeting
              </h6>
            </div>
            <div className=" w-[80%] lg:w-[43%] border border-black flex lg:justify-center items-center p-4 m-2 rounded-lg">
              <img width={"20px"} src={Success} alt="success" />
              <h6 className="font-main font-medium text-xl md:text-2xl ml-2">
                Timing Retirement
              </h6>
            </div>
            <div className="w-[80%] lg:w-[43%] border border-black flex lg:justify-center items-center p-4 m-2 rounded-lg ">
              <img  width={"20px"} src={Success} alt="success" />
              <h6 className="font-main font-medium text-xl  md:text-2xl ml-2">
                Investing Strategy
              </h6>
            </div>
            <div className="w-[80%] lg:w-[88%] my-7 ">
              
              <Button
                text="Get Personal Plan"
                className="bg-darkBlue text-center text-secondary p-4 w-full  rounded-xl "
                path='/questonnaire'
              />
              
            </div>
          </div>
        </div>
      </div>

      {/* first card section */}

      <div className="container mx-auto">
        <div className="grid py-2 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {retirementPlanPageCard.map((card) => (
            <div
              className="rounded-2xl shadow-2xl lg:grid-cols-3 bg-white"
              key={card.id}
            >
              <div
                className={`w-full bg-contain rounded-2xl relative  flex-col`}
              >
                <div className="relative">
                  <img src={card.image} alt={card.id} className="rounded-2xl max-h-[258px] min-w-full backdrop-blur-2xl" />
                  <div className="w-full h-full flex justify-center">
                    <h3 className="text-white text-center absolute bottom-6 mx-auto font-semibold text-lg backdrop-blur-2xl w-fit p-2 rounded-lg">
                      {card.heading}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-full p-6 text-center text-lg font-medium">
                <p className="mt-12">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      



      <div className="md:mx-20 mx-5 my-28">
        <h2 className="font-sans font-semibold text-4xl my-10">
          <span className="text-darkBlue">Why Indians</span> Need To Think?
        </h2>
        <h6 className="font-main font-medium text-lg my-8">
          Most of us in India do not adopt a planned approach to retirement
          planning,<br/> and this often leads to many difficulties in the future
          ahead.
        </h6>

        {/* second card */}

        <div className="container-full mx-auto">
          <div className="grid py-2 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {retirementPlanPageCard2.map((card) => (
              <div
                className="rounded-2xl shadow-2xl lg:grid-cols-3 bg-white"
                key={card.id}
              >
                <div className="relative">
                  <img src={card.image} alt={card.id} className="rounded-2xl max-h-[258px] min-w-full backdrop-blur-2xl" />
                  <div className="w-full h-full flex justify-center">
                    <h3 className="text-white text-center absolute bottom-6 mx-auto font-semibold text-lg backdrop-blur-2xl w-fit p-2 rounded-lg">
                      {card.heading}
                    </h3>
                  </div>
                </div>
                <div className="w-full p-6 text-center text-xl font-normal">
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      



      {/* second card */}
      <div className="md:mx-20 mx-5">
        <h2 className="font-sans font-semibold lg:text-4xl text-4xl my-10 ">
          <span className="text-darkBlue">Mistakes </span> You Could Be Making?
        </h2>
        <ul className="font-main font-normal text-xl leading-10 ">
          <li className="">
            • Always postponing it for "a better time"
            <li>
              • Blindly purchasing low-yielding insurance policies for your
              retirement
            </li>
            <li>
              • Saving only into fixed return instruments such as fixed deposits
              and Public Provident Fund (PF).
            </li>
            <li>
              • Occasionally drawing upon your retirement fund for short term
              "wants"
            </li>
            <li>• Saving without a proper target in mind</li>
          </li>
        </ul>
      </div>
      <div className="md:mx-20 mx-5 w-fill h-[3px] my-20 bg-darkBlue flex justify-center"></div>
      



      <div className="md:mx-20 mx-5">
        <h2 className="font-sans font-semibold text-4xl ml-2">
          {" "}
          Start <span className="text-darkBlue">Planning</span> Today
        </h2>
        <div className="p-8  mt-5 shadow-[-10px_15px_50px_10px_rgb(0,0,0,0.10)] rounded-2xl ">
          <h4 className="font-main font-medium text-xl my-2">
            STEP 1: Complete Questionnaire
          </h4>
          <p className="font-main font-normal text-lg text-black">
            Our questionnaire is designed to guide deep thinking about what you
            need, want, and hope for in the future.<br/> The more details about your
            situation we have, the better we can tailor our advice to your
            goals.
          </p>
        </div>
        <div className="p-8   mt-5 shadow-[-10px_15px_50px_10px_rgb(0,0,0,0.10)] rounded-2xl ">
          <h4 className="font-main font-medium text-xl my-2">
            STEP 2: Advisor window
          </h4>
          <p className="font-main font-normal text-lg text-black">
            Once your questionnaire is submitted, an advisor will contact you.
            The advisor focuses on getting to know you <br/> and on discussing your
            goals and expectations.
          </p>
        </div>
        <div className="p-8   mt-5 shadow-[-10px_15px_50px_10px_rgb(0,0,0,0.10)] rounded-2xl ">
          <h4 className="font-main font-medium text-xl my-2">
            STEP 3 : Receive Your Personalised Financial Plan
          </h4>
          <p className="font-main font-normal text-lg text-black">
            The plan is yours to keep without cost or commitment. And if you
            enroll in discretionary management, <br/> you can get ongoing advice and
            investment management for a competitive cost.
          </p>
        </div>
      </div>
      <div className="md:mx-20 mx-5 w-fill h-[3px] my-20 bg-darkBlue flex justify-center"></div>
      



      <div className="md:mx-20 mx-5">
        <h2 className="font-sans font-semibold text-4xl  ">
          To{" "}
          <span className="text-darkBlue">ensure a successful planning </span>{" "}
          experience:
        </h2>
        <ul className="font-main font-normal text-xl my-8 leading-10">
          <li>
            • It's best to set aside 30 to 60 minutes for the questionnaire.
          </li>
          <li>
            • If you need a break, pause and come back later. Your information
            is saved automatically as you go.
          </li>
        </ul>
      </div>
      <div className="md:mx-20 mx-5  w-fill h-[3px] my-20 bg-darkBlue flex justify-center"></div>
      



      <div className="md:mx-20 mx-5 mb-20">
        <h2 className="font-sans font-semibold  text-4xl my-10 ">
          <span className="text-darkBlue">What to expect </span>on your
          questionnaire
        </h2>
        <h4 className="font-medium text-2xl font-main my-12">
          Agree to the Terms of the Service:
        </h4>
        <ul className="font-main font-normall text-xl my-4 text-black leading-10">
          <li>• Review key facts about the Service.</li>
          <li>
            • Review Service documents and confirm your acceptance of the
            Service Terms.
          </li>

          <li>• Decide which accounts you want to include in the Service.</li>
          <li>
            • Consider inviting a planning partner ("co-client") to join your
            plan.
          </li>
        </ul>
        <h4 className="font-medium text-3xl font-main my-10">
          Tell us about yourself, your finances, and your goals:
        </h4>
        <ul className="font-main font-normal text-xl my-12 text-black leading-10">
          <li>• Basics about you, your family, and your financial goals.</li>
          <li>• Concerns and expectations for the future.</li>

          <li>• Your annual income and current retirement savings.</li>
          <li>
            • You will need your financial statements, such as quarterly mutual
            fund statements,<br/> year-end brokerage statements, or pension
            statements, if applicable.
          </li>
        </ul>
      </div>
      



      <Faq />
      
    </>
  );
};

export default RetirementPlan;
