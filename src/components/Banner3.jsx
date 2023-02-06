import React from "react";
import Man2 from "../assets/Man2.png";
import Background from "../assets/Background.png";
import { Button } from "../utils";
const Banner3 = () => {
  const highlight = "fortune";
  const heading = "Here to Build a fortune for you.";
  const wordbreak = "a";
  const decription = `By the end of 2030, build a portfolio of
 multibagger stocks that have a minimum
 expected return of 6X.`;
  const about = false;
  return (
    <>
      <section className="container-full mt-12 lg:mb-40">
        <div
          className={`container mx-auto pb-0 mt-2 md:mt-4 lg:my-0 ${about && "lg:my-[-50px]"
            } flex flex-col z-0 relative`}
        >
          <div className="w-[100%] flex flex-wrap">
            <div className=" flex flex-col justify-center w-[100%] md:w-[90%] lg:w-[60%]  ">
              <div className="w-[100%] md:w-[100%] lg:w-[80%] lg:mt-16">
                <h2 className=" text-sans text-[36px] md:text-[57px] lg:text-[67px] leading-[40px] md:leading-[55px] lg:leading-[80px] font-bold font-main  mt-6 md:mt-0 md:ml-2 ">
                  {/* {heading} */}
                  {heading.split(" ").map((text) => {
                    return text === highlight ? (
                      highlight === wordbreak ? (
                        <>
                          <span className="text-darkBlue font-bold mr-2">
                            {highlight}
                          </span>
                          <br />
                        </>
                      ) : (
                        <span className="text-darkBlue font-extrabold mr-2">
                          {highlight}
                        </span>
                      )
                    ) : text === wordbreak ? (
                      <>
                        <span className="mr-2">{text}</span>
                        <br />
                      </>
                    ) : (
                      <span className="mr-2">{text}</span>
                    );
                  })}
                </h2>
                <div className=" text-[16px] mb-4 md:text-[24px] ">
                  <p className=" md:text-start mt-6  ">
                    {decription}
                  </p>
                </div>
              </div>

              <div className="w-full flex  justify-start">
                <Button
                  path="/services"
                  text={"Learn More"}
                  className="btn2 mb-5  "
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
                ></Button>
              </div>
            </div>

            <div className="   w-full h-72 lg:absolute lg:w-[50%]  lg:left-1/2 lg:top-7   lg:h-[450px] md:h-[340px] flex justify-center mx-auto mt-5 md:mt-16 ">
              {/* <Background  /> */}
              <img
                src={Background}
                className="z-10 h-52 absolute lg:-right-10   lg:bottom-0 md:h-[300px] bottom-0 "
                alt="background"
              />
              <img
                className=" z-30 absolute lg:left-24 lg:w-[400px] bottom-0 lg:h-[520px] md:h-[340px] lg:bottom-0 md:bottom-0 h-72 "
                src={Man2}
                alt="Man"
              />
            </div>
          </div>
        </div>
        </section>
      </>
  );
};

export default Banner3;

