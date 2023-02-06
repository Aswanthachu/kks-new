// import React from 'react'
// import { Button } from '../utils';

// import Man from "../assets/Man.png"

// const Banner = ({ image, heading, highlight, btn, buttontext, buutonicon, btncolor }) => {

//   //   const Highlighted = ({text ={heading} , highlight}) => {
//   //     if (!highlight.trim()) {
//   //       return <span>{text}</span>
//   //     }
//   //     const regex = new RegExp(`(${_.escapeRegExp(highlight)})`, 'gi')
//   //     const parts = text.split(regex)
//   //     return (
//   //       <span>
//   //          {parts.filter(part => part).map((part, i) => (
//   //              regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>
//   //          ))}
//   //      </span>
//   //     )
//   //  }

//   return (
//     <>
//       <section className='container mx-auto pb-0 mt-2 md:mt-4 lg:mt-0 flex flex-col z-0 '>
//         <div className='w-[100%] flex flex-wrap'>
//           <div className=' flex flex-col justify-center w-[100%] md:w-[80%] lg:w-[60%]'>
//             <div >
//               <h2 className='text-sans text-[37px] md:text-[57px] lg:text-[67px] leading-[40px] md:leading-[55px] lg:leading-[70px] font-[500] font-main'>Here to build a<br className='block' />
//                 <span className='text-darkBlue font-[600]'>fortune</span> for you.
//               </h2>
//               <div className='mt-5  text-[16px] mb-[20px] md:text-[24px] mr-[20%] md:mr-[30%]'>
//                 <p>
//                   By the end of 2030, build a portfolio of
//                   multibagger stocks that have a minimum
//                   expected return of 6X.
//                 </p>
//               </div>
//             </div>


//             <Button
//               text="Learn more"
//               icon={<svg className='w-[15px] h-[15px] ml-3' width="9" height="19" viewBox="0 0 9 19" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M0.910156 17.4201L7.43016 10.9001C8.20016 10.1301 8.20016 8.87008 7.43016 8.10008L0.910156 1.58008" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
//               </svg>}
//               className='bg-darkBlue text-white flex font-sm px-3 py-2 rounded items-center hover:scale-110'>
//             >
//             </Button>
//           </div>
//           <div className='w-[70%] md:w-[60%] lg:w-[40%] flex items-center mx-auto mt-9 md:mt-12 z-0'>
//             <img src={Man} alt="man" className='w-[100%] h-[100%] z-0' />
//           </div>
//           <div className='w-container-full shadowTop h-[6px] shadowTop z-50' />
//         </div>

//       </section>

//     </>
//   )
// }

// export default Banner


import React from 'react'
import { Button } from '../utils';

const Banner = ({ image, heading, highlight, decription, buttontext, btncolor, wordbreak, about, partner, path }) => {

  return (
    <>
      <section className='container-full'>
        <div className={`container mx-auto pb-0 mt-2 md:mt-4 lg:my-0  flex flex-col flex-wrap z-0 `} >
          <div className='w-[100%] flex flex-wrap'>
            <div className=' flex flex-col justify-center w-[100%] md:w-[90%] lg:w-[60%] mt-20 lg:mt-0'>
              <div className='w-[100%] md:w-[100%] lg:w-[80%]'>
                <h2 className=' text-sans text-[36px] md:text-[57px] lg:text-[67px] leading-[40px] md:leading-[55px] lg:leading-[80px] font-bold font-main :ml-0'>
                  {/* {heading} */}
                  {/* {partner && heading.split(" ").map(text => {
                    return text === highlight ? (highlight === wordbreak ? <><span className='text-darkBlue font-bold mr-5'>{highlight}</span><br /></> : <span className='text-darkBlue font-extrabold mr-5'>{highlight}</span>) : (text === wordbreak ? <><span className='mr-5'>{text}</span><br /></> : <span className='mr-5'>{text}</span>);
                  })}

                  */}

                  {heading.split(" ").map(text => {
                    return text === highlight ? (<><br /><span className='text-darkBlue font-bold mr-5'>{highlight}</span></>) : (text === wordbreak ? <><span className='mr-5'>{text}</span><br /></> : <span className='mr-5'>{text}</span>);
                  })}
                </h2>
                <div className=' text-[16px] mb-[20px] md:text-[24px] '>
                  <p className={`${!partner ? 'text-center' : 'text-start'} md:text-start my-10  `}>
                    {decription}
                  </p>
                </div>
              </div>


              <div className={`w-full flex ${!partner ? 'justify-center' : 'justify-start'}  md:justify-start`}>
                <Button
                  path={path}
                  text={buttontext}
                  icon={<svg className='w-[15px] h-[15px] ml-3' width="9" height="19" viewBox="0 0 9 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.910156 17.4201L7.43016 10.9001C8.20016 10.1301 8.20016 8.87008 7.43016 8.10008L0.910156 1.58008" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>}
                  className='btn2'

                />
              </div>
            </div>
            <div className={`w-[100%] lg:w-[40%] flex mt-10 ${about && "justify-center"} ${partner && "justify-end"}`}>
              <div className=" w-[80%] h-contain">
                {image && <img src={image} alt="man" className={` w-full object-fill ${about ? "h-[85%] max-h-[800px]  md:w-[900px]  " : "h-full md:w-[900px] "} `} />}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Banner

//  {partner && <div className={`w-full h-[1.5%] md:h-[2%] lg:h-[4%] white__gradiant shadow-top bg-smoke bg-gradient-smoke opacity-20 absolute bottom-0 ${partner && "bottom-[-8%]  lg:bottom-[-18%]"} ${about && "bottom-[6.5%] md:bottom-[4.25%]  lg:bottom-[7%]"}`} />}
