import React from "react";
import { Button } from "../utils";

const Services = () => {
  return (
    <div className="mt-[-32px] lg:mt-[-22px] shadow-blue   ">
      <div className="flex flex-col justify-center items-center text-black font-bold my-8 font-sans ">
        <h3 className="md:text-[52px] mt-14 text-[30px] text-center  ">
          All you need to <span className="text-darkBlue">grow</span>
        </h3>
        <h5 className=" text-darkGrey text-center text-[20px] mt-[-5px] md:text-[30px] p-3 mb-3 md:mb-14 font-[400]">
          After subscribing you will have <br /> access to...
        </h5>
        <div className="flex flex-col lg:flex-row lg:justify-evenly items-center justify-center flex-wrap lg:w-[1024px]">
          <div className="flex flex-col justify-center items-center lg:justify-start md:h-72 h-64 w-96  ">
            <svg className="w-12 md:w-16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.3754 20.9459L41.4159 29.3421C39.7363 36.5934 36.4172 39.526 30.1787 38.9234C29.179 38.8431 28.0993 38.6623 26.9396 38.3811L23.5804 37.5776C15.2425 35.5891 12.6632 31.4512 14.6227 23.055L16.5822 14.6387C16.9821 12.9313 17.462 11.4449 18.0618 10.2196C20.4012 5.35863 24.3802 4.053 31.0585 5.63985L34.3977 6.42323C42.7755 8.39172 45.3349 12.5497 43.3754 20.9459Z" stroke="#0055A4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M30 38.7503C28.767 39.5953 27.2159 40.2994 25.3266 40.9231L22.1845 41.9693C14.2894 44.5446 10.1331 42.3918 7.56771 34.4045L5.02221 26.4575C2.4767 18.4702 4.5847 14.2451 12.4797 11.6699L15.6219 10.6237C16.4372 10.3621 17.2128 10.1408 17.9486 10C17.352 11.2273 16.8747 12.7161 16.477 14.4262L14.5281 22.8561C12.5792 31.2659 15.1446 35.4105 23.4374 37.4023L26.7783 38.207C27.9318 38.4887 29.0057 38.6698 30 38.7503Z" stroke="#0055A4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M25 17L35 20" stroke="#0055A4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M23 25L29 26" stroke="#0055A4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <h6 className="md:p-3 p-2  text-xl font-main  font-sizeHundred">List of Stocks</h6>
            <p className="w-60 text-center text-lg font-main  text-darkGrey font-fiveHundred">
              Providing you with a list of stocks to buy to help you make the
              best investment decision
            </p>
          </div>
          <div className="flex flex-col justify-center items-center lg:justify-start md:h-72 h-64 w-96 ">
            <svg className="w-12 md:w-16" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.125 31.5V12.25C6.125 5.25 7.875 3.5 14.875 3.5H27.125C34.125 3.5 35.875 5.25 35.875 12.25V29.75C35.875 29.995 35.875 30.24 35.8575 30.485" stroke="#0055A4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.1125 26.25H35.875V32.375C35.875 35.7525 33.1275 38.5 29.75 38.5H12.25C8.8725 38.5 6.125 35.7525 6.125 32.375V31.2375C6.125 28.49 8.365 26.25 11.1125 26.25Z" stroke="#0055A4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14 12.25H28" stroke="#0055A4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14 18.375H22.75" stroke="#0055A4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <h6 className="md:p-3 p-2  text-xl font-main  font-sizeHundred">Buyer’s Guide</h6>
            <p className="w-60 text-center text-lg font-main  text-darkGrey font-fiveHundred">
              We guide investors to buy stocks in the U.S. capital markets.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center lg:justify-start md:h-72 h-64 w-96  ">
            <svg className="w-12 md:w-16" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.8856 3.83398L9.94727 10.7915" stroke="#0055A4" stroke-width="4" strokeMiterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M29.1143 3.83398L36.0526 10.7915" stroke="#0055A4" stroke-width="4" strokeMiterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3.8335 15.0462C3.8335 11.5004 5.731 11.2129 8.0885 11.2129H37.9118C40.2693 11.2129 42.1668 11.5004 42.1668 15.0462C42.1668 19.1671 40.2693 18.8796 37.9118 18.8796H8.0885C5.731 18.8796 3.8335 19.1671 3.8335 15.0462Z" stroke="#0055A4" stroke-width="4" />
              <path d="M18.7065 26.834V33.6381" stroke="#0055A4" stroke-width="4" stroke-linecap="round" />
              <path d="M27.5234 26.834V33.6381" stroke="#0055A4" stroke-width="4" stroke-linecap="round" />
              <path d="M6.7085 19.166L9.411 35.726C10.0243 39.4443 11.5002 42.166 16.9818 42.166H28.5393C34.5002 42.166 35.3818 39.5593 36.0718 35.956L39.2918 19.166" stroke="#0055A4" stroke-width="4" stroke-linecap="round" />
            </svg>

            <h6 className="md:p-3 p-2  text-xl font-main  font-sizeHundred">Quantity of Stocks</h6>
            <p className="w-60 text-center text-lg font-main  text-darkGrey font-fiveHundred">
              Helping you understand the quantity to be bought for each stock
            </p>
          </div>
          <div className="flex flex-col justify-center items-center lg:justify-start h-64 md:h-72 w-96  ">
            <svg className="w-12 md:w-16" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.9997 9.56C17.0822 9.56 18.7797 7.8625 18.7797 5.78C18.7797 3.6975 17.0822 2 14.9997 2C12.9172 2 11.2197 3.6975 11.2197 5.78C11.2197 7.8625 12.9172 9.56 14.9997 9.56Z" stroke="#0055A4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M5.88254 26.4995C7.96504 26.4995 9.66254 24.802 9.66254 22.7195C9.66254 20.637 7.96504 18.9395 5.88254 18.9395C3.80004 18.9395 2.10254 20.637 2.10254 22.7195C2.10254 24.802 3.78254 26.4995 5.88254 26.4995Z" stroke="#0055A4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M24.1174 26.4995C26.1999 26.4995 27.8974 24.802 27.8974 22.7195C27.8974 20.637 26.1999 18.9395 24.1174 18.9395C22.0349 18.9395 20.3374 20.637 20.3374 22.7195C20.3374 24.802 22.0349 26.4995 24.1174 26.4995Z" stroke="#0055A4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <h6 className="md:p-3 p-2  text-xl font-main  font-sizeHundred">Adjust Positions</h6>
            <p className=" w-64 text-center text-lg font-main  text-darkGrey font-fiveHundred">
              We will help you adjust the position, like closing or reducing
              stocks positions and adding new postions
            </p>
          </div>
        </div>
        <div className="flex  md:flex-row flex-col items-center my-12 gap-5 justify-center">
          <Button path="/services" text={"Learn More"} className="btn2" icon={<svg className='w-[15px] h-[15px] ml-3' width="9" height="19" viewBox="0 0 9 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.910156 17.4201L7.43016 10.9001C8.20016 10.1301 8.20016 8.87008 7.43016 8.10008L0.910156 1.58008" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>} ></Button>
          <Button path="/signup" text={"Sign Up"} className="btn3 border-2 border-black  md:mt-3"  ></Button>

          </div>
        
      </div>
    </div>
  );
};

export default Services;
