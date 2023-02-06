import React, { useEffect } from "react";
import Iphone from "../../assets/Iphone.png";
import { Button } from "../../utils";


const Auth = ({ auth }) => {
  useEffect(() => {
    window.scroll(0, 0)
  })
  return (
    <>
      <section className="flex flex-col lg:flex-row md:mx-32 mt-16 mx-10 lg:ml-[10%]">
        <div className=" lg:w-[60%] items-center">
          <div className=" flex flex-col lg:p-[4%] ">
            <h1 className="text-5xl lg:text-6xl font-sans font-semibold mb-5">
              {auth === "signup" ? "Sign Up" : "Login"}
            </h1>
            <h6 className="font-main font-normal text-base md:text-2xl lg:text-3xl mb-2">
              It’s time to build your fortune!
              <br /> And let us help you!
            </h6>
            {/* {auth === "signup" ? (
            <p className="font-main font-normal text-base md:text-xl text-darkGrey lg:text-2xl  ">
              Already have an Account?{" "}
              <Link
                className="underline cursor-pointer text-darkBlue"
                to={"/login"}
              >
                Log In
              </Link>{" "}
            </p>
          ) : (
            <p className="font-main font-normal text-darkGrey text-base md:text-xl lg:text-2xl mb-4">
              Don’t have an Account?{" "}
              <Link className="underline cursor-pointer text-darkBlue" to={"/signup"}>
                Sign Up
              </Link>{" "}
            </p>
          )}
          */}
            <form className="flex flex-col  items-center lg:w-[85%] lg:items-start mt-8 md:w-[95%] w-full">
              <div className="w-full  flex flex-col gap-2">
                {auth === 'signup' && <><label
                  className="text-xl text-black font-semibold"
                  htmlFor="name"
                >
                  Name
                </label>
                  <input
                    className=" rounded-lg border border-black  p-3"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name here..."

                  />
                </>
                }
                <label
                  className="text-xl text-black font-semibold"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="rounded-lg border border-black  p-3"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email here..."

                />
                <label
                  className="text-xl text-black font-semibold"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="rounded-lg border border-black  p-3"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password here..."
                />
                <Button
                  text={auth === "signup" ? "Sign Up" : "Login"}
                  className=" font-semibold min-w-[200px]  py-4 px-8 rounded-xl mt-3  flex items-center justify-center text-white  w-full bg-gray-400 cursor-not-allowed  border border-black"
                />
            <p className="text-danger mt-4 md:mt-3 text-sm " > * We are not accepting any new users as of now !</p>

                {/*
                <Button
                  className="font-semibold min-w-[200px]   py-4 px-8 rounded-3xl mt-3 hover:scale-[1.02] flex items-center justify-center text-darkGrey  transition ease-in-out duration-200 w-full bg-white border-2 border-black"
                  text="Log In with Google"
                  logo={
                    <svg
                      className="mr-3"
                      width="25"
                      height="25"
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="36.4444"
                        height="36.4444"
                        transform="translate(0.629883 0.777771)"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M35.6165 19.3969C35.6165 18.1586 35.5054 16.968 35.299 15.825H18.8521V22.5799H28.2503C27.8455 24.7628 26.6151 26.6123 24.7656 27.8506V32.2322H30.4094C33.7114 29.1921 35.6165 24.7152 35.6165 19.3969Z"
                        fill="#4285F4"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.8516 36.4627C23.5666 36.4627 27.5196 34.899 30.4089 32.2319L24.7652 27.8503C23.2015 28.898 21.2012 29.5172 18.8516 29.5172C14.3033 29.5172 10.4535 26.4453 9.08031 22.3177H3.24609V26.8422C6.11954 32.5494 12.0252 36.4627 18.8516 36.4627Z"
                        fill="#34A853"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.0808 22.318C8.73154 21.2702 8.5331 20.151 8.5331 19.0001C8.5331 17.8491 8.73154 16.7299 9.0808 15.6821V11.1576H3.24658C2.06387 13.5151 1.38916 16.1822 1.38916 19.0001C1.38916 21.8179 2.06387 24.485 3.24658 26.8425L9.0808 22.318Z"
                        fill="#FBBC05"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.8516 8.48254C21.4155 8.48254 23.7174 9.36363 25.5272 11.0941L30.5359 6.08536C27.5117 3.26747 23.5587 1.53705 18.8516 1.53705C12.0252 1.53705 6.11954 5.45034 3.24609 11.1576L9.08031 15.682C10.4535 11.5544 14.3033 8.48254 18.8516 8.48254Z"
                        fill="#EA4335"
                      />
                    </svg>
                  }
                  wfull
                />
                <Button
                  className="font-semibold min-w-[200px]  py-4 px-8 rounded-3xl mt-3 hover:scale-[1.02] flex items-center justify-center w-full 
                bg-[#1877F2]  transition ease-in-out duration-200 text-white border-2 border-black"
                  text="Log In with Facebook"
                  logo={
                    <svg
                      className="mr-3"
                      width="25"
                      height="25"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="32.25"
                        height="32.25"
                        transform="translate(0.796387 0.875)"
                        fill="#1877F2"
                      />
                      <path
                        d="M32.3745 17.0939C32.3745 8.55935 25.4559 1.64076 16.9214 1.64076C8.38686 1.64076 1.46826 8.55935 1.46826 17.0939C1.46826 24.807 7.11925 31.2 14.5068 32.3593V21.5608H10.5832V17.0939H14.5068V13.6894C14.5068 9.81643 16.8139 7.67714 20.3437 7.67714C22.0344 7.67714 23.8029 7.97896 23.8029 7.97896V11.7819H21.8543C19.9346 11.7819 19.3359 12.9731 19.3359 14.1951V17.0939H23.6218L22.9366 21.5608H19.3359V32.3593C26.7235 31.2 32.3745 24.807 32.3745 17.0939Z"
                        fill="white"
                      />
                    </svg>
                  }
                />
                <Button
                  className='font-semibold min-w-[200px]  py-4 px-8 rounded-3xl mt-3 hover:scale-[1.02] flex items-center justify-center text-white  transition ease-in-out duration-200 border-2 border-black w-full bg-[#000000]'
                  text="Log In with Apple"
                  logo={
                    <svg
                      className="mr-3"
                      width="25"
                      height="25"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="30.806"
                        height="30.806"
                        transform="translate(0.970703 0.597015)"
                        fill="black"
                      />
                      <path
                        d="M28.2865 24.2457C27.8401 25.2771 27.3116 26.2265 26.6993 27.0994C25.8647 28.2894 25.1813 29.1131 24.6547 29.5705C23.8383 30.3213 22.9636 30.7058 22.0269 30.7277C21.3545 30.7277 20.5435 30.5363 19.5996 30.1482C18.6525 29.7618 17.7822 29.5705 16.9864 29.5705C16.1518 29.5705 15.2566 29.7618 14.2992 30.1482C13.3403 30.5363 12.5678 30.7386 11.9772 30.7586C11.079 30.7969 10.1837 30.4015 9.29001 29.5705C8.71963 29.073 8.0062 28.2201 7.15153 27.012C6.23454 25.7218 5.48065 24.2256 4.89004 22.52C4.25751 20.6776 3.94043 18.8936 3.94043 17.1664C3.94043 15.1879 4.36794 13.4815 5.22425 12.0515C5.89723 10.9029 6.79253 9.99684 7.91307 9.3317C9.03362 8.66655 10.2444 8.3276 11.5482 8.30592C12.2617 8.30592 13.1972 8.5266 14.3599 8.96031C15.5192 9.39548 16.2636 9.61616 16.59 9.61616C16.834 9.61616 17.661 9.35812 19.0629 8.84368C20.3886 8.3666 21.5075 8.16906 22.4242 8.24687C24.908 8.44733 26.774 9.42646 28.015 11.1905C25.7936 12.5364 24.6948 14.4216 24.7166 16.84C24.7367 18.7237 25.42 20.2913 26.7631 21.5359C27.3717 22.1136 28.0515 22.56 28.8077 22.8771C28.6437 23.3528 28.4706 23.8083 28.2865 24.2457ZM22.59 1.82942C22.59 3.30587 22.0506 4.68443 20.9754 5.96042C19.6779 7.47731 18.1086 8.35384 16.4067 8.21553C16.385 8.0384 16.3724 7.85198 16.3724 7.65608C16.3724 6.23868 16.9895 4.72179 18.0852 3.48152C18.6323 2.85356 19.3281 2.33141 20.1718 1.91488C21.0137 1.50457 21.81 1.27766 22.559 1.2388C22.5809 1.43618 22.59 1.63357 22.59 1.8294V1.82942Z"
                        fill="white"
                      />
                    </svg>
                  }
                /> */}
              </div>
            </form>
          </div>
        </div>
        <div className=" mt-26 hidden  lg:flex justify-center lg:w-[40%]]">
          <img className="w-[350px] h-5/6 ml-5" src={Iphone} alt="i-phone" />
        </div>
      </section>
    </>
  );
};

export default Auth;
