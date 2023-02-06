import React, { useEffect } from "react";
import { Container, Faq } from "../../components";
import SixROI from "../../assets/SixROI.png";
import Bytheendof2030 from "../../assets/Bytheendof2030.png";
import readytoabout from "../../assets/readytoabout.png";
import RetirementPlan from '../../assets/RetirementPlan.png'
import Banner2 from "../../components/Banner2";
import { Button } from "../../utils";
const Services = () => {
  useEffect(() => {
    window.scroll(0, 0)
  })
  // FAQ data
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

  //Container data
  const headingtext = "What";
  const headingHighlight = "we provide?";
  const para = `We are building a portfolio consisting of securities in the U.S. Capital Market. Our
 Passion is to own Stocks that have the potential to get outperforming Return
 on Investments and share the Knowledge with our Clients. If you look at the
 past performance of our strategy like the Businesses of Nvidia, Apple, Tesla,
 TransDigm Group, Microsoft, Alphabet(Google), Amazon, Meta, Master Card,
 Visa, TSMC, ASML, Moody’s etc these Businesses have Created a Fortune for
 its Stakeholders. If you deeply analyze our past Stocks most of them are
 highly engaged in valuable Technology.
 `;

  
  //Container data
  const headingtext2 = "Our ";
  const headingHighlight2 = "Investment Paradigm";
  const para2 = `If you are living in an Emerging Market Economies during 2022, When you find out the livelihood of your great 
  grandfather most of them are Farmers. They worked on farms and plowed their fields and harvested their crops with their own 
  strength. They didn’t have the Technology Advantage & Electricity that we have today, they had to plow their fields with Animals
   by using their own strength. Before The Industrial Revolution the Livelihood of at least 80% of the Peoples in the world were on
    Agricultural fields. The Industrial Revolution was a transition to a Manufacturing Process, now it influences almost every 
    aspect of our Life. Textiles were the Dominant industry in terms of output, capital Investment and employment. The Tata Group
     and Birla Group is a great Example of transitions, they both began building their fortune by starting their Businesses in 
     Textile Industries. Tata Group is still succeeding by making transition with the advancement of the transforming world and 
     Living Standard rather than Birla Group. The journey of Tata from textile to Steel Industries to Taj to Consumer Product to
      Automotive to Tata Consultancy Services (TCS) reflects greater examples on what we can achieve by becoming a part of 
      Technological Companies that are changing the world with the greatest wealth and value creation for both Stakeholders
       and Customers. When you look at the Companies building fortunes for its stakeholders in today’s world it is mainly 
       Technological Companies and those Companies which drive the Technological sectors. Back in the 19th and 20th Century it was
        the Industrial Companies building fortunes for its stakeholders and making John D. Rockefeller and Andrew Carnegie the 
        Wealthiest. Standard Oil and Carnegie Steels was one of the valuable Companies during that period, Standard Oil was grown
         further to the point that the company alone would overtake the U.S. Economy that was the main reason behind the 
         dissolution of Standard Oil to different Companies. Alexander Graham Bell invented the telephone in 1876 and by 1885 his
          company began to build out the Telephone network. Telephones didn’t exist until AT&T built and owned the Telephone network.
           AT&T remained one of the most valuable U.S. companies for decades. Other innovative companies like General Motors which
            created the electric car starter, air bag and the automatic transmission and General Electric which made electric 
            lighting mainstream have played a significant role in shaping the world that we experience today, those 
            companies-maintained dominance for decades. And IBM for producing and selling Computers has maintained Dominance in
             Personal computers for many years. But when you look at most of the valuable companies of History, they are not as 
             valuable now as they were in the past. By analyzing these Fundamentals, we can conclude that it was those companies
              who have the potential to solve current challenges and improve living standard in the current circumstances are one’s 
              which build fortune for its stakeholders. If you look at the performance of our strategy like the Businesses of Nvidia,
               Apple, Tesla, TransDigm Group, Microsoft, Alphabet (Google), Amazon, Meta, Master Card, Visa, TSMC, ASML, Moody’s etc.
                these businesses have created fortune and value for both stakeholders and customers. When you simply analyze how 
                these companies have played a crucial role in every day of our lives over the past 20 years by building value for 
                both stakeholders and customers, they are the ones who build a fortune for our investments. Our investment paradigm 
                is simply to look at how the world looks in 2030, what are the changes that we are going to see in 2030 and invest 
                in companies globally who drive those changes which improve the living standard, solve the challenges and make the 
                world safer. By adopting these Fundamentals, we will have a win-win situation by outperforming Return on Investments.
`;

  return (
    <>

      <Banner2 />


      <Container
        headingfirst={headingtext}
        headingHighlighted={headingHighlight}
        description={para}
      />


      <div className="flex justify-center items-center my-10 lg:mx-[0%] gap-4 md:gap-10 w-[100%] ">
        <img
          className="w-[200px] md:w-[300px] lg:w-[380px]"
          src={SixROI}
          alt="Six times ROI"
        />
        <img
          className="w-[140px] md:w-[300px] lg:w-[380px]"
          src={Bytheendof2030}
          alt="by the end of 2030"
        />
      </div>



      <div className={` w-[80%] flex flex-col  mx-auto  font-main mt-6 `}>
        
        <div className=''>
          <h1 className='font-semibold  text-[35px] md:text-[40px] lg:text-[45px]   '>
           Why
            <span className='text-darkBlue  ml-2 md:ml-4 font-bold'>
              KKS ?
            </span>
          </h1>
        </div>
      
      
        

        <div className='mt-6 '>
          <p className={`lg:text-[20px]`}>
          We are here to not just help you build your fortune, we are here to guide you!
            We start with the stocks, we will provide a list of stocks to buy for you which would be selected from a variety by filtering the best for you!
          Then, we will guide you to buy the stocks in the U.S Capital Market (<a className="text-blue-700" rel="noreferrer" href="https://vestedfinance.com/" target="_blank" >Vested finance</a> and <a className="text-blue-700" href="https://www.indmoney.com/">INDmoney</a>  is our preferred brokerage, you can also use Geojit financial service for buying stocks)
        Then, we will help you decide how much quantity of stocks should you buy?
        Also, we help you with adjusting your position, Our team will tell you when to reduce or close a position in stocks or when to add a new position of stocks!
            
          </p>
        </div>
    </div>
       



      <Container
        headingfirst={headingtext2}
        headingHighlighted={headingHighlight2}
        description={para2}
        readMore
      />
         




      <section className=" flex flex-col lg:flex-row  bg-darkBlue my-6 h-fit w-[100%] ">
        <div className="flex lg:w-[45%]  w-full justify-center  lg:h-full m-0 p-0">
          <img src={readytoabout} alt="team" className="flex lg:object-fill md:mt-10 md:w-[90%] lg:w-full lg:mt-0 md:rounded-3xl lg:rounded-none shadow-lg " />
        </div>
        <div className=" flex flex-col items-center justify-center lg:my-auto text-center lg:text-left md:pl-40 lg:pl-0 p-5 md:w-[80%]  lg:ml-10 lg:block lg:w-[55%] ">
          <h4 className="text-4xl font-bold font-main text-secondary">
            Having any queries?
          </h4>
          <div className="lg:w-[500px]">
            <h6 className="font-normal text-lg md:text-xl text-secondary font-main py-4">
              Send us a message and book your Quota today! Our team will get back to you as soon as possible to meet your expectations!

            </h6>

            <h6 className="font-normal text-lg text-secondary font-main py-4">
              Got some questions regarding services or SIP/Lump sum investments?
              Click the button below!
            </h6>
          </div>
          <Button text='Send us a Message'
            path="/contact"
            icon={<svg
              className="ml-2"
              width="7"
              height="15"
              viewBox="0 0 9 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.910156 17.4201L7.43016 10.9001C8.20016 10.1301 8.20016 8.87008 7.43016 8.10008L0.910156 1.58008"
                stroke="#0055A4"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>}
            className='btn1'
          />
        </div>
      </section>

      <section className=" flex items-center flex-col lg:flex-row lg:gap-10 mt-20 mb-10">
        <div className="lg:w-[60%] flex justify-center  lg:justify-end items-center">
          <div className="lg:w-[70%] text-center lg:text-left font-main flex flex-col justify-center items-center lg:block  w-[80%]  ">
            <h3 className="font-semibold text-black text-4xl md:text-5xl">Plan Your <span className="text-darkBlue font-bold">Retirement</span></h3>
            <p className="font-normal text-xl md:text-2xl my-10">Worried about your retirement already? Leave the worry to us...
              Get a personalized plan to enjoy your life like never before</p>

            <div className="lg:flex hidden">
              <Button
                text="Learn More"
                icon={<svg className='w-[15px] h-[15px] ml-3' width="9" height="19" viewBox="0 0 9 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.910156 17.4201L7.43016 10.9001C8.20016 10.1301 8.20016 8.87008 7.43016 8.10008L0.910156 1.58008" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>}
                path="/personal-plan"
                className='btn2 '
              />
            </div>


          </div>
        </div>
        <div className="lg:w-[40%] flex justify-center w-[100%] lg:justify-start items-center md:py-16">
          {/* <img src={RetirementPlan} alt="" className="w-5/6 md:w-1/2 " /> */}
          <iframe className="rounded-2xl m-5"  width="560" height="315" src="https://www.youtube.com/embed/zGn-7hYB5j4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen="true" ></iframe>
        </div>
        <div className="lg:hidden flex">
          <Button
            text="Learn More"
            icon={<svg className='w-[15px] h-[15px] ml-3' width="9" height="19" viewBox="0 0 9 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.910156 17.4201L7.43016 10.9001C8.20016 10.1301 8.20016 8.87008 7.43016 8.10008L0.910156 1.58008" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>}
            path="/personal-plan"
            className='btn2'
          />
        </div>

      </section>



      <Faq data={data} />
      
      </>
  );
};

export default Services;
