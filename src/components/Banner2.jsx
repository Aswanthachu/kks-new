import React from "react";
import { Link } from "react-router-dom";
const Banner2 = () => {
  return (
    <>
      <section className=" flex flex-col justify-center items-center gap-2 md:gap-6 mt-14 md:mt-28 text-center">
        <h2 className="text-sans text-[37px] md:text-[57px] lg:text-[67px] leading-[40px] md:leading-[55px] lg:leading-[70px] font-bold font-main">
          Let’s build your <br />
          <span className="text-darkBlue">fortune!</span>
        </h2>
        <div className="mt-5  text-[16px] mb-[20px] md:text-[24px] ">
          <p>
            Helping you find Stocks that get outperforming
            <br /> ROI and guiding you to your fortune!
          </p>
        </div>
        <div className="mt-[-20px] mb-7 md:mb-20 ">
          <Link to="/login">
            <button className=" font-normal md:font-semibold py-3 px-8  md:py-4 md:px-6 rounded-xl mt-4  md:mt-3 hover:scale-105 flex items-center
           max-w-fit transition ease-in-out duration-200  bg-darkBlue text-secondary">
              Login{" "}
              <svg className='w-[15px] h-[15px] ml-3' width="9" height="19" viewBox="0 0 9 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.910156 17.4201L7.43016 10.9001C8.20016 10.1301 8.20016 8.87008 7.43016 8.10008L0.910156 1.58008" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Banner2;
