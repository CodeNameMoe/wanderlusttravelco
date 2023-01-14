import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle(!toggle);
    if (!toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }

  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <h1 className="text-white font-bold text-2xl z-20">
        WanderlustTravelCo.
      </h1>
      <HiMenuAlt3
        className="z-20 text-white cursor-pointer"
        size={25}
        onClick={handleToggle}
      />
      <div
        className={
          toggle
            ? "ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"
        }
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center">
          <li className="font-bold text-3xl p-8">Home</li>
          <li className="font-bold text-3xl p-8">Locations</li>
          <li className="font-bold text-3xl p-8">Bookings</li>
          <li className="font-bold text-3xl p-8">Amenites</li>
          <li className="font-bold text-3xl p-8">Rooms</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
