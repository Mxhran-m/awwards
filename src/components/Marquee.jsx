import React from "react";

export default function Marquee({imageurls}) {
    
    return (
        <div className="flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden">
            {imageurls.map((url, index) => <img key={index} src={url} className="" />)}
            {imageurls.map((url, index) => <img key={index} src={url} className="" />)}
        </div>
    )
}