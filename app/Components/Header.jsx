"use client";
import React, { useState, useEffect } from "react";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const { Poppins } = require('next/font/google');
function Header() {
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
    <nav
      className={`fixed xs:hidden z-50 lg:flex w-full font-normal font-poppins justify-between items-center py-5 px-16 top-0 transition-all duration-300 ${
        scrolled === true ? "bg-white shadow-md transition-all duration-300" : "bg-transparent"
      }`}
    >
      <div>
        <h1 className="text-2xl font-poppins font-bold">DENNIS.</h1>
      </div>
      <div className="flex items-center w-[70%] gap-10">
        <div className="flex w-[100%] font-[600] justify-between">
          {[
            "Home",
            "About Me",
            "Services",
            "Experience",
            "Projects",
            "Blogs",
            "Contact me",
          ].map((items, index) => {
            return <a href={`${index === 0 ? "#Home" : ""} ${index === 1 ? "#About" : ""} ${index === 2 ? "#Service" : ""} ${index === 3 ? "#Experience" : ""} ${index === 4 ? "#Projects" : ""} ${index === 5 ? "#Blogs" : ""} ${index === 6 ? "#Contact" : ""}`}>{items}</a>;
          })}
        </div>
        <div className="flex items-center gap-3">
            {[<FaTiktok/>, <FaFacebookF/>, <FaInstagram/>].map((item) => {
                return (
                    <a className={`py-2 px-2 rounded-full border text-sm border-gray-400 transition-all duration-300 ${scrolled ? "bg-[#F59E0B] border-transparent text-white" : "text-black bg-[#F9FAFB]"}`} href="#" target="_blank">{item}</a>
                )
            })}
        </div>
      </div>
    </nav>
  );
}

export default Header;
