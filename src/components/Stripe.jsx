import React from "react";

export default function Stripe({val}) {
    return (
        // margin here please
        <div className="w-[16.66%] wrap px-10 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 flex justify-between align-center">
            <img src={val.url} alt="" />
            <span className="font-semibold">{val.number}</span>
        </div>
    )
}