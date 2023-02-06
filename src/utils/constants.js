// Us stock market page

import google from "../assets/google.png";
import nvidia from "../assets/nvidia.png";
import apple from "../assets/adobe.png";
import asml from "../assets/asml.png";
import adobe from "../assets/apple.png";

import RP1 from "../assets/RP1.png";
import RP2 from "../assets/RP2.png";
import RP3 from "../assets/RP3.png";
import RP4 from "../assets/RP4.png";
import RP5 from "../assets/RP5.png";
import RP6 from "../assets/RP6.png";
import RP7 from "../assets/RP7.png";
import RP8 from "../assets/RP8.png";
import RP9 from "../assets/RP9.png";
import RP10 from "../assets/RP10.png";
import RP11 from "../assets/RP11.png";

export const plansPageList = [
  {
    id: 1,
    icon: (
      <svg
        width="26"
        height="20"
        viewBox="0 0 26 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.499 4.5H7.49902C7.36642 4.5 7.23924 4.44732 7.14547 4.35355C7.0517 4.25979 6.99902 4.13261 6.99902 4V1.5C6.99902 1.36739 7.0517 1.24021 7.14547 1.14645C7.23924 1.05268 7.36642 1 7.49902 1H24.499C24.6316 1 24.7588 1.05268 24.8526 1.14645C24.9463 1.24021 24.999 1.36739 24.999 1.5V4C24.999 4.13261 24.9463 4.25979 24.8526 4.35355C24.7588 4.44732 24.6316 4.5 24.499 4.5ZM24.499 12H7.49902C7.36642 12 7.23924 11.9473 7.14547 11.8536C7.0517 11.7598 6.99902 11.6326 6.99902 11.5V9C6.99902 8.86739 7.0517 8.74021 7.14547 8.64645C7.23924 8.55268 7.36642 8.5 7.49902 8.5H24.499C24.6316 8.5 24.7588 8.55268 24.8526 8.64645C24.9463 8.74021 24.999 8.86739 24.999 9V11.5C24.999 11.6326 24.9463 11.7598 24.8526 11.8536C24.7588 11.9473 24.6316 12 24.499 12ZM24.499 19.5H7.49902C7.36642 19.5 7.23924 19.4473 7.14547 19.3536C7.0517 19.2598 6.99902 19.1326 6.99902 19V16.5C6.99902 16.3674 7.0517 16.2402 7.14547 16.1464C7.23924 16.0527 7.36642 16 7.49902 16H24.499C24.6316 16 24.7588 16.0527 24.8526 16.1464C24.9463 16.2402 24.999 16.3674 24.999 16.5V19C24.999 19.1326 24.9463 19.2598 24.8526 19.3536C24.7588 19.4473 24.6316 19.5 24.499 19.5ZM3.99902 4.5H1.49902C1.36642 4.5 1.23924 4.44732 1.14547 4.35355C1.0517 4.25979 0.999023 4.13261 0.999023 4V1.5C0.999023 1.36739 1.0517 1.24021 1.14547 1.14645C1.23924 1.05268 1.36642 1 1.49902 1H3.99902C4.13163 1 4.25881 1.05268 4.35258 1.14645C4.44635 1.24021 4.49902 1.36739 4.49902 1.5V4C4.49902 4.13261 4.44635 4.25979 4.35258 4.35355C4.25881 4.44732 4.13163 4.5 3.99902 4.5ZM3.99902 12H1.49902C1.36642 12 1.23924 11.9473 1.14547 11.8536C1.0517 11.7598 0.999023 11.6326 0.999023 11.5V9C0.999023 8.86739 1.0517 8.74021 1.14547 8.64645C1.23924 8.55268 1.36642 8.5 1.49902 8.5H3.99902C4.13163 8.5 4.25881 8.55268 4.35258 8.64645C4.44635 8.74021 4.49902 8.86739 4.49902 9V11.5C4.49902 11.6326 4.44635 11.7598 4.35258 11.8536C4.25881 11.9473 4.13163 12 3.99902 12ZM3.99902 19.5H1.49902C1.36642 19.5 1.23924 19.4473 1.14547 19.3536C1.0517 19.2598 0.999023 19.1326 0.999023 19V16.5C0.999023 16.3674 1.0517 16.2402 1.14547 16.1464C1.23924 16.0527 1.36642 16 1.49902 16H3.99902C4.13163 16 4.25881 16.0527 4.35258 16.1464C4.44635 16.2402 4.49902 16.3674 4.49902 16.5V19C4.49902 19.1326 4.44635 19.2598 4.35258 19.3536C4.25881 19.4473 4.13163 19.5 3.99902 19.5Z"
          stroke="#F8F8F8"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    text: "Overview",
  },
  {
    id: 2,
    icon: (
      <svg
        width="26"
        height="20"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 0H1.5625V23.4375H25V25H0V0ZM15.625 5.46875C15.625 5.26155 15.7073 5.06284 15.8538 4.91632C16.0003 4.76981 16.199 4.6875 16.4062 4.6875H22.6562C22.8635 4.6875 23.0622 4.76981 23.2087 4.91632C23.3552 5.06284 23.4375 5.26155 23.4375 5.46875V11.7188C23.4375 11.926 23.3552 12.1247 23.2087 12.2712C23.0622 12.4177 22.8635 12.5 22.6562 12.5C22.449 12.5 22.2503 12.4177 22.1038 12.2712C21.9573 12.1247 21.875 11.926 21.875 11.7188V7.65625L16.2297 14.5578C16.1606 14.6422 16.0746 14.7111 15.9772 14.7602C15.8799 14.8093 15.7733 14.8375 15.6644 14.843C15.5555 14.8484 15.4466 14.831 15.3448 14.7918C15.2431 14.7527 15.1506 14.6927 15.0734 14.6156L11.0312 10.5734L5.31875 18.4281C5.19379 18.587 5.01209 18.6913 4.81185 18.719C4.61161 18.7468 4.40841 18.6958 4.24496 18.5769C4.0815 18.4579 3.97052 18.2802 3.93533 18.0812C3.90014 17.8821 3.94348 17.6772 4.05625 17.5094L10.3063 8.91562C10.3726 8.82424 10.458 8.74832 10.5565 8.69311C10.655 8.63789 10.7643 8.60468 10.8768 8.59577C10.9894 8.58686 11.1026 8.60246 11.2085 8.64149C11.3145 8.68052 11.4107 8.74207 11.4906 8.82187L15.5672 12.9L21.0078 6.25H16.4062C16.199 6.25 16.0003 6.16769 15.8538 6.02118C15.7073 5.87466 15.625 5.67595 15.625 5.46875Z"
          fill="#F8F8F8"
        />
      </svg>
    ),
    text: "Portfolio",
  },
  {
    id: 3,
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 0H1.5625V23.4375H25V25H0V0ZM15.625 5.46875C15.625 5.26155 15.7073 5.06284 15.8538 4.91632C16.0003 4.76981 16.199 4.6875 16.4062 4.6875H22.6562C22.8635 4.6875 23.0622 4.76981 23.2087 4.91632C23.3552 5.06284 23.4375 5.26155 23.4375 5.46875V11.7188C23.4375 11.926 23.3552 12.1247 23.2087 12.2712C23.0622 12.4177 22.8635 12.5 22.6562 12.5C22.449 12.5 22.2503 12.4177 22.1038 12.2712C21.9573 12.1247 21.875 11.926 21.875 11.7188V7.65625L16.2297 14.5578C16.1606 14.6422 16.0746 14.7111 15.9772 14.7602C15.8799 14.8093 15.7733 14.8375 15.6644 14.843C15.5555 14.8484 15.4466 14.831 15.3448 14.7918C15.2431 14.7527 15.1506 14.6927 15.0734 14.6156L11.0312 10.5734L5.31875 18.4281C5.19379 18.587 5.01209 18.6913 4.81185 18.719C4.61161 18.7468 4.40841 18.6958 4.24496 18.5769C4.0815 18.4579 3.97052 18.2802 3.93533 18.0812C3.90014 17.8821 3.94348 17.6772 4.05625 17.5094L10.3063 8.91562C10.3726 8.82424 10.458 8.74832 10.5565 8.69311C10.655 8.63789 10.7643 8.60468 10.8768 8.59577C10.9894 8.58686 11.1026 8.60246 11.2085 8.64149C11.3145 8.68052 11.4107 8.74207 11.4906 8.82187L15.5672 12.9L21.0078 6.25H16.4062C16.199 6.25 16.0003 6.16769 15.8538 6.02118C15.7073 5.87466 15.625 5.67595 15.625 5.46875Z"
          fill="#F8F8F8"
        />
      </svg>
    ),
    text: "Refer & Earn",
  },
  {
    id: 4,
    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.52078 2.97886C9.04953 3.45011 9.0749 4.21257 9.35403 4.81915C9.64559 5.45383 9.73582 6.16256 9.61257 6.85004C9.48933 7.53753 9.15853 8.17078 8.66466 8.66466C8.17078 9.15853 7.53753 9.48933 6.85004 9.61257C6.16256 9.73582 5.45383 9.64559 4.81915 9.35403C4.21257 9.07611 3.45011 9.04953 2.97886 9.52078L2.27078 10.2289C2.04425 10.4555 1.91699 10.7627 1.91699 11.0832C1.91699 11.4036 2.04425 11.7108 2.27078 11.9374L15.0622 24.7289C15.2888 24.9554 15.5961 25.0826 15.9165 25.0826C16.2369 25.0826 16.5442 24.9554 16.7708 24.7289L17.4789 24.0208C17.9501 23.5495 17.9247 22.7871 17.6456 22.1805C17.354 21.5458 17.2638 20.8371 17.3871 20.1496C17.5103 19.4621 17.8411 18.8289 18.335 18.335C18.8289 17.8411 19.4621 17.5103 20.1496 17.3871C20.8371 17.2638 21.5458 17.354 22.1805 17.6456C22.7871 17.9235 23.5495 17.9501 24.0208 17.4789L24.7289 16.7708C24.9554 16.5442 25.0826 16.2369 25.0826 15.9165C25.0826 15.5961 24.9554 15.2888 24.7289 15.0622L11.9374 2.27078C11.7108 2.04425 11.4036 1.91699 11.0832 1.91699C10.7627 1.91699 10.4555 2.04425 10.2289 2.27078L9.52078 2.97886V2.97886Z"
          stroke="white"
          stroke-width="2.41667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    text: "Tickets",
  },
  {
    id: 4,
    icon: (
      <svg
        width="29"
        height="25"
        viewBox="0 0 29 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.0397 15.6301H8.16381C7.87527 15.6301 7.6416 15.8637 7.6416 16.1523V23.7228C7.6416 24.0113 7.87527 24.245 8.16381 24.245H13.0397C13.3283 24.245 13.5616 24.0113 13.5616 23.7228V16.1519C13.5616 15.8634 13.3279 15.6301 13.0397 15.6301ZM20.6423 0H15.7664C15.4779 0 15.2442 0.233666 15.2442 0.522211V23.7224C15.2442 24.011 15.4779 24.2447 15.7664 24.2447H20.6423C20.9309 24.2447 21.1645 24.011 21.1645 23.7224V0.522211C21.1645 0.233666 20.9309 0 20.6423 0ZM28.2839 7.04829H23.408C23.1195 7.04829 22.8858 7.28196 22.8858 7.5705V23.7224C22.8858 24.011 23.1195 24.2447 23.408 24.2447H28.2836C28.5721 24.2447 28.8058 24.011 28.8058 23.7224V7.5705C28.8058 7.2823 28.5721 7.04829 28.2839 7.04829ZM5.39813 7.04829H0.522211C0.233666 7.04829 0 7.28196 0 7.5705V23.7224C0 24.011 0.233666 24.2447 0.522211 24.2447H5.39813C5.68668 24.2447 5.92034 24.011 5.92034 23.7224V7.5705C5.92034 7.2823 5.68668 7.04829 5.39813 7.04829Z"
          fill="white"
        />
      </svg>
    ),
    text: "Stock List",
  },
];

