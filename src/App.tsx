import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import "./index.css";
import Mercury from "./assets/MercuryFirst.png";

function App() {
  return (
    <div className="">
      <div className="w-full bg-[#070724] flex justify-around content-center gap-[594px] px-8 pt-[22px] text-[#FFF] border-b-white">
        <h1 className="font-Antonio font-normal text-[28px] ">THE PLANETS</h1>
        <div className="font-Spartan">
          <Navigation />
        </div>
      </div>
      <div className="w-full flex justify-around gap-[300px] px-[165px] pt-[126px] bg-[#070724] text-[#fff]">
        <div className="">
          <img
            className="w-[290px] h-[290px] ml-[170px] mr-[300px] mt-[116px]"
            src={Mercury}
            alt="Mercury"
          />
        </div>
        <div className="flex flex-col justify-between content-start gap-[23px]">
          <h1 className="font-normal text-[80px] uppercase">MERCURY</h1>
          <p className="w-[350px] h-[150px] font-normal text-[14px] font-Spartan leading-[25px]">
            Mercury appears to have a solid silicate crust and mantle overlying
            a solid, iron sulfide outer core layer, a deeper liquid core layer,
            and a solid inner core. The planet's density is the second highest
            in the Solar System at 5.427 g/cm3 , only slightly less than Earth's
            density.
          </p>
          <h3 className="w-[164px] font-Spartan font-bold text-[14px] pb-[16px]">
            Source :{" "}
            <span className="underline decoration-solid cursor-pointer">
              Wikipedia
            </span>
          </h3>
          <div className="flex flex-col justify-between items-start content-start gap-[16px] uppercase font-Spartan font-bold leading-[25px] text-[12px] tracking-[2.5px]">
            <button className="w-[350px] border-[1px] border-white py-3 cursor-pointer flex flex-row content-start pl-[28px]">
              01
              <span className="pl-[28px]">OVERVIEW</span>
            </button>
            <button className="w-[350px] border-[1px] border-white py-3 bg-[#419EBB] cursor-pointer flex flex-row content-start pl-[28px]">
              02 <span className="pl-[28px]">INTERNAL STRUCTURE</span>
            </button>
            <button className="w-[350px] border-[1px] border-white py-3 cursor-pointer flex flex-row content-start pl-[28px]">
              03<span className="pl-[28px]">SURFACE GEOLOGY</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-around content-center gap-[30px] px-[135px] bg-[#070724] text-[#fff] pt-[87px] pb-[56px] uppercase">
        <div className="w-[255px] border-[1px] --tw-border-opacity-20 border-white pl-[23px] py-[20px]">
          <h5 className="upercase -Spartan font-bold text-[11px] leading-[25px] tracking-[1px] opacity-50">
            rotation time
          </h5>
          <h3 className="upercase font-normal text-[40px] tracking-[-1.5px] leading-[100%] py-[4px]">
            58.6 days
          </h3>
        </div>
        <div className="upercase w-[255px] border-[1px] --tw-border-opacity-20 border-white pl-[23px] py-[20px]">
          <h5 className="upercase font-Spartan font-bold text-[11px] leading-[25px] tracking-[1px] opacity-50">
            revolution time
          </h5>
          <h3 className="upercase font-normal text-[40px] tracking-[-1.5px] leading-[100%] py-[4px]">
            87.97days
          </h3>
        </div>
        <div className="w-[255px] border-[1px] --tw-border-opacity-20 border-white pl-[23px] py-[20px]">
          <h5 className="upercase font-Spartan font-bold text-[11px] leading-[25px] tracking-[1px] opacity-50">
            radius
          </h5>
          <h3 className="upercase font-normal text-[40px] tracking-[-1.5px] leading-[100%] py-[4px]">
            2,439.7km
          </h3>
        </div>
        <div className="uppercase w-[255px] border-[1px] --tw-border-opacity-20 border-white pl-[23px] py-[20px]">
          <h5 className="font-Spartan font-bold text-[11px] leading-[25px] tracking-[1px] opacity-50">
            average temp
          </h5>
          <h3 className="font-normal text-[40px] tracking-[-1.5px] leading-[100%] py-[4px]">
            430C
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
