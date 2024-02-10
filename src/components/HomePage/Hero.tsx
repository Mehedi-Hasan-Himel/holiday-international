import React from "react";
// add google font poppins
// add google font poppins

export default function Hero() {
  return (
    <section>
      {/* className="md:h-screen" */}
      <video
        className="w-full object-cover	"
        // sm:h-screen
        autoPlay
        loop
        muted
        playsInline
        src="/videos/hero.mp4"
      />
      <div className=" absolute top-0 mt-[-200px] flex h-full w-full flex-col items-center justify-center gap-1 sm:mt-[-150px] md:mt-[-150px] md:gap-5  lg:mt-[-100px]">
        <h1 className="custom-hero-title text-3xl font-semibold text-white sm:text-6xl md:text-6xl lg:text-[5.8rem]">
          Holiday International
        </h1>
        <div className="flex justify-evenly gap-5 text-2xl text-white  sm:text-3xl md:gap-10 ">
          <span> Dream </span>
          <span> Explore </span>
          <span> Luxury </span>
        </div>
        <h2 className="text-2xl text-white sm:text-3xl ">
          Your tour, Your Dream Our Aim
        </h2>
      </div>
    </section>
  );
}
