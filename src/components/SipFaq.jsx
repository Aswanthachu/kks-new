import React, { useState } from "react";
import { Link } from "react-router-dom";
const Faq = ({ blue }) => {
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
        console.log(selected);
    };

    const data = [
        {
            question: "What is an SIP?",
            answer:
                `SIPs are a way to invest a fixed sum of money periodically (quarterly or monthly). It is a
        convenient way to invest as you do not have to make a lump sum investment, and can
        start with instalments as low as ₹2500 on our system.`,
        },
        {
            question: "What is an SIP Calculator?",
            answer:
                `A Systematic Investment Plan (SIP) Calculator is a smart and easy
      tool that helps you calculate the returns you will earn on your SIP
      investments. Using this, you can get an estimate on how much you
      need to invest every month in order to reach your desired goal. It’s
      a quick and effective tool for achieving your financial goals. You can
      easily calculate the estimated returns on your investment by
      entering just a few basic details.`
        },
        {
            question: "How much can I invest in an SIP?",
            answer:
                `Although there is no upper limit to the amount you can invest in a
                SIP, the minimum amount that you can invest is INR 2500 per
                month in our system.`,
        },
        {
            question: "What is the maximum tenure of an SIP?",
            answer:
                `There is no maximum tenure. You can invest as long as you want to
            with SIPs. However, the minimum tenure is 3 years.`
        },
     
        {
            question: "Can I renew an SIP?",
            answer:
                `Yes, you can easily renew an SIP automatically. Companies also
                give you the option to cancel the auto-renew feature.`
        },
        {
            question: "Can I pause my investments in a SIP?",
            answer:
                `Yes, They also provide you with the option of pausing your SIP
                investments for a specified period of time.`
        },
    ];

    return (
        <section className={`${blue ? "bg-darkBlue" : ""}`}>
            <div className="flex flex-col justify-center items-center mb-20 lg:flex-row lg:min-h-[400px] gap-10 lg:gap-0">
                <div className={`flex flex-col justify-center items-start w-[350px] md:w-[600px] mx-5 lg:max-w-[35%] ${blue ? 'text-secondary' : 'text-black'} `}>
                    <h2 className="text-[30px] md:text-[40px] font-sans font-semibold">
                        FAQ
                    </h2>
                    <p className="text-[20px]  lg:max-w-[530px]">
                        Here are the answers to the questions that may be wandering in your
                        mind. Didn't find it?{" "}
                        <Link to={"/contact"} className={`${blue ? 'text-secondary' : 'text-darkBlue'}`}>
                            <u>Send us a message!</u>
                        </Link>{" "}
                    </p>
                </div>
                <div className={`lg:w-1/2 ${blue ? 'text-secondary' : 'text-darkGrey '}  `}>
                    <div className="flex flex-col justify-center items-center  font-sans text-[20px] md:text-[25px] overflow-y-hidden ">
                        <div className="w-[85%] md:min-w-[600px] lg:min-w-[470px] lg:flex lg:flex-col lg:w-[90%]">
                            {data.map((item, i) => (
                                <div key={i} className="flex flex-col   mt-[5px] py-5 px-5">
                                    <div
                                        className=" font-medium flex justify-between items-center cursor-pointer"
                                        onClick={() => toggle(i)}
                                    >
                                        <h2 className="font-main">{item.question}</h2>
                                        <span>
                                            {selected === i ? (
                                                <svg
                                                    width="26"
                                                    height="16"
                                                    viewBox="0 0 26 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2.4403 12.9482L11.1336 3.43991C12.1603 2.31699 13.8403 2.31699 14.867 3.43991L23.5603 12.9482"
                                                        stroke={`${blue ? '#F8F8F8' : '#292D32'}`}
                                                        stroke-width="4.12686"
                                                        stroke-miterlimit="10"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            ) : (
                                                <svg
                                                    width="26"
                                                    height="15"
                                                    viewBox="0 0 26 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M23.5599 2.05176L14.8666 11.5601C13.8399 12.683 12.1599 12.683 11.1333 11.5601L2.43994 2.05176"
                                                        stroke={`${blue ? '#F8F8F8' : '#292D32'}`}
                                                        stroke-width="4.06293"
                                                        stroke-miterlimit="10"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            )}
                                        </span>
                                    </div>
                                    <div
                                        className={
                                            selected === i
                                                ? "content show h-auto max-h-fit mt-5  "
                                                : "content font-light max-h-0 overflow-hidden "
                                        }
                                    >
                                        <hr />
                                        <div className="my-5 ">
                                            <p className="font-main  ">{item.answer}</p>
                                            {item.link && (
                                                <Link
                                                    to={item.link}
                                                    className="text-darkBlue text-[25px]"
                                                >
                                                    <u>Message us</u>
                                                </Link>
                                            )}
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;