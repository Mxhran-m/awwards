import React from "react";

export default function Footer() {
  return (
    <div className="max-w-screen-xl mx-auto p-5 pb-9 flex justify-between items-center">
      <div>
        {[
          "Privacy Policy",
          "Cookie Policy",
          "Impressum",
          "Terms",
          "Webflow Agency",
        ].map((elem, index) => {
          return (
            <a href="#" className="mr-4 text-zinc-400 text-light text-sm">
              {elem}
            </a>
          );
        })}
      </div>
      <div>
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />
      </div>
    </div>
  );
}
