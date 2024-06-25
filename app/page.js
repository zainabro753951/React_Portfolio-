import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Experience from "./Components/Experience";
import Project from "./Components/Project";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import BackArrow from "./Components/BackArrow";
import MobileHeader from "./Components/MobileHeader";

const page = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <MobileHeader/>
      <Hero />
      <div className=" container mx-auto w-full min-h-screen py-28">
        <About />
      </div>
      <Services/>
      <Experience/>
      <Project/>
      <Blogs/>
      <Contact/>
      <Footer/>
      <BackArrow/>
    </div>
  );
};

export default page;
