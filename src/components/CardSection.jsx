import React from 'react';

import{ StandardCard} from "../components"

const CardSection = () => {
    return (
        <section className="flex ">

            <div className="container px-1 md:px-4 lg:px-4  mx-auto ">
                <div className="max-w-2xl mx-auto mb-16 font-sans text-center">

                    <h2 className="text-4xl font-bold text-black lg:text-5xl">The Best Service</h2>
                    <h2 className="text-5xl font-bold mt-2 text-darkBlue lg:text-5xl">at the best cost!</h2>
                </div>
                <div className="container-full flex justify-center flex-wrap ">

                    <StandardCard />
                    <StandardCard premium />
                    {/* <PremiumCard /> */}
                    <StandardCard standard />

                </div>
            </div>
        </section>
    )
}

export default CardSection