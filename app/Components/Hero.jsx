let heroData = [
  {
    react: "/img/React-05.png",
    name: "Zain Abro",
    self: "I'm",
    discription:
      "Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.",
    btn: "Hire me",
    img: "/img/Angular.png",
  },
];

import React from "react";
import Auto_typed from "./Typed";

const Hero = () => {
  return (
    <div id="Home" className="w-full min-h-[100vh] lg:px-[20%] flex justify-center bg-hero-linear">
      <div className="lg:max-w-full h-full flex justify-center flex-col overflow-y-hidden items-center mt-40">
        <div className="w-[80%] h-fit text-center flex  flex-col gap-4 font-poppins not-italic items-center">
          {heroData.map((items) => {
            return (
              <>
                <img
                  className="w-[50px] animate-[spin_20s_linear_infinite] "
                  src={items.react}
                  alt=""
                />
                <h1 className="text-4xl font-bold">{items.name}</h1>
                <Auto_typed />
                <p className="text-gray-400 tracking-wide">
                  {items.discription}
                </p>
                <a
                  className="py-2 px-9 rounded-md bg-[#f59e0b] transition-all duration-300 text-white hover:bg-[#DE7E07]"
                  href="#"
                >
                  {items.btn}
                </a>
                <img
                  className="w-[50px] relative -top-28 -right-64 animate-[spin_20s_linear_infinite]"
                  src={items.img}
                  alt=""
                />
              </>
            );
          })}
        </div>
        <div className="w-[80%] relative -bottom-10 h-full">
          <img
            className="w-[70px] relative -left-10 top-20 animate-[spin_20s_linear_infinite]"
            src="/img/Vue-JS-01.png"
            alt=""
          />
          <div className="py-4 absolute rounded-lg top-60 shadow-md -left-10 z-20 px-8 bg-white">
            <h1 className="text-xl font-semibold py-2">Web Designer</h1>
            <p className="text-gray-400">(2016 - 2024)</p>
          </div>
          <div className="py-4 absolute rounded-lg bottom-20 shadow-md -right-10 z-20 px-12 bg-white">
            <h1 className="text-xl font-semibold py-2">Freelancer</h1>
            <p className="text-gray-400">(2016 - 2024)</p>
          </div>
          <div className="w-[500px] rounded-full h-[500px] relative -bottom-32 bg-[#F59E0B] mx-auto"></div>
          <img
            className="absolute top-0 h-full w-full"
            src="/img/me.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
