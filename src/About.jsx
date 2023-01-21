import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col  justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="sm:mt-20 mt-5 text-xl">
          I have always been interested in web development, and I have the
          necessary skills required for the role. I have a good understanding of
          HTML, CSS, JavaScript and ReactJs. I am currently improving my redux
          and redux saga skills by learning various new technologies.
        </p>
        <p className=" text-xl">
          As well as having a diploma in electronics engineering, I also have 14
          months of experience working in an electronics company as an engineer
        </p>
      </div>
    </div>
  );
}

export default About;
