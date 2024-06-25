let blogData = [
  {
    img: "/img/Blogs/img1.jpg",
    title: "Giglink: Tailwind CSS NFT Marketplace Template",
    discription:
      "The phrasal sequence of the is now so that many campaign and benefit",
    link: "Read More",
    icons: <FaArrowRightLong id="Shoverable" className="transition-all duration-300" />,
  },
  {
    img: "/img/Blogs/img2.jpg",
    title: "Techwind: Tailwind CSS Multipurpose Template",
    discription:
      "The phrasal sequence of the is now so that many campaign and benefit",
    link: "Read More",
    icons: <FaArrowRightLong id="Shoverable" className="transition-all duration-300" />,
  },
  {
    img: "/img/Blogs/img3.jpg",
    title: "Upwind: Tailwind CSS Landing Page Template",
    discription:
      "The phrasal sequence of the is now so that many campaign and benefit",
    link: "Read More",
    icons: <FaArrowRightLong id="Shoverable" className="transition-all duration-300" />,
  },
];

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Blogs = () => {
  return (
    <div id="Blogs" className="w-full min-h-screen font-poppins not-italic text-center py-24">
      <h1 className="text-2xl font-semibold pb-3">Blogs or News</h1>
      <p className="text-gray-400">
        Obviously I'm a Web Designer. Web Developer with over 7 years of
        <br />
        experience. Experienced with all stages of the development.
      </p>
      <div className="grid grid-cols-3 text-start px-12 gap-6">
        {blogData.map((items) => {
          return (
            <div className="border border-gray-300 rounded-lg overflow-hidden mt-14">
              <div>
                <img src={items.img} alt="" />
              </div>
              <div className="p-5">
                <h1 className="text-xl font-semibold pb-2">{items.title}</h1>
                <p className="text-gray-400 pb-3">{items.discription}</p>
                <a href="#" className="text-lg mb-4 flex items-center gap-1 transition-all duration-300" id="ServiceHover">
                  {items.link} {items.icons}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
