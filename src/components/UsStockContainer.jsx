import React from 'react';


const UsStockContainer = ({ heading, description, image,bg }) => {
    return (
        <>
            <div className='mx-auto items-center text-white lg:text-black sm:gap-1 md:gap-2 lg:gap-4 mt-1 min-h-[520px] relative justify-center hidden lg:flex'>
                <div className='w-[90%] md:w-[80%] lg:w-[50%] px-5 z-10 absolute lg:relative'>
                    <div className='flex my-auto flex-col py-2 '>
                        <h1 className='text-2xl md:text-4xl font-semibold mb-10'>
                            {heading}
                        </h1>
                        <p className='text-lg font-medium'>
                            {description}
                            {/* Investing in US stocks allows you to diversify & broaden your investment exposure to the US economy to mitigate economic risks. */}
                        </p>
                    </div>
                </div>
                <div className='w-[100%] h-[100%] lg:w-[50%] z-0  absolute lg:relative opacity-90 py-6 flex md:mx-auto'>
                    <img src={image} alt="stock-diversity" className='sm:rounded-3xl' />
                </div>
            </div>

            <div className={`${bg ? "bg-UsStockDiversity" : "bg-UsStockDollar"} bg-cover bg-no-repeat  text-white rounded-3xl container w-full flex mx-auto p-6 min-h-[400px] lg:hidden bg-opacity-50`}>
                <div className='flex my-auto flex-col  w-full h-full'>
                    <h1 className='text-2xl md:text-4xl font-semibold mb-10'>
                        {heading}
                    </h1>
                    <p className='text-lg font-medium'>
                        {description}
                    </p>
                </div>
            </div>
        </>
    )
}

export default UsStockContainer