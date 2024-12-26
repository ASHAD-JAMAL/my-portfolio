import React from "react";
import { Tooltip } from "@material-tailwind/react";
import "../App.css";

function Box({ src, title }) {
  return (
    <div className="flex justify-center my-5">
      <Tooltip content={title}>
        <div className="bg-gradient-to-r from-black via-[#000e2a] to-[#0c1b44] w-[80px] h-[80px] md:w-[120px] md:h-[120px]  border border-white rounded-full flex items-center justify-center mx-auto">
          <div className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] flex items-center justify-center rounded-full overflow-hidden">
            <img src={src} className="w-full h-full object-cover" />
          </div>
        </div>
      </Tooltip>
    </div>
  );
}

export default Box;
