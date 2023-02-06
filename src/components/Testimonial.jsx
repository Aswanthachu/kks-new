import React, { useState } from "react";
import avatar from "../assets/avatar.jpg";
const Testimonial = () => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const Data = [
    {
      name: " Thasleem Muhammed",
      occupation: "Assistant Professor, Kannur.",
      feedback:
        "it's my pleasure disclosing here of having a healthy relationship with KKS Team over my financial management. My financial mentor Mr. Abdul Jaleel is an impeccable and diligent entrepreneur. As I am a beginner who knows nothing, he treats me well and makes me understand everything very clearly. He always insists for being a persevering, honest and straigtghtforward of entrepreneurship. Being a business partner of Mr. Jaleel is not just my pleasure, but a learning experience for me.",
    },
    {
      name: "Shameer",
      occupation: "Private Gas Agency Business owner, Cochin.",
      feedback:
        "I have been financially connected with Mr. Abdul Jaleel & KKS Team for a few years. I Trust them so much.",
    },
    {
      name: " Ansar",
      occupation: "Fantasy Home Appliances Business owner, Cochin",
      feedback: `I have been in a Financial relationship with Mr. Abdul Jaleel & KKS Capitals for the past few years.They 
      Clarified my doubts Straightly & I gained income on my investments.`,
    },
    {
      name: "Muhammed Adhil",
      occupation: "TCS Employee, Cochin",
      feedback:
        "I invested some amount of money through KKS Capitals in a more than one year. And monthly i earned some amount of money and increase the money level and more and more income earned.",
    },
    {
      name: "Muhammad Arshad K N",
      occupation: "MBA Student, Cochin",
      feedback:
        "Thankyou, Jaleel & KKS Capitals for keeping investment short,simple and full of sensible approach. He is ethical investor and I recommend his services.",
    },
    {
      name: "Sharafudheen k",
      occupation: "Shine Paper Products, Ponmundam Tirur",
      feedback:
        "It was my first experience with Mr. ABDUL Jaleel and KKS team I got many confusion when l am investing in this in but Mr. Abdul Jaleel  & KKS team always there for me for all my confusion at any time....  now am very confident about them and I can even suggested them for any of my friends and family",
    },
    {
      name: "Khaise K K",
      occupation: "HPCL Oil Refinery Employee, Bengaluru",
      feedback:
        "I have been associated with this KKS team for last couple of years for my assest management and consultation. with the help of this team i get a great knowledge about financial independency. It was a real eye opener for me. Mr. Abdul jaleel and KKS team   has been in this field for a decade and i am very trustfull  for them.",
    },
    {
      name: "Fahim Faaiz",
      occupation: "Architect , Cochin",
      feedback:
        "I 'hv been having a healthy relationship with KKS Capitals over my fund managements. Mr.AbdulJaleel has been a great mentor for me on my finance management. As a starter, I was doubtful about everything. But KKS Capitals helps me with my every queries and suggests the best ideas. My relationship with KKS Capitals has been very enlightening and fruitful for me personally and economically.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === Data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (dataIndex) => {
    setCurrentIndex(dataIndex);
  };

  return (
    <div className="max-w-[1400px] min-h-[620px] max-h-[1200px] w-full m-auto mt-20 py-8 mb-10 px-4 relative group">
      <div className="w-full h-full flex flex-col justify-center rounded-2xl bg-center bg-cover duration-500 ">
        <div className="text-center font-sans text-4xl md:text-6xl text-black font-bold ">
          <h3 className="">They are happy,</h3>
          <h3 className="text-darkBlue mt-2 ">So will be you!</h3>
        </div>

        <div className="flex justify-center mt-16 min-h-72 md:min-h-64 lg:min-h-40">
          <h4 className="text-center w-2/3 md:w-1/2 text-lg md:text-2xl font-medium text-black">
            {isReadMore && Data[currentIndex].feedback.length > 200
              ? Data[currentIndex].feedback.slice(0, 200)
              : Data[currentIndex].feedback}
            {Data[currentIndex].feedback.length > 200 && (
              <span
                onClick={toggleReadMore}
                className="text-darkBlue cursor-pointer font-semibold"
              >
                {isReadMore ? " Read more" : " Show less"}
              </span>
            )}
          </h4>
        </div>
        <div className="flex flex-row mt-6 justify-center items-center gap-5">
          <img
            src={avatar}
            alt="avatar"
            className="rounded-full w-12 h-12 md:w-16 md:h-16 "
          />

          <div className="text-black font-main  max-w-3/4 w-fit md:w-fit  text-lg">
            <h5 className="font-normal">{Data[currentIndex].name}</h5>
            <p className="font-light">{Data[currentIndex].occupation}</p>
          </div>
        </div>
      </div>
      {/* Left Arrow */}
      <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full md:p-2  cursor-pointer">
        <button onClick={prevSlide}>
          <svg
            className="w-6 h-6 md:h-10 md:w-10 lg:h-12 lg:w-12"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 5C16.1929 5 5 16.1929 5 30C5 43.8071 16.1929 55 30 55C43.8071 55 55 43.8071 55 30C55 16.1929 43.8071 5 30 5Z"
              fill="#0055A4"
            />
            <path
              d="M33.1499 21.1742L24.3499 29.9992L33.1499 38.8242"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      {/* Right Arrow */}
      <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full md:p-2  cursor-pointer">
        <button onClick={nextSlide}>
          <svg
            className="w-6 h-6 md:h-10 md:w-10 lg:h-12 lg:w-12"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 55C43.8071 55 55 43.8071 55 30C55 16.1929 43.8071 5 30 5C16.1929 5 5 16.1929 5 30C5 43.8071 16.1929 55 30 55Z"
              fill="#0055A4"
            />
            <path
              d="M26.8501 38.8258L35.6501 30.0008L26.8501 21.1758"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="flex top-4 justify-center py-2">
        {Data.map((Data, dataIndex) => (
          <div
            key={dataIndex}
            onClick={() => goToSlide(dataIndex)}
            className="text-2xl cursor-pointer"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
