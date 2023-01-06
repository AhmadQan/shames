import React from "react";

import MainNav from "../organisms/MainNav";
import Sun from "../molecules/Sun";

export default function Hero() {
  return (
    <section className="h-screen">
      <MainNav />
      <div className="absolute h-2/3 w-full">
        <Sun />
      </div>
      <div className="flex flex-col p-10 w-screen h-1/2 gap-12 pt-12">
        <h1 className="font-Inter text-5xl font-semibold text-white z-10">
          Sun Markting Solution
        </h1>
        <p className="text-lg text-white">
          we helped over 300 small compines all over the world
        </p>
        <button className="bg-yellow w-36 h-16 rounded-xl shadow-md font-bold z-10">
          Call Now
        </button>
      </div>
    </section>
  );
}
