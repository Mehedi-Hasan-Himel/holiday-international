import React from "react";
// add google font poppins
// add google font poppins

export default function Hero() {
  return (
    <section className="">
      <video
        autoPlay
        loop
        muted
        plays-inline
        className="w-full h-screen object-cover	"
        src="/videos/hero.mp4"
      />
      <div className=" absolute w-full h-full top-0 flex flex-col justify-center items-center gap-5">
        <h1 className="text-8xl font-semibold text-white hero-title">
          Holiday International
        </h1>
        <div className="flex gap-10 text-white text-xl justify-between ">
          <span> Dream </span>
          <span> Explore </span>
          <span> Luxury </span>
        </div>
        <h2 className="text-white text-3xl">Your tour, Your Dream Our Aim</h2>
      </div>
    </section>
  );
}
