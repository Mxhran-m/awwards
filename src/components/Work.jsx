import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Work() {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "55%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "57%",
      left: "51%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "50%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "60%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImages((prev) => 
        prev.map((item, index) => 
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }
      switch (Math.floor(data * 100)) {
        case 0:
          imagesShow([]);
          break;
        case 1:
          imagesShow([0]);
          break;
        case 2:
          imagesShow([0, 1]);
          break;
        case 3:
          imagesShow([0, 1, 2]);
          break;
        case 4:
          imagesShow([0, 1, 2, 3]);
          break;
        case 5:
          imagesShow([0, 1, 2, 3, 4]);
          break;
        case 6:
          imagesShow([0, 1, 2, 3, 4, 5]);
          break;
      }
  });

  return (
    // a little bit of margin here
    <div className="w-full">
      <div className="relative max-w-screen-xl mx-auto text-center">
        {/* 30vw hain */}
        <h1 className="text-[41vw] leading-none select-none font-medium">
          work
        </h1>
        <h4 className="text-[1.3vw] font-light text-zinc-400">
          Web Design, Webflow Development, Creative Development
        </h4>
        <div className="w-full h-full absolute top-0">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                  className="absolute -translate-x-[50%] -translate-y-[50%] w-72 rounded-lg"
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}
