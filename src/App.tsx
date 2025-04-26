import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import "./index.css";
import Mercury from "./assets/MercuryFirst.png";

function App() {
  return (
    <div className="">
      <div className="w-full h-[77px] bg-[#070724] flex justify-around content-center gap-[594px] px-8 pt-[22px] text-[#FFF] border-b-white">
        <h1 className="font-Antonio font-normal text-[28px] ">THE PLANETS</h1>
        <div className="font-Spartan">
          <Navigation />
        </div>
      </div>
      <div className="w-full flex justify-around content-center gap-[300px] px-[165px] pt-[126px]">
        <div className="">
          <img className="mx-[170px] mt-[116px]" src={Mercury} alt="Mercury" />
        </div>
        <div className="pb-6">
          <h1 className="font-normal text-[80px]">MERCURY</h1>
          <p className="font-normal text-[14px] font-Spartan">
            Mercury is the smallest planet in the Solar System and the closest
            to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
            shortest of all the Sun's planets. Mercury is one of four
            terrestrial planets in the Solar System, and is a rocky body like
            Earth.
          </p>
          <h3 className="font-Spartan font-bold text-[14px] ">
            Source :{" "}
            <span className="underline decoration-solid ">Wikipedia</span>
          </h3>
          <div className="">
            <button className=""></button>
            <button className=""></button>
            <button className=""></button>
          </div>
        </div>
        <footer className=""></footer>
      </div>
    </div>
  );
}

export default App;
