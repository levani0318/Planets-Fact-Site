import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="flex justify-around content-center gap-[594px] px-8 pt-[22px] bg-[#070724] w-full ">
      <h1 className="font-Antonio font-normal text-[28px] text-[28px] text-[#FFFFFF]">
        THE PLANETS
      </h1>
      <div className="flex justify-around gap-[33px]">
        <Navigation />
        <h1>Hello</h1>
      </div>
    </div>
  );
}

export default App;
