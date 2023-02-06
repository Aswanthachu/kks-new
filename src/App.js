import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import {Home,About,Contact,Services,TermsConditions,PrivacyPolicy,Maintenance,PlansPage,BenefitsOfUsStocks,SIP, NotFound, Refund} from './pages'
import {Layout} from './components'
import Auth from './pages/Auth/Auth';
import MeetTheTeam from './pages/MeetTheTeam/MeetTheTeam';
import BecomeAPartner from './pages/BecomeAPartner/BecomeAPartner';
import RetirementPlan from './pages/RetirementPlan/RetirementPlan';

import ReactGa from "react-ga";

import './App.css';

const Traking_Id="UA-227723739-2";
ReactGa.initialize(Traking_Id);


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/signup' element={<Auth />}  />
          <Route path='/login' element={<Auth/>}  />
          <Route path='/' element={<Home/>} exact  />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/become-a-partner' element={<BecomeAPartner/>} />
          <Route path='/retirement-plan' element={<RetirementPlan/>} />
          <Route path='/meet-the-team' element={<MeetTheTeam/>} />
          <Route path='/terms-conditions' element={<TermsConditions/>} />
          <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
          <Route path='/pricing' element={<PlansPage/>} />
          <Route path='/benefits-of-us-stocks' element={<BenefitsOfUsStocks/>} />
          <Route path='/sip' element={<SIP/>} />
          <Route path='/refund-cancellation-policy' element={<Refund/>} />
          <Route path='/maintenance' element={<Maintenance/>}  />
          <Route path='*' element={<NotFound/>} />
        </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
