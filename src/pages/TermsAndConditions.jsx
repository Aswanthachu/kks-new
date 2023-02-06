import React,{useEffect} from 'react'
import Container from '../components/Container';

import ReactGA from "react-ga";


const TermsAndConditions = () => {

  useEffect(()=>{
    ReactGA.pageview(window.location.pathname);
  },[])

  return (
    <section className='container mx-auto'>
      <div className='flex justify-center my-24 sm:w-full'>
        <h2 className='text-[46px] text-darkBlue font-semibold text-center'>Terms and Conditions</h2>
      </div>
      <Container
        termsSmallHead="Terms and Conditions for Use of this Web Site"
        description={`Thank you for visiting our Web site. By accessing or using any areas of our Web site
        (www.kkscapitals.com and all related servers operated by KKS Capitals, you are bound by the
        terms and conditions set forth below, as well as the terms of our Acceptable Use Policy and our
        Web Site Privacy Statement. If you do not accept these terms and conditions, you may not
        access or use this Web site. We retain the right to modify these terms and conditions at any
        time by posting new terms and conditions on this page.
        `}
      />

      <Container
        termsHead="Permission to Use this Web Site"
        description="
        Many portions of this Web site are available for public viewing and use. You must register or
        enter into a separate agreement with KKS Capitals to access other portions of this Web site.
        Subject to the terms and conditions set forth on this page, our Acceptable Use Policy and our
        Privacy Statement, and the terms and conditions of any license or other agreement pursuant to
        which you use our products or services, KKS Capitals grants you permission to do the following:
        (i) view and use for intended purposes those portions of this Web site to which we have granted
        you access; (ii) Retain all copyright, trademark and other proprietary rights notices and that you
        use it solely for personal or internal business purposes and do not distribute or republish it; (iii)
        obtain our products and sign up for our services, subject to payment of all applicable charges
        and agreement to the terms and conditions of any license agreement or other agreement
        associated with those products and services; and (iv) use the discussion forums, contact lists
        and email links to which you have been granted access to interact with KKS Capitals and other
        users of our products and services in ways that do not violate our Acceptable Use Policy. Any
        other use of this Web site or its contents is prohibited without first obtaining written permission
        from KKS Capitals."

      />
      <Container
        termsHead="Copyright, Trademarks and Other 
        Proprietary Rights"
        description="
        This Web site contains text, data, software, photographs, graphics, videos, music, sounds and other information and material that is protected by state, national and international lawpertaining to copyrights, trademarks, trade secrets, and other proprietary rights. Unless indicated otherwise, all of this content is the property of KKS Capitals and/or its licensors or
affiliates, and KKS Capitals and its licensors and affiliates reserve all rights with respect to this
Web site’s content, including, without limitation, all rights to copy, display, distribute, transmit,
modify, remove, and create derivative works of it.
Certain trademarks, product names, company names and logos appearing on this Web site are
the property of their respective owners. You must obtain permission from those owners before
copying or using their trademarks, product names, company names or logos.
"

      />
      <Container
        termsHead="Linking, Framing, and Metatags"
        description="
        You may make referential links to any of the publicly accessible pages on this Web site that are
not password protected, subject to review and termination by us at any time and for any
reason. Please be aware that we continually update and revise our Web site. We cannot
guaranty that each page to which you may provide a link will remain available or that its
content will remain the same.
You may not link to our Web site in any way that might lead others to believe that our Web site
or any of its contents were created or are operated or offered by you or any party other than
KKS Capitals. Unless you have entered into a separate written agreement with us permitting
you to do so, you may not frame or otherwise display any portion of our Web site or any of its
contents, nor may you place any text or other content on your Web site that states or implies
that there is any association between you and KKS Capitals.
You may not use any of KKS Capitals trade names, trademarks or any of the textual content of
our Web site as metatags in your own Web site, unless we have granted you a license explicitly
permitting you to do so"

      />
      <Container
        termsHead="Communication and Submissions via this Web Site"
        description="
        Whenever you communicate with KKS Capitals or others using this Web site, including its
forums and email links, your communications are non-confidential. KKS Capitals is free to use
all submissions, ideas and feedback contained in your communications in any manner that is
consistent with our Privacy Statement, including, but not limited to, incorporating your
suggestions into our product and service offerings without any financial or other obligation to
you.
"

      />
      <Container
        termsHead="Member Account, Security and Password"
        description={`
        If any of the products or services available to you on this Web site requires you to open an
account, you must complete the registration process by providing us with current, complete
and accurate information as prompted by the applicable registration form. You may be asked
to choose a user name and/or password. You are entirely responsible for maintaining the
confidentiality of your password and account. Furthermore, you are entirely responsible for any
and all activities that occur under your account. You agree to notify KKS Capitals immediately of
any unauthorized use of your account or any other breach of security. KKS Capitals will not be
liable for any loss that you may incur as a result of someone else using your password or
account, either with or without your knowledge. However, you could be held liable for losses incurred by Charles River or another party due to someone else using your account or
password. You may not use anyone else’s account at any time, without the permission of the
account holder.`}


      />
      <Container
        termsHead="Third Party Statements and Opinions"
        description="
        KKS Capitals is not responsible for any opinions, advice or statements made by third parties.
Except as required by law, we have no obligation to monitor users’ postings to our forums or to
remove or retain forum content, although we reserve the right to do so."

      />
      <Container
        termsHead="Third Party Products, Services and Web Sites"
        description="
        Third parties may develop or provide tools, skins or other software applications or components,
materials, data, content or other products or services for use with our products or services,
some of which may be accessible on or via this Web site. KKS Capitals makes no representation
or warranty with respect to the quality, reliability or non-infringement of any third party
product, service or material accessible on or via this Web site. Your rights with respect to third
party products, services or data may be subject to the terms and conditions of separate
agreements with the third parties providing them.
This Web site may contain links to third party Web sites, and/or references to third parties and
their products. These links and references are provided solely as a convenience to you. Unless
explicitly stated otherwise, they are not intended as a certification or endorsement of the
owner of the Web site or product, the Web site’s content, or any products or services available
on or via the Web site. KKS Capitals does not control and is not responsible for linked Web sites,
or any Web sites (other than our own) that are linked to them."

      />
      <Container
        termsHead="No Warranties"
        description="
        THIS WEB SITE AND ITS CONTENTS ARE PROVIDED TO YOU ON AN “AS IS” AND “AS AVAILABLE”
BASIS. KKS CAPITALS, AND ITS DIRECTORS, OFFICERS, EMPLOYEES, CONTROLLED OR
CONTROLLING ENTITIES, BUSINESS PARTNERS, AGENTS, THIRD-PARTY CONTENT PROVIDERS,
LICENSORS AND SUPPLIERS (COLLECTIVELY, “AFFILIATES”), MAKE NO REPRESENTATIONS OR
WARRANTIES OF ANY KIND ABOUT THIS WEB SITE OR ITS CONTENT, AND THEY DISCLAIM ALL
WARRANTIES REGARDING THIS WEB SITE AND ITS CONTENTS, WHETHER EXPRESS, IMPLIED OR
STATUTORY, INCLUDING, BY WAY OF EXAMPLE AND NOT LIMITATION, WARRANTIES OF MERCHANTIBILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY OR COMPLETENESS OF
CONTENT, OR THE AVAILABILITY OR QUALITY OF ANY PRODUCTS OR SERVICES AVAILABLE VIA
THIS WEB SITE (EXCEPT AS MAY BE SET FORTH IN ANY LICENSE OR OTHER AGREEMENT
RELATED TO THOSE PRODUCTS OR SERVICES).
"

      />
      <Container
        termsHead="Limitation of Liability"
        description="
        EXCEPT AS MAY BE PROVIDED IN A SEPARATE WRITTEN LICENSE OR OTHER AGREEMENT
BETWEEN YOU AND KKS CAPITALS PERTAINING TO KKS CAPITALS PRODUCTS OR SERVICES,
NEITHER KKS CAPITALS NOR ANY OF ITS AFFILIATES WILL BE LIABLE FOR ANY DIRECT, INDIRECT,
PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR OTHER LOSSES OR DAMAGES ARISING
OUT OF OR RELATED TO USE OF THIS WEB SITE OR ANY PRODUCTS OR SERVICES DISTRIBUTED
ON OR PROVIDED THROUGH THIS WEB SITE, WHETHER AS A RESULT OF ERRORS, OMISSIONS,
LOSS OF DATA, DEFECTS, VIRUSES, INTERRUPTIONS OR DELAYS IN OPERATION OR
TRANSMISSION, OR ANY OTHER CAUSE. THIS LIMITATION OF LIABILITY WILL APPLY
REGARDLESS OF THE LEGAL THEORIES UNDER WHICH RELIEF IS SOUGHT AND EVEN IF KKS
CAPITALS AND / OR ITS AFFILIATES HAVE BEEN ADVISED OF THE POSSIBILITY OF THE LOSSES OR
DAMAGES ALLEGEDLY SUFFERED.
IN NO EVENT WILL KKS CAPITALS AND ITS AFFILIATES’ TOTAL LIABILITY WITH RESPECT TO ALL
CLAIMS ARISING OUT OF OR RELATED TO YOUR USE OF THIS WEB SITE EXCEED THE LOWER OF
DIRECT DAMAGES ACTUALLY INCURRED BY YOU OR US$1O.
SOME JURISDICTIONS LIMIT THE EXCLUSION OF DAMAGES OR LIMITATION OF LIABILITY, SO
THE ABOVE EXCLUSIONS AND LIMITATIONS MAY NOT APPLY TO YOU. IF ANY PART OF THE
EXCLUSIONS OF DAMAGES OR LIMITATION OF LIABILITY SET FORTH ABOVE IS UNENFORCEABLE
UNDER APPLICABLE LAW, KKS CAPITALS AND ITS AFFILIATES’ AGGREGATE LIABILITY WILL BE
LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW."

      />
      <Container
        termsHead="Miscellaneous Terms and Conditions"
        description="
        The terms and conditions contained on this page apply generally to your access to and use of
this Web site and our products and services. Some of these terms and conditions may be
modified or superseded by expressly designated legal notices located on other pages of this
Web site or by the terms and conditions of the licenses or other agreements pursuant to which
you obtain our products or services. A specific provision in any of those notices, licenses or
agreements that addresses the same subject matter as a provision on this page overrides the
provision on this page.
No delay or failure to take any action or exercise any right that KKS Capitals may take or
exercise pursuant to these terms and conditions or applicable law will constitute a waiver of
that action or right by KKS Capitals.
"

      />


      <div className='mb-4'>
        <Container termsHead="LEGAL" />
      </div>

      <Container
        termsHead="Acceptable Use Policy"
        description="
        This Acceptable Use Policy is intended to promote the integrity, reliability and security of our
Web site (www.kkscapitals.com and all related servers which we operate) and the server-based
services we provide that support use of our own and others’ software products (collectively,
“our services”). This policy, any agreement pursuant to which you use our software or serverbased services, and the Terms and Conditions for use of our Web site together govern your
access to and use of our services. If you do not accept this policy, you may not access or use
any of our services. We retain the right to modify this policy at any time by posting the modified
policy on our Web site.
"

      />


      <Container 
       termsSmallHead="Prohibited Activities"
      />


      <Container
        termsHead="You may not:"
        description="
        use our services, including the www.kkscapitals.com directory and any other contact directories
on our Web site, to make unsolicited offers or proposals or to send junk mail to users of our
services or our software harass, defame or defraud users of our services or our software
knowingly damage or interfere with the operation of our services, any software that utilizes
them, or any user’s enjoyment of them, by any means, including uploading or otherwise disseminating viruses, worms or other harmful code disable, circumvent, avoid, bypass,
remove, deactivate, impair or otherwise interfere with security-related features of our services
or software, features that enforce restrictions or limitations on use of our services or software,
or features that prevent or restrict use or copying of any content or other material accessible
through use of our services or software use our services to upload, or otherwise make
available, files that contain images, photographs, software or other material protected by
intellectual property laws (including, by way of example and not limitation, copyright or
trademark laws) or by rights of privacy or publicity, unless you own or control the rights or have
received all necessary consent to do so use our services to download any file posted by another
user that you know, or reasonably should know, cannot be legally reproduced, displayed,
performed, and/or distributed in this manner;
access or use our services in violation of any local, state, national, or international law,
including, without limitation, laws governing the provision of financial services, data protection
and privacy, and export or import control or otherwise access or use this Web site in violation
of its Terms and Conditions or use our other services or our software in violation of any
applicable license or service agreement.
"

      />
      <Container
        termsHead="Special Notice Regarding Copyright Infringement"
        description="
        You may not use our services to infringe copyrights. We will attempt to terminate service to
anyone who we become aware is repeatedly using our services in violation of copyright law. IT
IS YOUR SOLE RESPONSIBILITY TO USE THE SERVICES IN COMPLIANCE WITH ALL APPLICABLE
COPYRIGHT LAWS.
Notification of claimed copyright infringement should be made in accordance with our Notice
and Procedure for Making Claims of Copyright Infringement. NOTICES UNRELATED TO ALLEGED
COPYRIGHT INFRINGEMENT OR NOT IN CONFORMANCE WITH THIS PROCEDURE WILL NOT
RECEIVE A RESPONSE."

      />
      <Container
        termsHead="Consequences of Unacceptable Use"
        description="
        We reserve the right to take any and all action we deem appropriate if we become aware of
conduct that we believe does not conform to the requirements of this policy, any agreement
pursuant to which you use our services or any software that utilizes them, the Terms and
Conditions for use of this Web site, or applicable law."

      />
    </section>
  )
}

export default TermsAndConditions