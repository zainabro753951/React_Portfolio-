"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
const BackArrow = () => {
    const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY < 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Link href="/" className={`bg-[#F59E0B] rounded-full flex justify-center items-center text-white text-2xl w-12 h-12 fixed bottom-10 right-10 z-50 ${scrolled ? "hidden" : ""}`}>
        <FaArrowUpLong />
      </Link>
    </>
  );
};

export default BackArrow;
