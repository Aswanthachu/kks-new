import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { Button } from "../utils";
import { useLocation } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";

import kkslogo from "../assets/kkslogo3.png"

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleClick = () => setShowMobileMenu(!showMobileMenu);
  const scrollPosition = useScrollPosition();
  const location = useLocation()
  const currentURL = window.location.pathname;

  

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };
  const pathmatchroute = (route) => {
    if (route === location.pathname) {
      return true
    }
  }

  return (
    <>
      <header
        className={` ${classNames(
          scrollPosition > 0 ? "shadow-md bg-white " : "shadow-none"
        )} sticky   top-0 z-50 container-full ${currentURL === "/retirement-plan" ? "bg-transparent" : "bg-white"
          }`}
      >
        <div
          className={`container mx-auto flex justify-between items-center border-b-darkBlue py-[10px]  ${currentURL === "/retirement-plan" ? "bg-transparent" : "bg-white"
            } realative`}
        >
          <Link to={"/"}>

            <div className="flex items-center space-x-0">
              {" "}
              {/*
              <h1 className=" text-darkBlue text-[25px] lg:text-[30px] font-normal">
                <span className="text-darkBlue font-bold "> KKS</span> Capitals
              </h1>
              */}
              {/* {scrollPosition > 0 ?  <div className="space-x-2 items-center hidden md:flex">
                <span className=" font-bold text-darkBlue md:text-3xl">
                  KKS
                </span>
                <span className="font-semibold  text-3xl">
                  Capitals
                </span>
              </div> :  }
               */}
              <img src={kkslogo} alt="kks" className="w-40 md:w-64 h-18  md:block" />
              {/* <h1 className=" text-darkBlue text-[25px] lg:text-[30px] font-normal md:hidden">
                <span className="text-darkBlue font-bolonMouseEnter={({ target }) => target.click()}d "> KKS</span> Capitals
              </h1> */}
            </div>
          </Link>

          <div className="px-[20px]">
            <ul className="hidden lg:flex space-x-12 text-xl text-darkBlue font-medium">
              <li className={`nav-link  rounded ${pathmatchroute('/services') && 'text-[#a9a9f5]'}  `}>
                <Link to={"/services"}>Services</Link>
              </li>
              <li className={`nav-link  rounded ${pathmatchroute('/pricing') && 'text-[#a9a9f5]'}  `}>
                <Link to={"/pricing"}>Pricing</Link>
              </li>
            
              <li className={`nav-link  rounded ${pathmatchroute('/retirement-plan') && 'text-[#a9a9f5]'}  `}>
                <Link to={"/retirement-plan"}>Planning</Link>
              </li>
              <li className={`nav-link  rounded ${pathmatchroute('/sip') && 'text-[#a9a9f5]'}  `}>
                <Link to={"/sip"}>Calculator</Link>
              </li>
                
              <li  className="nav-link rounded"  >
                <Menu as="div"    className="relative inline-block text-left">
                  <div className="flex justify-center items-center">
                    <Menu.Button onMouseEnter={({ target }) => target.click()} className=" inline-flex w-full justify-center items-center text-xl text-darkBlue font-medium"  >
                      More
                      <svg
                        class="w-5 h-5 ml-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  // className="rounded-2xl"
                  >
                    <Menu.Items className="  absolute right-[-40px] z-10 mt-2 min-w-[250px] origin-top-right bg-[#fafafa] rounded-xl">
                      <div className="shadow-2xl rounded-xl">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/about"
                              className="flex border-b border-darkBlue p-5 w-full text-lg text-darkBlue"
                            >
                              About
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/become-a-partner"
                              className="flex border-b border-darkBlue px-4 py-2 w-full text-lg"
                            >
                              Become a Partner
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/benefits-of-us-stocks"
                              className="flex border-b border-darkBlue px-4 py-2 w-full text-lg"
                            >
                              Benefits of Investing in US Stocks
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/contact"
                              className="flex  border-darkBlue px-4 py-2 w-full text-lg"
                            >
                              Contact Us
                            </Link>
                          )}
                        </Menu.Item>

                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </li>

            </ul>
          </div>

          <Button
            text="Login"
            path="/login"
            className="  border-darkBlue border-[1px] text-darkBlue  max-w-fit font-medium text-lg min-w-[100px]  px-10 py-[8px]    rounded-lg  hover:shadow-lg   items-center  transition ease-in-out duration-100 justify-center hidden lg:block  "
          />

          <button
            onClick={handleClick}
            type="button"
            className=" flex  lg:hidden justify-end"
          >
            {showMobileMenu ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.3337 24.3346L1.66699 1.66797M24.3337 1.66797L1.66699 24.3346"
                  stroke="#0055A4"
                  stroke-width="3.83333"
                  stroke-linecap="round"
                />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 34 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="2"
                  y1="-2"
                  x2="32"
                  y2="-2"
                  transform="matrix(1 0 0 -1 0 24)"
                  stroke="#0055A4"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <line
                  x1="2"
                  y1="-2"
                  x2="32"
                  y2="-2"
                  transform="matrix(1 0 0 -1 0 12)"
                  stroke="#0055A4"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <line
                  x1="2"
                  y1="-2"
                  x2="32"
                  y2="-2"
                  transform="matrix(1 0 0 -1 0 0)"
                  stroke="#0055A4"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      <div
        className={`top-0 left-0 w-screen  text-white fixed h-full overflow-scroll scr z-40  transition-all ease-in-out duration-700 ${showMobileMenu ? "translate-y-[50px] " : "translate-y-[-100%]"
          }`}
      >
        <div className="bg-white h-fit  p-6 mb-5 lg:hidden ">
          <div
            onClick={() => setShowMobileMenu(false)}
            className="text-darkBlue text-xl font-semibold ml-4 leading-loose cursor-pointer mt-3  "
          >
            <ul>
              <Link to={"/"}>
                <li className={`hover:border-b-2 ${pathmatchroute('/') && 'text-[#a9a9f5]'}`}>
                  {" "}
                  Home
                  <hr />{" "}
                </li>
              </Link>
             
              <Link to={"/about"}>
                <li className={`hover:border-b-2 ${pathmatchroute('/about') && 'text-[#a9a9f5]'}`}>
                  {" "}
                  About <hr />{" "}
                </li>
              </Link>
              <Link to={"/services"}>
                {" "}
                <li className={`hover:border-b-2 ${pathmatchroute('/services') && 'text-[#a9a9f5]'}`}>
                  {" "}
                  Services <hr />
                </li>
              </Link>
              <Link to={"/pricing"}>
                <li className={`hover:border-b-2 ${pathmatchroute('/pricing') && 'text-[#a9a9f5]'}`}>
                  {" "}
                  Pricing
                  <hr />{" "}
                </li>
              </Link>
              
              <Link to={"/become-a-partner"}>
                {" "}
                <li className={`hover:border-b-2 ${pathmatchroute('/become-a-partner') && 'text-[#a9a9f5]'}`}>
                  {" "}
                  Become a partner<hr />
                </li>
              </Link>
              <Link to={"/sip"}>
                {" "}
                <li className={`hover:border-b-2 ${pathmatchroute('/sip') && 'text-[#a9a9f5]'}`}>
                  {" "}
                  calculator<hr />
                </li>
              </Link>
           
              <Link to={"/benefits-of-us-stocks"}>
                {" "}
                <li className={`hover:border-b-2 ${pathmatchroute('/benefits-of-us-stocks') && 'text-[#a9a9f5]'}`}>
                  {" "}
                  Benefits of investing in US stocks<hr />
                </li>
              </Link>
              <Link to={"/retirement-plan"}>
                {" "}
                <li className={`hover:border-b-2 ${pathmatchroute('/retirement-plan') && 'text-[#a9a9f5]'}`}>
                  {" "}
                  Financial planning<hr />
                </li>
              </Link>
              <Link to={"/contact"}>
                {" "}
                <li className={`hover:border-b-2 ${pathmatchroute('/contact') && 'text-[#a9a9f5]'}`}>
                  {" "}
                  Contact <hr />
                </li>
              </Link>
            </ul>
            <Button
              text="Login"
              path="/login"
              className=" bg-darkBlue  text-white max-w-fit font-normal text-lg min-w-[100px] flex mt-5  px-3 py-[2px]  rounded-lg  hover:scale-[1.02]  items-center  transition ease-in-out duration-100 justify-center  lg:hidden "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
