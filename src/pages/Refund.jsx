import React,{useEffect} from 'react'
import { Container } from '../components';

import ReactGA from "react-ga";

const Refund = () => {

  useEffect(()=>{
    ReactGA.pageview(window.location.pathname);
  },[])

  return (
   <section>
     <div className='flex justify-center my-24 sm:w-full'>
        <h2 className='text-[46px] text-darkBlue font-semibold text-center'>Refund & Cancellation Policy</h2>
      </div> 
      <Container
        termsSmallHead
        description={`KKS Capitals does not provide refund & cancellation as we are a Financial Services firm, Please
        note that once the payment gets deducted, it will be treated as successful transactions and there
        is no way user can cancel such transactions. Thus we require payment Gateway to receive
        Payments from our customers.
          
        `}
      />
       <div className='font-main font-medium text-[19px] text-black container mt-[-10px] ml-10 md:ml-48 ' >
        <ul>
          <li className='mb-4' >1. Amount once paid through the payment gateway shall not be refunded other than in the
            following circumstances:</li>
 <ul className='font-sans font-normal' >
    <li>- Multiple times debiting of Customer’s Card/Bank Account due to technical error OR Customer's
        account being debited with excess amount in a single transaction due to technical error. In such
        cases, excess amount excluding Payment Gateway charges would be refunded to the Customer. </li>
    <li>- Due to technical error, payment being charged on the Customer’s Card/Bank Account but the
          transaction is unsuccessful.</li>
 </ul>
 <li className='mb-4 mt-3' >2. The Customer will have to make an application for refund along with the transaction number
and original payment receipt if any generated at the time of making payments.</li>
<li className='mb-4' >3. The application in the prescribed format should be sent to help@kkscapitals.com</li>
<li className='mb-4' >
4. The application will be processed manually and after verification, if the claim is found valid, the
 amount received in excess will be refunded by Payment Gateway provider’s through electronic
 mode in favor of the borrower and confirmation sent to the mailing address given to us, within a
 period of 7 calendar days on receipt of such claim. It will take 3-7 days for the money to show in
 your bank account depending on your bank’s policy.
</li>
<li className='mb-4' >
5. The company assumes no responsibility and shall incur no liability if it is unable to affect any
Payment Instruction(s) on the Payment Date owing to any one or more of the following
 circumstances:
</li>
<ul className='font-sans font-normal' >
    <li>a. If the Payment Instruction(s) issued by you is/are incomplete, inaccurate, and invalid and
 delayed. </li>
    <li> b. If the Payment Account has insufficient funds/limits to cover for the amount as mentioned in
 the Payment Instruction(s).</li>
 <li> c. If the funds available in the Payment Account are under any encumbrance or charge.</li>
 <li>d. If your Bank refuses or delays honoring the Payment Instruction(s).</li>
 <li>e. Circumstances beyond the control of Company (including, but not limited to, fire, flood, natural
 disasters, bank strikes, power failure, systems failure like computer or telephone lines breakdown
 due to an unforeseeable cause or interference from an outside force)</li>
 <li>f. In case the payment is not effected for any reason, you will be intimated about the failed
 payment by an e-mail.</li>
 </ul>
 <li className='mb-4 mt-3' >
 6. User agrees that the Company, in its sole discretion, for any or no reason, and without penalty,
 and discard all or any part of his/her account, user profile, or his/her recipient profile, at any time.
 Company may also in its sole discretion and at any time discontinue providing access to the
 may suspend or terminate his/her account (or any part thereof)or use of the Services and remove
 Services, or any part thereof, with or without notice. User agrees that any termination of his/her
 access to the Services or any account he/she may have or portion thereof may be effected
 without prior notice and also agrees that Company will not be liable to User or any third party for
 any such termination. Any suspected, fraudulent, abusive, or illegal activity may be referred to
 appropriate law enforcement authorities. These remedies are in addition to any other remedies
 Company may have at law or in equity. Upon termination for any reason, the user agrees to
 immediately stop using the Services.
 </li>
 <li className='mb-4' >
 7. The company may elect to resolve any dispute, controversy, or claim arising out of or relating to
 this Agreement or Service provided in connection with this Agreement by binding arbitration in 
 accordance with the provisions of the Indian Arbitration & Conciliation Act, 1996. Any such
 dispute, controversy or claim shall be arbitrated on an individual basis and shall not be
 consolidated in any arbitration with any claim or controversy of any other party
 </li>
          </ul>
          </div>

   </section>
  )
}

export default Refund


// 6. User agrees that the Company, in its sole discretion, for any or no reason, and without penalty,
// may suspend or terminate his/her account (or any part thereof)or use of the Services and remove
// and discard all or any part of his/her account, user profile, or his/her recipient profile, at any time.
// Company may also in its sole discretion and at any time discontinue providing access to the
// Services, or any part thereof, with or without notice. User agrees that any termination of his/her
// access to the Services or any account he/she may have or portion thereof may be effected
// without prior notice and also agrees that Company will not be liable to User or any third party for
// any such termination. Any suspected, fraudulent, abusive, or illegal activity may be referred to
// appropriate law enforcement authorities. These remedies are in addition to any other remedies
// Company may have at law or in equity. Upon termination for any reason, the user agrees to
// immediately stop using the Services.
// 7. The company may elect to resolve any dispute, controversy, or claim arising out of or relating to
// this Agreement or Service provided in connection with this Agreement by binding arbitration in 
// accordance with the provisions of the Indian Arbitration & Conciliation Act, 1996. Any such
// dispute, controversy or claim shall be arbitrated on an individual basis and shall not be
// consolidated in any arbitration with any claim or controversy of any other party