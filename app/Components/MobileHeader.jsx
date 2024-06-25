"use client";
import React, { useState, useEffect } from "react";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const { Poppins } = require("next/font/google");
const MobileHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0.5) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(scroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`fixed w-full z-50 font-poppins not-italic xs:flex lg:hidden items-center justify-between px-16 py-3 ${scrolled ? "bg-white" : "bg-transparent"}`}>
        <div>
            <h1 className="text-3xl font-bold">Dennis.</h1>
        </div>
        <div className="flex items-center text-2xl gap-4">
            <p className="p-3 text-white transition-all duration-300 hover:bg-[de7e07] bg-[#F59E0B] rounded-full"><FaTiktok/></p>
            <p className="p-3 text-white transition-all duration-300 hover:bg-[de7e07] bg-[#F59E0B] rounded-full"><FaFacebookF/></p>
            <p className="p-3 text-white transition-all duration-300 hover:bg-[de7e07] bg-[#F59E0B] rounded-full"><FaInstagram/></p>
            <div className="flex flex-col gap-2 w-[30px]">
                <div className="w-full h-1 rounded-full bg-black"></div>
                <div className="w-full h-1 rounded-full bg-black"></div>
                <div className="w-full h-1 rounded-full bg-black"></div>
            </div>
        </div>
    </div>
  )
};

export default MobileHeader;
