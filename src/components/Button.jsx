import React from "react";
import { IoMdReturnRight } from "react-icons/io";

export default function Button() {
    return (
        <div className="min-w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between">
            <span className="text-sm font-medium">Start a Project</span>
            <IoMdReturnRight />
        </div>
    )
}