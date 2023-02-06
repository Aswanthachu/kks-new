import React from 'react';


const ContainerTwo = ({ image, name, position, description }) => {
  return (
    <section className='container-full flex bg-darkBlue my-6  w-[100%] flex-wrap font-main lg:min-h-[550px]'>
      <div className='w-[100%]  lg:w-[30%] flex justify-center '>
        <img src={image} alt="team" className='h-[100%]  lg:min-w-[500px] md:w-[70%] md:h-[100%] md:rounded-2xl md:mt-6 lg:w-[100%]  lg:rounded-none lg:mt-0' />
      </div>
      <div className='w-[100%] lg:w-[70%] text-white px-5 md:px-6 lg:pl-16 py-5'>
        <div className='container w-full flex  lg:ml-0 md:mt-16 mt-0'>
          <div className='w-full text-center lg:text-start'>
            <div className='md:ml-5 flex flex-col md:mx-auto '>
              {name && <h4 className='uppercase font-medium text-3xl '>
                {name}
              </h4>}
              {position && <h6 className="text-md text-gray-200" >
                {position}</h6>}
            </div>
          </div>
        </div>
        <div className='font-normal'>
          {description}
        </div>
      </div>
    </section>
  )
}

export default ContainerTwo