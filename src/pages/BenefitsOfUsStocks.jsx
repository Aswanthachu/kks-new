import React, { useEffect } from "react";
import { UsStockContainer } from '../components';

import UsStockDiversity from "../assets/UsStockDiversity.png"
import UsStockDollar from "../assets/UsStockDollar.png";
import UsStockHandShake from "../assets/UsStockHandShake.png";
import Group from "../assets/Group.png";


import { usMarketLogos } from "../utils/constants";

import ReactGA from "react-ga";


const BenefitsOfUsStocks = () => {
    useEffect(() => {
        window.scroll(0, 0)
    });

    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    }, [])
    return (
        <section className='container-full flex items-center flex-col'>
            <div className={`w-[95%] flex mx-auto bg-plansBanner  lg:min-h-[calc(100vh-100px)] bg-cover bg-no-repeat my-5  justify-center p-10 flex-col text-white rounded-r-xl md:rounded-2xl lg:rounded-b-3xl mb-10 z-20`}>
                <h1 className='font-sans font-mainBold text-4xl md:text-6xl lg:text-7xl'>
                    Benefits of {" "}
                    <br className='lg:hidden' />
                    <span className='text-darkBlue font-extrabold'>
                        Investing {" "}
                    </span>
                    <br className='hidden lg:block' />
                    in US {" "}
                    <br className='block lg:hidden' />
                    Stocks
                </h1>
                <p className='w-[90%] md:w-[80%] lg:w-[50%] mt-6 font-semibold text-sm md:text-lg'>
                    Many investors ask why to invest in US stocks when you have so many Indian stocks offering high growth. Here are some benefits of investing in US stocks:
                </p>
            </div>
            <div className='container  relative max-h-7xl  my-15  md:my-10 lg:my-0 '>
                <UsStockContainer
                    heading="Diversify your Portfolio"
                    image={UsStockDiversity}
                    bg
                    description="Investing in US stocks allows you to diversify & broaden your investment exposure to the US economy to mitigate economic risks"

                />

            </div>
            <div className='container  relative max-h-7xl my-10 lg:my-0 text-white'>
                <UsStockContainer
                    heading="Gain from Dollar's 
                    Appreciation"
                    image={UsStockDollar}
                    description="In 2011, the average USD-INR exchange rate was around INR 45.70
                    In 2023, the exchange rate was around Rs. 80, indicating an investor would have gained 42% simply through currency gains. This growth is in addition to the gains seen by US stock markets. in US stocks allows you to diversify & broaden your investment exposure to the US economy to mitigate economic risks"
                />
            </div>

            {/* oppertunities to invest in high potential companies */}


            <div className='container relative  mx-auto  text-white lg:text-black lg:gap-10 mt-16 font-main px-2 md:px-0 hidden lg:flex'>
                <div className='w-[100%] lg:w-[65%] flex-1 p-5  z-10 lg:z-0 absolute lg:relative flex md:justify-center md:items-center'>
                    <div className='flex my-auto flex-col'>
                        <h1 className='text-2xl md:text-4xl font-semibold mb-10'>
                            Opportunity to Invest in High Potential Companies
                        </h1>
                        <p className='text-md md:text-lg font-medium '>
                            The US is at the forefront of innovation across technology,pharma, and industrial companies. Investing in US stocks allows Indian investors to benefit from gains made by these high-potential, innovative companies

                            Protection

                            In case  INDmoney and Vested goes out of business, their US broker Drive Wealth and Alpaca will ensure that you can access vour portfolio through them with the account created through their platform. Alpaca Securities LIC and DriveWealth LIC is a member of FINRA (Financial Industry Regulatory Authority) and SIPC (Securities Investor Protection Corporation). Also note that both Drive Wealth and Alpaca are members of the SIPC (Securities Investor Protection Corporation). SIPC protects customers of SIPC-member broker-dealers if the firm fails financially. Each brokerage account opened with Vested and INDmoney is insured by SIPC (Securities Investor Protection Corporation) up to $500,000, this includes $250,000 in cash. For more details click.

                            <br />
                            <div className='mt-10'>
                                SIPC PROTECTION -
                                <a className='text-blue-600' href="https://www.sipc.org/for-investors/what-sipc-protects " target="_blank" rel="noreferrer">

                                    https://www.sipc.org/for-investors/what-sipc-protects
                                </a>
                            </div>
                        </p>
                    </div>
                </div>
                <div className='w-[100%] lg:w-[35%]   lg:rounded-b-2xl z-5 opacity-80 '>
                    <img src={UsStockHandShake} alt="stock-diversity" className=' w-[100%] h-[1000px] md:h-2/3 lg:h-full' />
                </div>
            </div>

            {/* Opportunity to Invest in High Potential Companies */}

            <div className={`bg-UsStockHandShake md:bg-UsStockHandShake2 bg-cover bg-no-repeat  text-white rounded-3xl container  flex mx-auto p-6 min-h-[400px] lg:hidden bg-opacity-30`}>

                <div className='flex my-auto flex-col'>
                    <h1 className='text-2xl md:text-4xl font-semibold mb-10'>
                        Opportunity to Invest in High Potential Companies
                    </h1>
                    <p className='text-md md:text-lg font-medium '>
                        The US is at the forefront of innovation across technology,pharma, and industraial companies. Investing in US stocks allows Indian investors to benefit from gains made by these high-potential, innovative companies

                        Protection

                        In case of INDmoney and Vested goes out of business, their US broker Drive Wealth and Alpaca will ensure that vou can access vour porttolio through them with the account created through their platform. Alpaca Securities LIC and DriveWealth LIC is a member of FINRA (Financial Industry Regulatory Authority) and SIPC (Securities Investor Protection Corporation). Also note that both Drive Wealth and Alpaca are members of the SIPC (Securities Investor Protection Corporation). SIPC protects customers of SIPC-member broker-dealers if the firm fails financially. Each brokerage account opened with Vested and INDmoney is insured by SIPC (Securities Investor Protection Corporation) up to $500,000, this includes $250,000 in cash. For more details click.

                        <br />
                        <div className='mt-10'>
                            SIPC PROTECTION -
                            <a className='text-blue-600' href="https://www.sipc.org/for-investors/what-sipc-protects " target="_blank" rel="noreferrer" >

                                https://www.sipc.org/for-investors/what-sipc-protects
                            </a>
                        </div>
                    </p>
                </div>
            </div>

            {/* Overseas Investment */}

            <div className={`bg-UsStockMoney bg-cover bg-no-repeat  text-white rounded-3xl container  flex mx-auto p-6 min-h-[400px] my-10 lg:my-20 bg-opacity-50`}>

                <div className='flex my-auto flex-col'>
                    <h1 className='text-2xl md:text-4xl font-semibold mb-10'>
                        Overseas Investment
                    </h1>
                    <p className='text-md md:text-lg font-medium '>
                        The Association of Mutual Funds in India (AMFI) had recently asked asset management companies (AMCs) to stop accepting fresh lump sum and SIP investments in schemes that invest in overseas securities. As mandated by the Reserve Bank of India (RBI), Indian mutual funds registered with the Securities and Exchange Board of India (Sebi) are allowed to invest overseas with an overall cap of $7 billion. Investments in overseas exchange traded funds (ETFs) have a separate limit of $1 billion. At present, the $7-billion limit has almost been reached, hence the pause on fresh investments.

                        While Indian investors can directly invest in US stocks, as discussed below, the mutual fund route provides another avenue for the investors to invest in overseas companies and diversify their portfolios geographically. If you have been investing in overseas securities through the mutual fund route, this means that you can no longer make any fresh investments. However, you can continue with existing systematic investment plans (SIPs).

                        Investing in the US markets through mutual funds — the cost aspect: One also needs to remember that there are two types of mutual funds that invest overseas. There are fund of funds, which are local mutual funds that invest in international mutual funds, and there are local mutual funds that invest in international stocks. The expenses ratio for fund of funds tend to be higher, as apart from a general India fund management fee, there is also a management fee for the underlying fund. Even if you invest in a fund that is not a fund of funds, the expense ratio could be 2% or higher. However, there are other options for Indian investors to invest in overseas markets.
                        Other options to invest in US stock market
                        Even with the mutual funds route closed, you can still directly make investments in overseas markets through domestic platforms that allow you to invest in overseas markets, especially the US. As an

                        Indian resident, the RBI allows you to remit up to $250,000 a year per person under the liberalised remittance scheme (LRS). When it comes to international markets, Indian investors have been showing a growing interest in the US stock markets. If you want to invest directly in the US markets, you can invest either in stocks or ETFs available on the US exchanges. In the case of stocks, fractional investment is allowed in the US. So, for highly priced stocks, you can invest in a fraction of the stock for as little as $1.
                    </p>
                </div>
            </div>


            {/* Bottom heading*/}

            <div className='container mx-auto'>
                <h1 className='text-2xl md:text-3xl text-center justify-center leading-8 lg:text-4xl font-semibold'>
                    Opportunity to <span className='text-darkBlue'>Invest in World's Great Corporations,</span><br />
                    That promote <span className='text-darkBlue'>a better future and Care our Planet</span>
                </h1>
            </div>

            {/* Bottom logo */}

            <div className='container mx-auto mt-20'>
                <div className='w-[90%] flex items-center mx-auto justify-between'>
                    {
                        usMarketLogos.map(logo =>
                            <div key={logo.id} >
                                <img src={logo.image} alt="logo" className='w-[50%] h-[50%]' />
                            </div>
                        )
                    }
                </div>
            </div>

            <div className='container mx-auto mt-10'>
                <div className='w-[50%] flex items-center mx-auto justify-between'>
                    <img src={Group} alt="grp" />
                </div>
            </div>

        </section>
    )
}

export default BenefitsOfUsStocks