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
      link: "https://html.com/"
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      link: "https://html.com/"
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
      link: "https://html.com/"
    },
    {
      id: 4,
      src: reactimage,
      title: "REACT",
      style: "shadow-blue-600",
      link: "https://html.com/"
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
      link: "https://html.com/"
    },
    {
      id: 6,
      src: redux,
      title: "Redux",
      style: "shadow-white",
      link: "https://html.com/"
    },
    {
      id: 7,
      src: netlify,
      title: "NETLIFY",
      style: "shadow-green-500",
      link: "https://html.com/"
    },
    {
      id: 8,
      src: git,
      title: "Github",
      style: "shadow-gray-400 bg-slate-500 text-black",
      link: "https://html.com/"
    },
  ];

  return (
    <div
      name="experience"
      className="w-full  bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg mx-auto  flex flex-col text-white justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 m-6 inline">
            Experience
          </p>
          <p className="m-6 sm:py-6 py-3">These are the technologies i've worked with </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {exp.map(({ id, src, title, style, link }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <a href={link}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
