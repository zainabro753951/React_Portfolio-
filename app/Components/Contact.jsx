import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Home from "./Form";
const Contact = () => {
  return (
    <div id="Contact" className="w-full min-h-screen font-poppins not-italic text-center bg-[#F9FAFB] py-24">
      <h1 className="text-2xl font-semibold pb-3">Get In Touch!</h1>
      <p className="text-gray-400 pb-10">
        Obviously I'm a Web Designer. Web Developer with over 7 years of
        <br />
        experience. Experienced with all stages of the development.
      </p>
      <div className="grid grid-cols-3 px-24 text-start gap-8 place-items-center">
        <div className="col-span-2 w-full h-full py-7 p-3 bg-white border border-gray-300 rounded-lg">
        <Home/>
        </div>
        <div>
          <div className="flex gap-5">
            <FaPhone className="text-xl" />
            <div>
              <h1 className="text-2xl font-semibold">Phone</h1>
              <p className="text-gray-400 pt-2">+152 534-468-854</p>
            </div>
          </div>
          <div className="flex gap-5 py-4">
            <MdEmail className="text-2xl" />
            <div>
              <h1 className="text-2xl font-semibold">Email</h1>
              <p className="text-gray-400 pt-2">zainabro886@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-5">
            <IoLocationSharp className="text-3xl" />
            <div>
              <h1 className="text-2xl font-semibold">Address</h1>
              <p className="text-gray-400 pt-2">Behrani Muhallah Tando Muhammad Khan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