export const usMarketLogos = [
  {
    id: 1,
    image: google,
  },
  {
    id: 2,
    image: nvidia,
  },
  {
    id: 3,
    image: apple,
  },
  {
    id: 4,
    image: asml,
  },
  {
    id: 5,
    image: adobe,
  },
];

// retirement plan page

export const retirementPlanPageCard = [
  {
    id: 1,
    image: RP1,
    heading: "Get a personalised plan",
    description:
      "From your needs and wants to your most coveted wishes, tell us about the goals that are important to you and your family. An advisor will help you build a personalised financial plan to help you.",
  },
  {
    id: 2,
    image: RP2,
    heading: "Lifetime income in retirement",
    description:
      "Annuities designed to help you save for retirement and efficiently turn those savings into income when needed.",
  },
  {
    id: 3,
    image: RP3,
    heading: "Identify and prioritise goals.",
    description: `Your online questionnaire helps you capture, prioritise, and categorise your short-or long-term goals. And your advisor will work with you on a financial plan to realise them. But your plan is a living document that can evolve as life changes.`,
  },
  {
    id: 4,
    image: RP4,
    heading: "Check your progress",
    description:
      "You can always monitor your portfolio progress in our Dashboard.",
  },
  {
    id: 5,
    image: RP5,
    heading: "Get guidance when needed",
    description:
      "If you experience a significant life event or financial changes, or if you want reassurance during market uncertainty, you can connect with our ticket support system from our dashboard by mentioning your retirement advisory account.",
  },
  {
    id: 6,
    image: RP6,
    heading: "Timing retirement",
    description:
      "Our experts help determine when to retire based on your current financial situation as well as your vision for the future.",
  },
  {
    id: 7,
    image: RP7,
    heading: "Budgeting",
    description: `Our experts design saving and spending plans to help maximise the likelihood of achieving
    your goals, whether preparing for or in retirement.
    Our experts help define your investment objectives`,
  },
  {
    id: 8,
    image: RP8,
    heading: "Relationship",
    description: `Your advisor works with you to gain a deep understanding of your broad financial
    situation, goals, time horizon, and risk appetite.`,
  },
];

export const retirementPlanPageCard2 = [
  {
    image: RP9,
    heading: "Increasing Life expectancy",
    description: `On average, lifespans in India are going up by 5 years every decade - and so is the risk of
  your outliving your savings.`,
  },
  {
    image: RP10,
    heading: "Inflation",
    description: `Long Term inflation in India has been around 6.5%. Petrol now cost more than 6 times
  than what it did when your parents were your age.`,
  },
  {
    image: RP11,
    heading: "Nuclear Family",
    description: `More than 70% of urban households now have only one couple.`,
  },
];
