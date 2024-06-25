"use client";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      alert("Email sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("There was an error sending the email:", error);
      alert("Failed to send email.");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="py-2 flex gap-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter Your Name"
            className="border w-full border-gray-400 px-3 py-2 outline-none rounded-lg"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter you email address"
            className="border w-full border-gray-400 py-2 px-3 outline-none rounded-lg"
          />
        </div>
        <div className="w-full ">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Subject"
            className="w-full border border-gray-400 py-2 px-3 outline-none rounded-lg"
          />
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="border w-full h-[200px] border-gray-400 py-2 px-3 outline-none rounded-lg"
            placeholder="Enter a Message"
          ></textarea>
        </div>
        <button
          className="bg-[#F59E0B] py-4 rounded-xl text-xl text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
