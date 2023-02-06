import React, { useEffect } from 'react';

import { Container } from '../components';

import ReactGA from "react-ga";


const PrivacyPolicy = () => {
  useEffect(() => {
    window.scroll(0, 0)
  });

  useEffect(()=>{
    ReactGA.pageview(window.location.pathname);
  },[])

  return (
    <section>
      <div className='flex justify-center my-24 sm:w-full'>
        <h2 className='text-[46px] text-darkBlue font-semibold text-center'>Privacy Policy</h2>
      </div>

      <Container
        termsSmallHead
        description={`At KKS Capitals we are committed to handling your personal information or personal data (“Personal
          Data”) responsibly and transparently. This Global Privacy Notice (“Notice”) is intended to comply with
          the relevant transparency requirements under the applicable privacy or data protection laws. This Notice
          explains how KKS Capitals assigns (together “we”, “our”, “us”) collect, use, share or otherwise process your
          Personal Data in connection with your relationship with us. The Notice applies to any Personal Data we
          may collect from you through our websites or applications, accessed using your device (e.g., mobile,
          computer) or various other offline means, such as when you attend our events, or when you otherwise
          interact with us as described below.
          Please note in certain jurisdictions there might be exemptions to the rights we describe below pursuant to
          applicable privacy laws and regulations. We may amend this Notice from time to time to keep it up to date
          with legal requirements and the way we operate our business. Please check these pages regularly for the
          latest version of this Notice.
          
        `}
      />

      <Container
        termsHead="How we collect your Personal Data"
        description="We collect your Personal Data in a variety of ways and from various sources. For example, we may collect
        your Personal Data:"
      />
      {/* <div>
        <p>
          
        • Through direct interactions with you, for example, when you fill out a form, send us mail or
        email, when you call us or in person.
        • Directly from our clients or their agents. For example, from documents that our clients provide to
        us related to the services for which they engage us.
        • Indirectly from our clients or their agents. For example, through information we collect from our
        clients while providing services to them.
        • Directly and indirectly from activity on our websites or our mobile applications. For example,
        from submissions through our website or website usage details collected automatically.
        • From affiliates and third party service providers (such as our marketing partners) acting on our
        behalf in connection with the services we perform.
        • From publicly available sources, including social media, to the extent that you manifestly choose
        to make your profile publicly visible.
        • From automated technologies or interactions that collect technical data about your equipment,
        browsing actions and patterns. This information is collected by using cookies, server logs or other
        similar technologies.
        </p>
      </div> */}

      <Container
        termsHead="How we use your Personal Data"
        description="We use Personal Data for the following purposes:"
      />

      {/* <div>
      • To fulfill our contractual obligations. For example, if you provide us with Personal Data to open,
        manage and administer your account, we will use that Personal Data for such purpose.
        • To comply with a legal obligation that we have, for example where we are required to report to
        tax authorities, to perform KYC checks to comply with applicable AML laws or to prevent and
        detect financial crime.
        • You have provided your consent, for example for a compatible reason as is described to you at the
        time of collection.
        • For a purpose that is compatible with the original purpose as is described to you at the time of
        collection.
        • To respond to law enforcement requests and as required by applicable law, court order, or
        governmental regulations.
        • For our legitimate interest, as a commercial organization, provided our use is proportionate and
        respects your privacy rights. Such legitimate interests may, for example, include:
        • To provide you with information on products or services that you request from us.
        • To provide you with, email alerts, event registrations, social media activity, and other notices
        concerning our products or services, or events or news that may be of interest to you, including
        through targeted messages and advertisements on or through our websites and apps and through
        third-party websites and apps. For more information, see the “marketing communications and
        your choices” section below.
        • To enforce our rights arising from any contracts entered between you or the entity you represent
        and us, including for billing and collections.
        • To improve our website and present its contents to you in a tailored and personalized manner.
        • or market analysis and product development.
        • Authenticate you as an authorized user and to facilitate communications between us.
        • To evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other
        sale or transfer of some or all our assets, whether as an ongoing concern or as part of bankruptcy,
        liquidation, or similar proceeding, in which your information held by us is among the assets
        transferred.
        • Monitor and record calls and electronic communications for (a) processing and verification of
        instructions, (b) investigation and fraud prevention purposes, (c) for crime detection, prevention,
        investigation and prosecution, (d) to enforce or defend our company, partners or affiliates',
        directly or through third parties to whom they delegate such responsibilities or rights, (e) to
        comply with any applicable legal obligation, (f) for quality, business analysis, training and related
        purposes
        • To operate our business in a prudent manner in accordance with industry standards and applicable
        laws, which may include, monitoring and recording calls and electronic communications,
        responding to inquiries and requests, preventing fraud, research, to obtain advice from our
        advisors, as well as governance and management purposes.
        
        If you do not provide us with your Personal Data when requested, it may prevent us from being able to
        carry out the tasks listed above.
      </div> */}

      <Container
        termsHead="Marketing communications and your choices"
        description="We may use your Personal Data to market to you. Specifically, we may collect, use, or otherwise process
       your Personal Data and share it with our affiliates and service providers to provide you with thought
       leadership materials, industry information, invitations to events and webinars, and other communications
       or solicitations that we believe will be of interest to you. We target and tailor such communications based
       on your interaction with us, via mail, email, online, telephone, in-person, or through third-party partners
       or vendors. If you do not wish to receive this information from us, please unsubscribe in the mail."
      />


      <Container
        termsHead="Cookies and online tracking"
        description="We use cookies on our websites or applications. Cookies are small files stored on a computer that are
        designed to hold small amounts of data specific to a user and the websites or applications to help tailor that
        user’s experience."
      />
      <Container
        termsHead="How we share or disclose your Personal Data"
        description="We may disclose the categories of your Personal Data described above to our affiliates, service providers,
        and other third parties for our business purposes. When we do so, we will make sure that your Personal
        Data is used in a manner consistent with this notice, or enter into a contract that describes the business
        purpose and requires the recipient to both keep that Personal Data confidential and not use it for any
        purpose except performing the contract.
        "
      />
      <Container
        termsHead="We may also use or disclose your Personal Data:"
      />

      {/* • To regulators, government agencies, exchanges, self-regulatory organizations or law enforcement
authorities.
• If we are required to do so by law or if we reasonably believe that such disclosure is necessary or
appropriate to prevent physical harm or financial loss in connection with an investigation of
suspected or actual illegal activity,
• When disclosure is necessary to protect our rights or to comply with a judicial or regulatory
requirement or to pursue our legitimate interest or the vital interests of a person. */}



      <Container
        termsHead="Categories of third parties to whom we may disclose your Personal
        Data"
        description="We may disclose your Personal Data to the following categories of third parties:"

      />
      {/* 
• Our affiliates
        • Service providers with whom we have contracted to perform services on our behalf
        • Third parties, to whom you, your agents or the company you represent authorize us to disclose
        your Personal Data in connection with products or services we provide to you
        • Regulators or other government agencies
        • Exchanges or other self-regulatory organizations
        • Law enforcement authorities
        • With a successor entity in the event of a merger, acquisition or similar transaction" */}

      <Container
        termsHead="No Sale of Personal Data"
        description="We do not sell any of your Personal Data including Personal Data of minors under the age of 16 or as
        defined by applicable laws or regulations.
        "

      />
      <Container
        termsHead="How we protect your Personal Data"
        description="We are committed to protecting the security of your Personal Data. We use reasonable technical and
        organization measures, in compliance with applicable law, to protect your Personal Data from
        unauthorized access, unlawful processing and against accidental loss, destruction or damage."

      />
      <Container
        termsHead="How long we retain your Personal Data"
        description="We will retain your Personal Data for as long as necessary to fulfill the purpose for which it was collected,
        such as providing our services, or as required by applicable laws or regulations. This period may extend
        beyond the termination of our relationship with you.
        "

      />
      <Container
        termsHead="Your rights and choices"
        description="Depending on the jurisdiction, and subject to certain exceptions, you may have specific rights regarding
        your Personal Data. This section describes such rights and how you may exercise them."
      />
      <div className='font-main font-fiveHundred text-[19px] text-black container mt-[-10px] ml-10 md:ml-48 ' >
        <ul>
          <li className='mb-4' >• Access to Specific Information</li>

          <li className='mb-4'> • You may have the right to request that we disclose certain information                to you  how we use
            your Personal Data. Once we receive and verify your request, we will disclose to you</li>

          <p className='mb-4'>(depending on your request or unless an exception applies):
          </p>
          <ul className='ml-12 mb-2 mt-3' >
            <li className='mb-4 font-threehundred '  >▪ The categories of Personal Data we have collected about you.</li>
            <li className='mb-4  font-threehundred ' >▪ The categories of sources from where the Personal Data was collected.
            </li>
            <li className='mb-4 font-threehundred '>▪ Our purpose for collecting or sharing your Personal Data.</li>
            <li className='mb-4 font-threehundred '>▪ The categories of third parties with whom we share your Personal Data.</li>
            <li className='mb-4 font-threehundred '>▪ The specific pieces of Personal Data we have collected about you.
            </li>
          </ul>
          <li className='mb-4'>• Where specifically required, we will provide specific pieces of Personal Data we have collected
            about you in a structure, commonly used or in machine-readable format, and to have it transmitted directly to another person or entity (data po
          </li>
          <li className='mb-4'>• Request Deletion or erasure of your Personal Data in certain circumstances.
          </li>
          <li className='mb-4'>• Request that your Personal Data be rectified where it is inaccurate or incomplete</li>
          <li>
            • Request restriction or object to the processing of your Personal Data for certain circumstances (for
            example for marketing purposes</li>
          <li className='mb-4'>• Lodge a complaint with your local data protection authority
          </li>
          <li className='mb-4'>• Withdraw your consent
          </li>
          <p className='mt-4' >If we are relying on your consent to use or share your Personal Data, you have the right to fully or
            partially withdraw your consent, subject to certain exceptions defined in applicable laws and regulations.
            Please note however that this will not affect the lawfulness of the process</p>
        </ul>

      </div>
    </section>
  )
}

export default PrivacyPolicy