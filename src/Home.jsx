import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function Home() {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b  from-black to-gray-800"
    >
      <div
        className="max-w-screen-lg mx-auto flex  flex-col items-center justify-center h-full 
      p-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl pt-20 md:pt-0  sm:text-7xl font-bold text-white">
            I'm a Frontend web developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Hi, I'm Vikas, I completed my diploma from the Government
            polytechnic Dehradun in Electronics in 2020. My interests are in
            Front End Engineering, and I love to create beautiful and performant
            products with delightful user experiences.
          </p>
          <div className="flex mb-2 ">
             <a href="/resume.pdf"
              className="group mr-1 text-white w-fit px-3 py-2 my-1 flex items-center rounded-md bg-gradient-to-r
             from-cyan-500 to-blue-500 cursor-pointer"
            >
              Resume
              <span className="">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
            <button
              className="group text-white w-fit px-3 py-2 my-1 flex items-center rounded-md bg-gradient-to-r
             from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            className="mx-auto w-2/3 md:w-full md:flex-row rounded-md"
            src="https://i.postimg.cc/XYmCMQ6H/passport-size-my-photo.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
