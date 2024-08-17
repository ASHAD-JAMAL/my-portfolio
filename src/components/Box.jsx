import React from "react";
import { Tooltip } from "@material-tailwind/react";
import "../App.css";
function Box({ src, title }) {
  return (
   
      <div className="flex flex-col md:flex-row md:py-10">
         <Tooltip content={title}>
        <div className="bg-gradient-to-r from-black via-[#000e2a] to-[#0c1b44] w-[200px] h-[200px] border border-white rounded-3xl  flex items-center justify-center mt-5">
          <div className="w-[150px] h-[150px] flex items-center justify-center">
            <img src={src} className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
        </Tooltip>
      </div>
  );
}

export default Box;
