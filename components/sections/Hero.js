import React from "react";

import MainNav from "../organisms/MainNav";

import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="h-screen">
      <MainNav />
      <div className="h-5/6 w-2/3 z-20 absolute top-0 ">
        <Spline scene="https://prod.spline.design/2yBeogvUluorjGaw/scene.splinecode" />
      </div>
      <div className="flex flex-col p-10 w-screen">
        <h1 className="font-Inter text-5xl font-semibold text-white">
          Sun Markting Solution
        </h1>
      </div>
    </section>
  );
}
