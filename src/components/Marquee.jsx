import React from "react";

export default function Marquee({imageurls}) {
    
    return (
        <div className="flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden">
            {imageurls.map(url => <img src={url} className="" />)}
            {imageurls.map(url => <img src={url} className="" />)}
        </div>
    )
}