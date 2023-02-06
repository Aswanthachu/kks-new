import React, { useState, useRef ,useEffect } from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
// import { Button, Modal } from "flowbite-react";
// import { Button, Modal } from "flowbite-react";

import { ResponsiveModal } from "../../components";


const Contact = () => {
  useEffect(()=>{
    window.scroll(0,0)
  })
  const [formData, setFormData] = useState({
    from_name_f: "",
    from_name_l: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const [open, setOpen] = useState(false);
  const form = useRef();

  const { from_name_f, from_name_l, user_email, subject, message } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const Service_id = "service_x7k24nr";
    const Template_id = "template_tjbz58p";
    const Public_Key = "YP5JhtpwLV22YXZZ4";


    emailjs.sendForm(
      Service_id,
      Template_id,
      form.current,
      Public_Key,
    )
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          setOpen(true);
          setFormData(prevState => ({
            ...prevState,
            from_name_f: "",
            from_name_l: "",
            user_email: "",
            subject: "",
            message: ""
          }))
        }
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
  <>
      <div className="flex flex-col justify-center items-center gap-10 mt-16 md:mt-0">
        <div className="h-[100px] md:h-[200px] flex justify-center items-center text-[45px] md:text-[65px] text-center font-main text-darkBlue font-medium">
          <h2 className="mt-10 md:mt-40">
            Let’s Build your
            <br />
            <span className="font-semibold">fortune!</span>
          </h2>
        </div>
        <div className="flex   md:justify-evenly text-center gap-10 md:gap-5 mt-10 md:mt-32   md:w-[60%] p-4">
          <div className="flex flex-col justify-start items-center w-1/2">
            <svg className="w-10 md:w-full"
              width="46"
              height="52"
              viewBox="0 0 46 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.9997 29.3373C27.0204 29.3373 30.2797 26.078 30.2797 22.0573C30.2797 18.0367 27.0204 14.7773 22.9997 14.7773C18.9791 14.7773 15.7197 18.0367 15.7197 22.0573C15.7197 26.078 18.9791 29.3373 22.9997 29.3373Z"
                stroke="#0055A4"
                stroke-width="4"
              />
              <path
                d="M3.44631 17.8094C8.04298 -2.39731 37.9796 -2.37398 42.553 17.8327C45.2363 29.686 37.863 39.7194 31.3996 45.926C26.7096 50.4527 19.2896 50.4527 14.5763 45.926C8.13631 39.7194 0.76298 29.6627 3.44631 17.8094Z"
                stroke="#0055A4"
                stroke-width="4"
              />
            </svg>

            <h3 className="font-semibold text-xl font-main  text-black">
              Location
            </h3>
            <p>
             22, 22nd Floor, WTC Bangalore, Brigade Gateway, Rajajinager Extension, Malleswaram, Bangalore, Karnataka 560055
            </p>
          </div>
          <div className="flex flex-col justify-start items-center w-1/2">
            <svg
            className="w-10 md:w-full"
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.2637 42.7694C51.2637 43.6094 51.077 44.4727 50.6803 45.3127C50.2837 46.1527 49.7703 46.946 49.0937 47.6927C47.9503 48.9527 46.6903 49.8627 45.267 50.446C43.867 51.0294 42.3503 51.3327 40.717 51.3327C38.337 51.3327 35.7937 50.7727 33.1103 49.6294C30.427 48.486 27.7437 46.946 25.0837 45.0094C22.4003 43.0494 19.857 40.8794 17.4303 38.476C15.027 36.0494 12.857 33.506 10.9203 30.846C9.00699 28.186 7.46699 25.526 6.34699 22.8894C5.22699 20.2294 4.66699 17.686 4.66699 15.2593C4.66699 13.6727 4.94699 12.156 5.50699 10.756C6.06699 9.33268 6.95366 8.02602 8.19033 6.85935C9.68366 5.38935 11.317 4.66602 13.0437 4.66602C13.697 4.66602 14.3503 4.80602 14.9337 5.08602C15.5403 5.36602 16.077 5.78602 16.497 6.39268L21.9103 14.0227C22.3303 14.606 22.6337 15.1427 22.8437 15.656C23.0537 16.146 23.1703 16.636 23.1703 17.0794C23.1703 17.6394 23.007 18.1993 22.6803 18.736C22.377 19.2727 21.9337 19.8327 21.3737 20.3927L19.6003 22.236C19.3437 22.4927 19.227 22.796 19.227 23.1694C19.227 23.356 19.2503 23.5193 19.297 23.706C19.367 23.8927 19.437 24.0327 19.4837 24.1727C19.9037 24.9427 20.627 25.946 21.6537 27.1594C22.7037 28.3727 23.8237 29.6094 25.037 30.846C26.297 32.0827 27.5103 33.226 28.747 34.276C29.9603 35.3027 30.9637 36.0027 31.757 36.4227C31.8737 36.4694 32.0137 36.5394 32.177 36.6094C32.3637 36.6794 32.5503 36.7027 32.7603 36.7027C33.157 36.7027 33.4603 36.5627 33.717 36.306L35.4903 34.556C36.0737 33.9727 36.6337 33.5294 37.1703 33.2494C37.707 32.9227 38.2437 32.7594 38.827 32.7594C39.2703 32.7594 39.737 32.8527 40.2503 33.0627C40.7637 33.2727 41.3003 33.576 41.8837 33.9727L49.607 39.456C50.2137 39.876 50.6337 40.366 50.8903 40.9493C51.1237 41.5327 51.2637 42.116 51.2637 42.7694Z"
                stroke="#0055A4"
                stroke-width="4"
                stroke-miterlimit="10"
              />
            </svg>

            <h3 className="font-semibold text-xl font-main text-black">
              Contact
            </h3>
            <p className="font-main font-threehundred" >
              <Link to='javascript:void(0)' onClick={(e) => {
                e.preventDefault();
                window.location = "mailto:support@kks.com?subject=Enquiry related to site"
              }} > support@kks.com </Link> <br />
              <span className="mt-2" > <Link to='javascript:void(0)' onClick={(e) => {
                e.preventDefault()
                window.location = "tel:+91 9035808904"
              }}  >+91 9035808904</Link> </span>
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full mt-5 mb-14">
          <form ref={form} onSubmit={onSubmit}
            className="flex flex-col justify-center w-[95%] lg:w-[60%] md:w-[75%] border border-darkBlue rounded-xl gap-1 p-3 md:p-9 lg:p-16  text-xl "

          >
            <div className="flex flex-col lg:flex-row justify-between gap-4">
              <div className="flex-col flex w-full ">
                {" "}
                <label
                  className="text-lg text-black font-semibold"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="rounded-lg border border-black  p-3"
                  placeholder="Your first name here..."
                  type="text"
                  name="from_name_f"
                  onChange={onChange}
                  value={from_name_f}
                  required
                />
              </div>
              <div className="flex-col flex w-full  ">
                {" "}
                <label
                  className="text-lg text-black font-semibold"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="rounded-lg border border-black  p-3"
                  placeholder="Your last name here..."
                  type="text"
                  name="from_name_l"
                  onChange={onChange}
                  value={from_name_l}
                  required
                />
              </div>
            </div>

            <label className="text-lg text-black font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="rounded-lg border border-black  p-3"
              placeholder="example@gmail.com"
              type="email"
              name="user_email"
              onChange={onChange}
              required
              value={user_email}
            />
            <label className="text-lg text-black font-semibold" htmlFor="">
              Subject
            </label>
            <input
              className="rounded-lg border border-black  p-3"
              placeholder="Enter your subject here..."
              type="text"
              name="subject"
              onChange={onChange}
              required
              value={subject}
            />
            <label className="text-lg text-black font-semibold" htmlFor="">
              Message
            </label>
            <textarea
              className="rounded-lg border border-black  p-3"
              placeholder="Enter your message here"
              name="message"
              id="message"
              cols="30"
              rows="5"
              onChange={onChange}
              value={message}
            ></textarea>
            <button
              data-modal-target="popup-modal" data-modal-toggle="popup-modal"
              className="bg-darkBlue rounded-lg my-4 p-3 text-white"
              type="submit"
            >
              Message
            </button>
          </form>
        </div>
      </div>

      {/* model */}
      <ResponsiveModal open={open} setOpen={setOpen} />
      
     </>
  );
};

export default Contact;
