import React from "react";

const About = () => {
  return (
    <>
      <section id="About">
        <div className="grid xs:grid-cols-2 w-full h-full pb-10 gap-4 items-center font-poppins not-italic">
          <div className="lg:relative w-full h-full overflow-hidden">
            <div className="py-3 lg:absolute bottom-20 right-5 rounded-lg px-8 bg-white shadow-lg">
              <h1 className="text-lg font-semibold">Web Designer</h1>
              <p className="flex text-gray-400 items-center gap-1">
                <span className="text-2xl font-extrabold text-[#f59e0b]">
                  180+
                </span>{" "}
                Years
              </p>
              <p className="text-gray-400">Experience</p>
            </div>
            <img
              className="w-[70%] mx-auto rounded-full h-full object-cover"
              src="/img/About/ab2.jpg"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-2xl font-semibold  py-5">
              I'm a Passionate Web Designer
            </h1>
            <p className="text-gray-400">
              Obviously I'm a Web Designer. Web Developer with over 7 years of
              experience. Experienced with all stages of the development cycle
              for dynamic web projects. The as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <br />
            <p className="text-gray-400 pb-5">
              I'm a professional web designer. My motive is to build a best web
              design with my all years of experience.
            </p>
            <a
              className="py-3 rounded-md border border-[#FEB640] text-[#FEB640] transition-all duration-300 hover:bg-[#FEB640] hover:text-white px-6 bg-[#FEF5E6]"
              href="#"
            >
              See Work
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-10 font-poppins text-center not-italic">
          <h1 className="text-3xl py-3 font-semibold">Hobies and Expertise</h1>
          <p className="mb-10 text-gray-400">
            Obviously I'm a Web Designer. Web Developer with over 7 years of
            <br />
            experience. Experienced with all stages of the development.
          </p>
          <div className="grid grid-cols-4 px-20 gap-7 py-5">
            {expertiseData.map((items) => {
              return (
                <div
                  id="hover"
                  className="flex px-3 py-3 gap-2 items-center border border-gray-300/30 rounded-lg"
                >
                  <div
                    id="hoverable"
                    className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500 relative"
                  >
                    {items.img}
                  </div>
                  <h1 className="text-xl font-semibold">{items.name}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

let expertiseData = [
  {
    img: (
      <svg
        className="absolute rotate-45"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-5 w-5"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    name: "Developing",
  },
  {
    img: (
      <svg
        className="absolute rotate-45"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-5 w-5"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <rect x="9" y="9" width="6" height="6"></rect>
      </svg>
    ),
    name: "Mac OS",
  },
  {
    img: (
      <svg
        className="absolute rotate-45"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-5 w-5"
      >
        <polygon points="23 7 16 12 23 17 23 7"></polygon>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
      </svg>
    ),
    name: "Cinema",
  },
  {
    img: (
      <svg
        className="absolute rotate-45"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-5 w-5"
      >
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
        <line x1="6" y1="1" x2="6" y2="4"></line>
        <line x1="10" y1="1" x2="10" y2="4"></line>
        <line x1="14" y1="1" x2="14" y2="4"></line>
      </svg>
    ),
    name: "Coffee",
  },
  {
    img: (
      <svg
        className="absolute rotate-45"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-5 w-5"
      >
        <path d="M9 18V5l12-2v13"></path>
        <circle cx="6" cy="18" r="3"></circle>
        <circle cx="18" cy="16" r="3"></circle>
      </svg>
    ),
    name: "Music",
  },
  {
    img: (
      <svg
        className="absolute rotate-45"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-5 w-5"
      >
        <circle cx="12" cy="12" r="7"></circle>
        <polyline points="12 9 12 12 13.5 13.5"></polyline>
        <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>
      </svg>
    ),
    name: "Games",
  },
  {
    img: (
      <svg
        className="absolute rotate-45"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-5 w-5"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
    name: "Designing",
  },
  {
    img: (
      <svg
        className="absolute rotate-45"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-5 w-5"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    ),
    name: "Sports",
  },
  {
    img: (
      <svg
        className="absolute rotate-45"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-5 w-5"
      >
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    ),
    name: "Painting",
  },
  {
    img: (
      <svg
        className="absolute rotate-45"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-5 w-5"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    ),
    name: "Reading",
  },
  {
    img: (
      <svg
        className="absolute rotate-45"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-5 w-5"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    name: "Android",
  },
  {
    img: (
      <svg
        className="absolute rotate-45"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-5 w-5"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    name: "Other Activity",
  },
];
