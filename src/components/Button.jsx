import React from "react";
import { IoMdReturnRight } from "react-icons/io";

export default function Button({title= "Start a Project"}) {
  return (
    <div className="w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between">
      <span className="text-sm font-medium">{title}</span>
      <IoMdReturnRight />
    </div>
  );
}
