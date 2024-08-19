import React from "react";
import { Tooltip } from "@material-tailwind/react";
import "../App.css";

function Box({ src, title }) {
  return (
    <div className="flex justify-center my-5">
      <Tooltip content={title}>
        <div className="bg-gradient-to-r from-black via-[#000e2a] to-[#0c1b44] w-[150px] h-[150px] sm:w-[175px] sm:h-[175px] md:w-[200px] md:h-[200px] border border-white rounded-full flex items-center justify-center mx-auto">
          <div className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[150px] md:h-[150px] flex items-center justify-center rounded-full overflow-hidden">
            <img src={src} className="w-full h-full object-cover" />
          </div>
        </div>
      </Tooltip>
    </div>
  );
}

export default Box;
