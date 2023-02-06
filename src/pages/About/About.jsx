import React , {useEffect} from "react";
import { Banner, Container, ContainerTwo } from '../../components';
import aboutman from "../../assets/aboutman.png";
import meettheteam from "../../assets/meettheteam.png"

const About = () => {
  useEffect(()=>{
    window.scroll(0,0)
  })
  return (
    <>
    <section className='container-full'>
      <Banner image={aboutman} heading="Changing the way to handle stocks!" highlight="stocks!" decription="Building  the portfolio consists of securities in U.S. Capital Market. Stocks that get outperforming ROI and sharing the knowledge with our Clients." buttontext="Sign Up" btncolor="blue" 
       wordbreak="the"
       about
       path="/signup"
      />

      {/* what we  */}
      
      <div className="shadow-blue mt-[-28px]   " >
        < div className="pt-9 pb-2" >      
        <Container  headingfirst="What" headingHighlighted="we do?"
        description="We are building the portfolio consists of securities in U.S. Capital Market. Our
       Passion is to own Stocks that have the potential to get outperforming Return
       on Investments and share the Knowledge with our Clients. If you look at the
       past performance of our strategy like the Businesses of Nvidia, Apple, Tesla,
       TransDigm Group, Microsoft, Alphabet(Google), Amazon, Meta, Master Card,
       Visa, TSMC, ASML, Moody’s etc these Businesses have Created a Fortune for
       its Stakeholders. If you deeply analyze our past Stocks most of them are
       highly engaged in disruptive Technology."
      />
      </div>

</div>


      {/* why we are here */}

      <Container
        headingfirst="Why" headingHighlighted="we are here?"
        description="When you Simply look back and compare the differences of 2000s 2010 &
        2020 you realize how the Technological revolution Changes the way of Life
        and Our Living Standard. If you are reading this now you already sense the
        taste of Technology by Enriching Our Values and Fundamentals of Our
        Business. If you analyze the Companies behind these Disruptive Technology
        they are the one’s with outperforming return on Investments. We find out the
        Companies which have the potential to solve the current Challenges and
        Improve the living Standard and they are the one’s with higher growth
        potential."
      />



      <Container
        description="During the 20th Century it was the industrial revolution that made the
      Industrialist John D. Rockefeller and Andrew Carnegie the Wealthiest in the
      World. But now in the 21st Century the Wealthiest are the ones who
      associated with the Technological Companies and those Companies which
      drive the Technological sectors"
      />



      <Container
        description="We are Long Term Investors; we didn’t recommend intraday trades and
      short-term Speculative trading because there are lots of risks. We also don’t
      recommend Cryptocurrency, Leveraged Forex Trading, Leveraged Derivative
      Instruments, Speculative Commodity Derivatives because currently there are
      lots of uncertainty and high potential risk for 90% of Capital Loss."

      />



      {/* Quotes section */}

      <div className='w-[100%] bg-darkBlue text-center lg:px-[110px] lg:py-[60px] p-6 my-9'>
        <p className='text-[20px] text-white'>
          “When I was in school a group of people went there for an Internet campaign. And when they asked about how many of those who have Facebook Account, there are only two of us in the entire school who have Facebook Account. The entire students clapped and greeted us for having a Facebook Account. One is me and the other is a friend of mine, at that time Facebook shares were not even listed in the stock exchange. So if you ask this question in today's perspective you realise the way we changed.”

        </p>
      </div>

      {/* our history section */}
      


      <Container
        headingfirst="Our" headingHighlighted="History"
        description="Saidali was born in 1916 as the son of Kochunni of Kuttamassery Kuzhikkattakathoot house and Fathima of Pazhangady house. The name belonged
       to the Grandfather of Saidali and the family consisted of 4 brothers and 2 sisters."
      />

      <Container
        description="In 1932, his father and older brothers started a grocery store. This shop became a
        famous shop on the Aluva Perumbavoor route. These five brothers lived simple
        and were faithful."
      />
      <Container
        description={`Their elder brother Muhammed set up a new shop at Chowra Kadavu. Since Kochi
        is the border of the princely states of Travancore, there are chowkas(Police Station
        and Tax collecting Officials during the time of Princely States) on both sides and
        are also in Thrissur-Ernakulam bus route.Chowkas are mainly passing through this
        Chowra Kadav river passage. Muhammad was very devout. The officials at the
        chowka called this shop a god's shop. It was therefore known as the "Shop of God
        in the Land."`}
      />
      <Container
        description={`"Saitali Upap was also a good farmer upto 55 paras of black pepper has been
        obtained by spreading pepper in the adakka tree. In 1955 the Grocery shop was
        shifted to Kunnumpuram and then in 1972 to Keezhmadu Circular Junction. A
        Flour Mill was started on 22nd of February 1985, which was inaugurated by
        Pattambi Ummer musliyar. In addition to Flour Mill we sell Branded Finished
        Products of Coriander powder, Red Chili powder and Turmeric Powder. Saithali
        Saheb was married to Khadija, the granddaughter of Kunjunnikkara Hyder
        Musliyar. They had 8 children. He died in 2006 at the age of 90. At the time of his
        death, the will was: "I have never fought with anyone you must also take care of
        it". He said good-bye with great joy. Lived and died as a role model for the society. Then the
        Grandsons of Saidali, Abdul Jaleel K.A, Mohammed Khais K.K , Jafar K.A & Muhammed Faris K.A are  Expanding the Family
        Businesses into International Capital Markets."`}
      />
      <Container
        headingfirst="Meet"
        headingHighlighted="the team"
      />
      



      <ContainerTwo image={meettheteam} name="abdul jaleel k.a." position="CEO, KKS Capitals"
        description={
          <Container
          MTeam
            description="I am One of the  Founders of KKS Capitals which was also a part of KKS Family Business. I am a Board Member of
            KKS Capital & a chief Investment Officer of a privately Owned Hedge Fund in UAE.I am a Global Macro
            Investor. I am going Straight Forward to what I learned to provide the services that we offer in KKS
            Capitals. After Higher Secondary School Qualifications I went to study CA in the Institute of Chartered Accountants of India. The Faculties in ICAI are the Ones with Experience in India’s Top Financial Sectors
            and Corporate, People with Higher Experience in Bombay Stock Exchange, SBI’s ₹10,000.00 Crore Loan
            Clearing Section, Reliance’s Industries Top Accounting Chief and Many others. Then I studied Central
            Bank’s and their Monetary policy, Macro and Micro Economics, US Economy, US Domestic and Foreign
            Policy, International Relation, Currency Stability & Uncertainty,Political Science, War, Geopolitics,
            Industrial & Technological Revolution, Globalization, International Trade,Emerging Market Economies &
            Advanced Economies, History & Empire Monetary History and Many more, I Studies Most of the
            Advanced Topics by utilizing the potential of our Technology & Internet that includes the Online portals,
            Classes and Study Materials of Harvard Business School, University of Cambridge, Columbia Business
            School, MIT, Stanford University, Wharton School of University of Pennsylvania, London School of
            Economics and Political Science, University of Oxford and Many more. With The Education in the
            Advanced Studies of Financial Markets I can assure you that we can earn outperforming Return on
            Investments.
   "
            textSmall={true}
          />
        }
      />


    </section>
     </>
  )
}

export default About