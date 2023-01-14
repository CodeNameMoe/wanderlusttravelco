import React from "react";
import bg from "../assets/bg.mp4";

function Hero() {
  return (
    <div className="w-full h-screen">
      <video
        className="top-0 left-0 w-full h-full object-cover"
        src={bg}
        autoPlay
        loop
        muted
      />
      {/* script to allow background video to play in safari */}
      <script>document.getElementById('vid').play();</script>

      <div className="bg-black/30 absolute top-0 left-0 w-full h-full"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100] n-auto absolute p-4">
          <p>Explore the world with us</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Raw Beauty & Unapologetic Charm
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Off-the-beaten-path destinations and authentic cultural experiences
          </p>
          <button className="bg-white text-black">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
