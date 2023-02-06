import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom';


import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';

import { SipFaq } from '../components';

ChartJs.register(
  ArcElement,
  Tooltip,
  Legend
)

const SIP = () => {
  useEffect(()=>{
    window.scroll(0,0)
  },[])

  const options = {
    plugins: {
      legend: {
        display: false
      }
    }
  };

  const [sipValues, setSipValues] = useState({
    sipinvestment: 2000,
    lumpinvestment: 50000,
    time: 1,
    type: "sip"
  });
  const [sipTotal, setSipTotal] = useState(0);
  const [lumpsumTotal, setLumpsumTotal] = useState(0);
  const [investedTotAmount, setInvestedTotAmount] = useState(0);
  const [estimatedReturn, setEstimatedReturn] = useState(0);

  const { sipinvestment, lumpinvestment, time, type } = sipValues;


  



  if (document.getElementById("range1")) {
    let value;
    document.getElementById("range1").oninput = function () {
      value = (this.value - this.min) / (this.max - this.min) * 100;
      if(value < 35.5){
        value=value+1.5
      }
      else if(value > 65){
        value=value-1.5
      }
      this.style.background = 'linear-gradient(to right, #97b0ba 0%, #97b0ba ' + value + '%, #D9D9D9 ' + value + '%, #D9D9D9 100%)'
    }
  }
  if (document.getElementById("range2")) {
    document.getElementById("range2").oninput = function () {
      let value = (this.value - this.min) / (this.max - this.min) * 100;
      if(value < 35.5){
        value=value+1.5
      }
      else if(value > 65){
        value=value-1.5
      }
      console.log(value);
      this.style.background = 'linear-gradient(to right, #97b0ba 0%, #97b0ba ' + value + '%, #D9D9D9 ' + value + '%, #D9D9D9 100%)'
    }
  }

  if (document.getElementById("rangeText1")) {
    document.getElementById("rangeText1").oninput = function () {
      let value = (this.value - document.getElementById("range1").min) / (document.getElementById("range1").max - document.getElementById("range1").min) * 100;
      if(value < 35.5){
        value=value+1.5
      }
      else if(value > 65){
        value=value-1.5
      }
      document.getElementById("range1").style.background = 'linear-gradient(to right, #97b0ba 0%, #97b0ba ' + value + '%, #D9D9D9 ' + value + '%, #D9D9D9 100%)'
    }
  }

  if (document.getElementById("rangeText2")) {
    document.getElementById("rangeText2").oninput = function () {
      console.log("hiii");
      if(this.value > 30) return
      let value = (this.value - document.getElementById("range2").min) / (document.getElementById("range2").max - document.getElementById("range2").min) * 100;
      if(value < 35.5){
        value=value+1.5
      }
      else if(value > 65){
        value=value-1.5
      }
      document.getElementById("range2").style.background = 'linear-gradient(to right, #97b0ba 0%, #97b0ba ' + value + '%, #D9D9D9 ' + value + '%, #D9D9D9 100%)'
    }
  }

  // handle change of input fields

  const handleChange = (e) => {

    if ((e.target.name === "sipinvestment" || e.target.name === "lumpinvestment" || e.target.name === "time")) {
      if (isNaN(e.target.value)) {
        return
      }
      if (e.target.name === "sipinvestment") {
        if (e.target.value > 5000000) {
          return
        }
      }
      else if (e.target.name === "lumpinvestment") {
        if (e.target.value > 5000000) {
          return
        }
      }
      setSipValues(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value
      }))
    }

    setSipValues(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  // calculation of sip and lumpsum

  const calculateSIP = () => {
    var interest = 17.04 / 1200;
    var sipAmount = Math.round(sipinvestment * (Math.pow((1 + interest), time * 12) - 1) * (1 + interest) / interest);
    setSipTotal(sipAmount); //change the rate of interest here (ie is 17.04) 
  };

  const calculateLumpsum = () => {
    setLumpsumTotal(Math.round(lumpinvestment * Math.pow((1 + (25.2 / 100)), time)));
  };

  const calculateInvestedAmount = () => {
    var totYears = Math.floor(time);
    var totMonths = (time - totYears) * 10;
    setInvestedTotAmount((totYears * 12 + totMonths) * sipinvestment);
  }

  const calculateEstimatedReturn = () => {

    if (type === "sip") {
      var tot = sipTotal - investedTotAmount;
      setEstimatedReturn(tot);
    } else {
      setEstimatedReturn(lumpsumTotal - lumpinvestment);
    }
  };

  useEffect(() => {

    if (type === "sip") {
      calculateSIP();
      calculateInvestedAmount();
    } else {
      calculateLumpsum();
    }
  }, [sipinvestment, lumpinvestment, time, type]);

  useEffect(() => {
    calculateEstimatedReturn();
  }, [sipTotal, lumpsumTotal, investedTotAmount])


  // adding data to chart

  let data;

  if (type === "sip") {
    data = {
      labels: ['Estimated Return', 'Invested Amount'],
      datasets: [{
        data: [estimatedReturn, investedTotAmount],
        backgroundColor: ['#0055A4', '#70BAFF'],
      }]
    };
  } else {
    data = {
      labels: ['Estimated Return', 'Invested Amount'],
      datasets: [{
        data: [estimatedReturn, lumpinvestment],
        backgroundColor: ['#0055A4', '#70BAFF'],
      }]
    };
  };

  // Remove styles of range when page switching ocuurs

  useEffect(()=>{
    document.getElementById("range1").style.background="#EEEEEE"
    document.getElementById("range2").style.background="#EEEEEE"
    setSipValues(prevState=>({
      ...prevState,
      sipinvestment:2000,
      lumpinvestment:50000,
      time: 1
    }))
  },[type])

  return (
    <section >
      <div className='w-[92%] ml-[8%] md:mt-14 flex justify-between'>
        <div className='w-[95%] md:w-[90%] lg:w-[45%] mt-10 flex flex-col mr-[2%]'>
          <div className='w-full'>
            <h1 className='text-4xl font-medium font-sans'>
              SIP
              Calculator
            </h1>
            <p className='text-lg font-semibold mt-5 font-main'>
              Calculate your
              <br className='block md:hidden' />{" "}
              SIP or Lumpsum returns.
            </p>
          </div>
          {/* Radio Button */}

          <div className='flex items-center gap-5 mt-8'>
            <div className="flex items-center">
              <input id="default-radio-1"
                type="radio"
                value="sip"
                name="type"
                onChange={handleChange}
                checked={type === "sip"}
                className="w-4 h-4 text-darkBlue bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">SIP</label>
            </div>

            <div className="flex items-center">
              <input  id="default-radio-2"
                type="radio"
                value="lumpsum"
                name="type"
                onChange={handleChange}
                checked={type === "lumpsum"}
                className="w-4 h-4 text-darkBlue bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">Lumpsum</label>
            </div>
          </div>

          {/* Function */}

          <div className='font-main'>
            <p className='font-semibold mt-10'>
              {type === "sip" ? "Monthly Investment" : "Total Investment"}
            </p>
            <input
              placeholder='Enter here...'
              value={type === "sip" ? sipinvestment : lumpinvestment}
              name={type === "sip" ? "sipinvestment" : "lumpinvestment"}
              id='rangeText1'
              defaultValue={0}
              onChange={handleChange}
              autocomplete="off"
              className='w-full mt-5 px-4 py-2 outline-none hover:outline-none focus:outline-none active:outline-none out'
            />
            <hr className='w-full border-gray-400 mb-10' />
            {/* <ErrorDiv error={errorMessage} /> */}
            <input id="range1" type="range"
              min={type === "sip" ? 2000 : 50000}
              max={type === "sip" ? 100000 : 5000000}
              step={type ==="sip" ? 500 : 10000}
              name={type === "sip" ? "sipinvestment" : "lumpinvestment"}
              value={type === "sip" ? (sipinvestment === "" ? 1 : sipinvestment) : (lumpinvestment === "" ? 1 : lumpinvestment)}
              onChange={handleChange}
              className="w-full slider range-slider h-5 bg-gray-200 rounded-full appearance-none cursor-pointer range-lg dark:bg-gray-700"
            />
            <div className='w-full flex justify-between text-lg font-semibold'>

              <p>{type === "sip" ? "₹2000" : "₹50000"}</p>
              <p>{type === "sip" ? "₹1,00,000" : "₹50,00,000"}</p>
            </div>
          </div>

          <div className='font-main'>
            <p className='font-semibold mt-10'>
              Time Period
            </p>
            <input
              placeholder='Enter in Years here...'
              name='time'
              value={time}
              id='rangeText2'
              onChange={handleChange}
              autocomplete="off"
              className='w-full mt-5 px-4 py-2 outline-none hover:outline-none focus:outline-none active:outline-none out'
            />
            <hr className='w-full border-gray-400 mb-10' />
            {/* {errorMessage && <ErrorDiv error={errorMessage} time />} */}

            <input id="range2" type="range"
              min="1"
              max="30"
              name='time'
              value={time === "" ? 1 : time}
              onChange={handleChange}
              step="0.1"
              className="w-full h-5 slider range-slider bg-gray-200 rounded-full appearance-none cursor-pointer range-lg dark:bg-gray-700"
            />
            <div className='w-full flex justify-between text-lg font-semibold'>
              <p>1yr</p>
              <p>30yrs</p>
            </div>
          </div>


          {/* bottom card */}

          <div className='mt-14 mb-0 rounded-2xl font-main text-lg md:text-xl shadow-2xl bg-secondary lg:hidden'>
            <div className=' p-6'>
              <div className=''>
                <p  >Total Value of your Investment</p>
                <p className='font-semibold text-2xl '>₹ {type === "sip" ? sipTotal : lumpsumTotal}</p>
              </div>
              <div className='w-full flex mt-10'>
                <div className='w-[50%]'>
                  <p>Invested Amount</p>
                  <p >₹ {type === "sip" ? investedTotAmount : lumpinvestment}</p>
                </div>
                <div className='w-[50%]'>
                  <p>Est. Returns</p>
                  <p >₹ {estimatedReturn}</p>
                </div>
              </div>
              <div className='w-full flex mt-10 items-center'>
                <div className='w-[30%]'>
                  <div className='hidden lg:block'>
                    <svg width="134" height="134" viewBox="0 0 134 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="67" cy="67" r="59" stroke="#70BAFF" stroke-width="16" />
                    </svg>
                  </div>

                  <div className='lg:hidden'>
                    <Doughnut
                      data={data}
                      options={options}
                    />
                  </div>
                </div>
                <div className='w-[70%] px-10 space-y-10'>
                  <div className='flex justify-between items-center'>
                    <p>
                      Invested Amount
                    </p>
                    <svg width="59" height="32" viewBox="0 0 59 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="59" height="32" rx="5" fill="#70BAFF" />
                    </svg>
                  </div>
                  <div className='flex justify-between items-center'>
                    <p>
                      Est. Returns
                    </p>
                    <svg width="59" height="32" viewBox="0 0 59 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="59" height="32" rx="5" fill="#0055A4" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <Link to="#">
              <div className='w-full bg-darkBlue p-4 rounded-b-2xl text-center text-white cursor-pointer ' >
                Invest Now
              </div>
            </Link>
          </div>

        </div>


        <div className='w-[45%] relative hidden lg:block'>
          {/* bottom card */}

          <div className='mt-14 mb-0 rounded-2xl font-main text-sm md:text-2xl shadow-2xl bg-secondary hidden lg:block absolute bottom-[-40px]'>
            <div className=' p-6'>
              <div className=''>
                <p>Total Value of your Investment</p>
                <p >₹ {type === "sip" ? sipTotal : lumpsumTotal}</p>
              </div>
              <div className='w-full flex mt-10'>
                <div className='w-[50%]'>
                  <p>Invested Amount</p>
                  <p >₹ {type === "sip" ? investedTotAmount : lumpinvestment}</p>
                </div>
                <div className='w-[50%]'>
                  <p>Est. Returns</p>
                  <p>₹ {estimatedReturn}</p>
                </div>
              </div>
              <div className='w-full flex mt-10 items-center'>
                <div className='w-[30%]'>
                  <div className='hidden lg:block w-full h-full'>
                    <Doughnut
                      data={data}
                      options={options}
                    />
                  </div>

                  <div className='lg:hidden'>
                    <svg width="80" height="80" viewBox="0 0 134 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="67" cy="67" r="59" stroke="#70BAFF" stroke-width="16" />
                    </svg>

                  </div>
                </div>
                <div className='w-[70%] px-10 space-y-10'>
                  <div className='flex justify-between items-center'>
                    <p>
                      Invested Amount
                    </p>
                    <svg width="59" height="32" viewBox="0 0 59 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="59" height="32" rx="5" fill="#70BAFF" />
                    </svg>
                  </div>
                  <div className='flex justify-between items-center'>
                    <p>
                      Est. Returns
                    </p>
                    <svg width="59" height="32" viewBox="0 0 59 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="59" height="32" rx="5" fill="#0055A4" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <Link to="#">
              <div className='w-full bg-darkBlue p-4 rounded-b-2xl text-center text-white cursor-pointer ' >
                Invest Now
              </div>
            </Link>
          </div>
        </div>

      </div >
      <div className='mt-28'>
        <SipFaq />
      </div>
    </section>
  )
}

export default SIP