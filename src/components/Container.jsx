import React, { useState  } from 'react'



const Container = ({ headingfirst, headingHighlighted, description, textSmall, readMore,termsHead,termsSmallHead,MTeam }) => {

 

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  }
  return (
    <>
      <div className={`${!textSmall && "w-[80%]"} ${textSmall && "w-[100%]"} flex flex-col ${!textSmall && "mx-auto"}  font-main mt-6 ${!headingfirst && "my-0 mt-0 lg:px-0 m-0 w-[100%]"} ${textSmall && "mb-10"}`}>
        {(headingfirst || termsHead || termsSmallHead)&&
          <div className=''>
            <h1 className={`font-semibold ${headingfirst && "text-[35px] md:text-[40px] lg:text-[45px] "} ${termsHead && "text-[32px]"} ${termsSmallHead && "text-[16px]"}`}>
              {headingfirst ? headingfirst : (termsHead ? termsHead :termsSmallHead)}
              <span className='text-darkBlue  ml-2 md:ml-4 font-bold'>
                {headingHighlighted}
              </span>
            </h1>
          </div>
        }
        {
          description &&

          <div className={`mt-6 ${textSmall && "ml-0 md:ml-5 mr-[40px]"} ${(termsHead ||termsSmallHead ) && "mb-20"}`}>
            <p className={`lg:text-[20px] ${textSmall && "text-[17px] text-center lg:text-start leading-6"} ${termsSmallHead && "text-[15px]"}`}>
              {readMore && isReadMore ||  (MTeam && (window.screen.width<1024)&& isReadMore) ? description.slice(0, 500) : description}
              {(readMore || (MTeam && (window.screen.width<1024))) && <span onClick={toggleReadMore} className={` font-semibold cursor-pointer ${MTeam?'text-white underline':"text-darkBlue"}`}>
                {isReadMore ? " Read more" : " Show less"}
              </span>}
            </p>
          </div>}
      </div>
    </>
  )
}
export default Container;