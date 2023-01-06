import React from "react";

function MainNav() {
  return (
    <nav className="flex px-10 py-5 justify-between h-auto shadow-md bg-yellowDarkSeeThrow">
      <button className="font-semibold text-grayLight font-Inter">Home</button>
      <button className="font-semibold text-grayLight font-Inter">
        Services
      </button>
      <button className="font-semibold text-grayLight font-Inter">
        Learning
      </button>
    </nav>
  );
}

export default MainNav;
