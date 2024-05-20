import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Card({ width, start, para, hover}) {
  return (
    <div className={`bg-zinc-800 p-5 rounded-xl ${width} hover:${hover} min-h-[28rem] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex justify-between items center">
          <h3>One heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-10">Whatever Heading is</h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-6xl font-bold tracking-tight leading-none">
              Start Project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50 ">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <>
            <p className="text-sm text-zinc-400 font-medium ">
              Explore what drives our team
            </p>
          </>
        )}
      </div>
    </div>
  );
}
