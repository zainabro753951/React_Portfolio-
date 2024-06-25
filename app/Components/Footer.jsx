import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="w-full flex justify-between py-7 font-poppins not-italic items-center px-20 bg-[#192132] text-white">
      <div>
        <h1 className="text-2xl font-bold">logo</h1>
      </div>
      <div>
        <p>&copy; 2024 Dennis. Design & Develop with <span className="text-[red]">❤</span> by Shreethemes.</p>
      </div>
      <div className="flex gap-2">
        <div className="p-2 transition-all duration-300 hover:bg-[#F59E0B] rounded-lg text-xl"><FaLinkedin /></div>
        <div className="p-2 transition-all duration-300 hover:bg-[#F59E0B] rounded-lg text-xl"><FaFacebook /></div>
        <div className="p-2 transition-all duration-300 hover:bg-[#F59E0B] rounded-lg text-xl"><FaGithub /></div>
        <div className="p-2 transition-all duration-300 hover:bg-[#F59E0B] rounded-lg text-xl"><RiInstagramFill /></div>
      </div>
    </div>
  );
};

export default Footer;
