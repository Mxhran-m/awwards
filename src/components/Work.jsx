import React from "react";

export default function Work() {

const images = [
    { url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top: "50%", left: "50%", isActive: true },
    { url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top: "55%", left: "48%", isActive: false },
    { url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top: "45%", left: "53%", isActive: false },
    { url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", top: "57%", left: "51%", isActive: false },
    { url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top: "50%", left: "53%", isActive: false },
    { url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", top: "60%", left: "55%", isActive: false }
]

    return(
        // a little bit of margin here
        <div className="w-full">
            <div className="relative max-w-screen-xl mx-auto text-center">
                {/* 30vw hain */}
                <h1 className="text-[41vw] leading-none select-none font-medium">work</h1>
                <h4 className="text-[1.3vw] font-light text-zinc-400">Web Design, Webflow Development, Creative Development</h4>
                <div className="w-full h-full absolute top-0">
                    {images.map((elem, index) =>(elem.isActive && <img src={elem.url} style={{top: elem.top, left: elem.left}} className="absolute -translate-x-[50%] -translate-y-[50%] w-72 rounded-lg" alt="" />))}
                </div>
            </div>
        </div>
    )
}