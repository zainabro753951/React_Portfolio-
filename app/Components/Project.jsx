let projectData = [
    {
        img: "/img/Project/1.jpg",
        icon: <IoCameraOutline/>,
        name: "Fronter Theme",
        discription: "UI \ UX Design"
    },
    {
        img: "/img/Project/2.jpg",
        icon: <IoCameraOutline/>,
        name: "Landrick Theme",
        discription: "Landing"
    },
    {
        img: "/img/Project/3.jpg",
        icon: <IoCameraOutline/>,
        name: "Valexy Theme",
        discription: "Landing"
    },
    {
        img: "/img/Project/4.jpg",
        icon: <IoCameraOutline/>,
        name: "Superex Theme",
        discription: "Landing"
    },
    {
        img: "/img/Project/5.jpg",
        icon: <IoCameraOutline/>,
        name: "Fronter Theme",
        discription: "UI \ UX Design"
    },
    {
        img: "/img/Project/6.jpg",
        icon: <IoCameraOutline/>,
        name: "Fronter Theme",
        discription: "UI \ UX Design"
    },
]

import React from "react";
import { IoCameraOutline } from "react-icons/io5";
const Project = () => {
  return (
    <div id="Projects" className="w-full min-h-screen text-center font-poppins not-italic py-16">
      <h1 className="text-2xl font-semibold">My Work & Projects</h1>
      <p className="text-gray-400 pb-10 pt-2">
        Obviously I'm a Web Designer. Web Developer with over 7 years of <br />
        experience. Experienced with all stages of the development.
      </p>
      <div className="grid grid-cols-3 text-start px-28 gap-9">
        {projectData.map((items) => {
            return (
                <div id="Phover" className="relative w-full h-[350px] rounded-xl overflow-hidden">
                    <img className="w-full h-full absolute" src={items.img} alt="" />
                    <div id="Phoverable" className="absolute transition-all duration-300 w-full h-[0%] bottom-0 bg-project-linear overflow-hidden  text-white flex items-end">
                        <p className="absolute text-2xl w-10 h-10 bg-[#F59E0B] flex justify-center items-center rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{items.icon}</p>
                        <div  className="absolute w-full h-fit pb-6 pl-6">
                            <h1 className="text-2xl font-semibold">{items.name}</h1>
                            <p>{items.discription}</p>
                        </div>
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default Project;
