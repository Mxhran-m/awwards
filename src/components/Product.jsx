import React, { useState } from "react";
import Button from "./Button";

export default function Product({ val, mover, count }) {
  const colours = ["bg-red-500", "bg-green-500", "bg-voilet-400", "bg-sky-400"];

  const [isHovered, setIsHovered] = useState(false);
  const [bgcolorIndex, setbgcolorIndex] = useState(0);

  const handleMouseEnter = () => {
    mover(count);
    setIsHovered(true);
    setbgcolorIndex(bgcolorIndex);
  };

  const handleMouseleave = () => {
    setIsHovered(false);
    setbgcolorIndex(prev => prev + 1)
  };

  return (
    <div
      className={`w-full py-20 h-[23rem] text-white ${isHovered ? colours[bgcolorIndex] : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseleave}
    >
      <div
        onMouseEnter={() => {
          mover(count);
        }}
        className="max-w-screen-xl mx-auto flex items-center justify-between"
      >
        <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
        <div className="w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className="flex items-center gap-5">
            {val.live && <Button title="Live Website" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}
