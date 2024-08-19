import React from "react";
import character from "../assets/robo.png";
import "../App.css";
function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-4 md:p-8 lg:p-12 space-y-8 md:space-y-0 md:space-x-8">
      <div className="flex flex-col items-center w-full md:w-1/2">
        <img
          src={character}
          alt="Character"
          className="w-40 h-40 md:w-72 md:h-72 lg:w-80 lg:h-80"
        />
      </div>
      <div className="flex flex-col items-center w-full md:w-1/2 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 flex items-center gap-2">
          <span className="text-transparent uppercase outline-text">Ashad</span>
          <span className="text-white uppercase">Jamal</span>
        </h1>
        <div className="bg-gradient-to-r from-black via-[#000e2a] to-[#0c1b44] text-white font-bold text-xl md:text-2xl lg:text-3xl p-4 rounded-full">
          <p className="flex items-center">
            Web Developer
            <span className="bg-white w-2 h-2 rounded-full mx-3 inline-block"></span>
            UI Designer
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
