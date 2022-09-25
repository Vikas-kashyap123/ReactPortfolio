import React from "react";

import html from "./assets/html.png";
import css from "./assets/css.png";
import javascript from "./assets/javascript.png";
import reactimage from "./assets/reactimage.png";
import git from "./assets/git.png";
import redux from "./assets/redux.png";
import tailwind from "./assets/tailwind.png";
import netlify from "./assets/netlify.png";

function Experience() {
  const exp = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactimage,
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: redux,
      title: "Redux",
      style: "shadow-white",
    },
    {
      id: 7,
      src: netlify,
      title: "NETLIFY",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: git,
      title: "Github",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="w-full  bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg mx-auto  flex flex-col text-white justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies i've worked with </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {exp.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
