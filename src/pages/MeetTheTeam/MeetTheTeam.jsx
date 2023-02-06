import React , {useEffect} from "react";
import Mtt from "../../assets/Mtt.png";
import Mtt1 from "../../assets/Mtt1.png";
import Mtt2 from "../../assets/Mtt2.png";
import Mtt3 from "../../assets/Mtt3.png";
import Mtt4 from "../../assets/Mtt4.png";
import Mtt5 from "../../assets/Mtt5.png";
import Mtt6 from "../../assets/Mtt6.png";
import TeamCardH from "../../components/TeamCard/TeamCardH";
import TeamCardV from "../../components/TeamCard/TeamCardV";
const MeetTheTeam = () => {
  useEffect(()=>{
    window.scroll(0,0)
  })
  return (
    <>
      <div className="">
        <img
          className="h-[40vh] md:h-[70vh] w-screen object-cover overflow-hidden bg-center"
          src={Mtt}
          alt=""
        />
        <div className="p-4 md:p-8 lg:p-14 absolute flex flex-col justify-center items-center z-10 top-[20vh] md:top-[28vh] lg:top-[35vh] bg-black opacity-80 w-[350px] md:w-[600px] lg:w-[700px]">
          <h1 className="lg:text-7xl md:text-6xl text-3xl font-sans font-bold text-white">
            Meet the <span className="text-darkBlue">Team!</span>{" "}
          </h1>
          <h6 className="font-main font-light text-xl md:text-2xl lg:text-3xl text-white">
            Meet the team who worked hard to make life easier for you!
          </h6>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row flex-wrap p-5 justify-center items-center bg-secondary">
        <TeamCardV
          name="Jake Lockley"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Nibh cras pulvinar mattis nunc. Urna porttitor rhoncus dolor purus non enim. Non 
          pulvinar neque laoreet suspendisse. Massa enim nec dui nunc mattis enim ut. Netus et malesuada fames ac 
          turpis egestas. Vel turpis nunc eget lorem dolor sed viverra ipsum. Malesuada proin libero nunc consequat 
          interdum. Arcu felis bibendum ut tristique et egestas. Vitae nunc sed velit dignissim sodales ut eu. Amet 
          nisl purus in mollis. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Pulvinar elementum integer 
          enim neque volutpat ac tincidunt."
          text2="

          Odio euismod lacinia at quis risus sed. Orci nulla pellentesque dignissim enim sit Odio euismod lacinia at 
          quis risus sed. Orci nulla pellentesque dignissim enim sit Odio euismod lacinia at quis risus sed. Orci nulla
           pellentesque dignissim enim sit "
          image={Mtt1}
        />
        <TeamCardH
          name="Jake Lockley"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Nibh cras pulvinar mattis nunc. Urna porttitor rhoncus dolor purus non enim. Non 
        "
          text2="

          Odio euismod lacinia at quis risus sed. Orci nulla pellentesque dignissim enim sit Odio euismod lacinia at 
          quis risus sed. Orci nulla pellentesque dignissim enim sit Odio euismod lacinia at quis risus sed. Orci nulla
           pellentesque dignissim enim sit "
          image={Mtt2}
        />
        <TeamCardH
          name="Jake Lockley"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Nibh cras pulvinar mattis nunc. Urna porttitor rhoncus dolor purus non enim. Non 
        "
          text2="

          Odio euismod lacinia at quis risus sed. Orci nulla pellentesque dignissim enim sit Odio euismod lacinia at 
          quis risus sed. Orci nulla pellentesque dignissim enim sit Odio euismod lacinia at quis risus sed. Orci nulla
           pellentesque dignissim enim sit "
          image={Mtt3}
        />
        <TeamCardV
          name="Jake Lockley"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Nibh cras pulvinar mattis nunc. Urna porttitor rhoncus dolor purus non enim. Non 
          pulvinar neque laoreet suspendisse. Massa enim nec dui nunc mattis enim ut. Netus et malesuada fames ac 
          turpis egestas. Vel turpis nunc eget lorem dolor sed viverra ipsum. Malesuada proin libero nunc consequat 
          interdum. Arcu felis bibendum ut tristique et egestas. Vitae nunc sed velit dignissim sodales ut eu. Amet 
          nisl purus in mollis. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Pulvinar elementum integer 
          enim neque volutpat ac tincidunt."
          text2="

          Odio euismod lacinia at quis risus sed. Orci nulla pellentesque dignissim enim sit Odio euismod lacinia at 
          quis risus sed. Orci nulla pellentesque dignissim enim sit Odio euismod lacinia at quis risus sed. Orci nulla
           pellentesque dignissim enim sit "
          image={Mtt4}
        />

        <TeamCardV
          name="Jake Lockley"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua"
          text2="

          Odio euismod lacinia at quis risus sed. Orci nulla pellentesque dignissim enim sit Odio euismod lacinia at 
          quis risus sed. Orci nulla pellentesque dignissim enim sit Odio euismod lacinia at quis risus sed. Orci nulla
           pellentesque dignissim enim sit "
          image={Mtt5}
        />
        <TeamCardH
          name="Jake Lockley"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Nibh cras pulvinar mattis nunc. Urna porttitor rhoncus dolor purus non enim. Non 
        "
          text2="

          Odio euismod lacinia at quis risus sed. Orci nulla pellentesque dignissim enim sit Odio euismod lacinia at 
          quis risus sed. Orci nulla pellentesque dignissim enim sit Odio euismod lacinia at quis risus sed. Orci nulla
           pellentesque dignissim enim sit "
          image={Mtt6}
        />
      </div>
      <div className="flex flex-col items-center justify-center ">
        <p className="lg:w-2/3 font-main font-black italic text-xl text-center md:text-2xl ">“<span className="font-light">quote quote quote quote quote quote quote quote quote quote quote 
quote quote quote quote quote quote quote quote quote quote quote</span>” </p>
        <h4 className="text-black text-2xl font-main font-normal mt-2">Name of who said it</h4>

      </div>
    </>
  );
};

export default MeetTheTeam;
