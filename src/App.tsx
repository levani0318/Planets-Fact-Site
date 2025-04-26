import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import "./index.css";

function App() {
  return (
    <div className="">
      <div className="w-full h-[77px] bg-[#070724] flex justify-around content-center gap-[594px] px-8 pt-[22px] text-[#FFF] border-b-white">
        <h1 className="font-Antonio font-normal text-[28px] ">THE PLANETS</h1>
        <div className="font-Spartan">
          <Navigation />
        </div>
      </div>
      <div className="">
        <div className="">
          <img src={} alt="Mercury" />
        </div>
        <div className="">
          <h1 className="">MERCURY</h1>
          <p className="">
            Mercury is the smallest planet in the Solar System and the closest
            to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
            shortest of all the Sun's planets. Mercury is one of four
            terrestrial planets in the Solar System, and is a rocky body like
            Earth.
          </p>
          <h3 className="">
            Source : <span className="">Wikipedia</span>
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
