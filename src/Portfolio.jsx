import React from "react";
import mycart from "./assets/mycart.png";
import Shows from "./assets/Shows.png";
import Todo from "./assets/Todo.png";
import Calculator from "./assets/Calculator.png";
import Multitable from "./assets/Multitable.png";
import Convertor from "./assets/Convertor.png";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: mycart,
      link: "https://trythenbuy.netlify.app/",
      title: "E_COMMERCE_APP",
      code: "https://github.com/Vikas-kashyap123/E-commerce"
    },
    {
      id: 2,
      src: Shows,
      link: "https://strangers-shows.netlify.app/",
      title: "TV_SHOWS",
      code: "https://github.com/Vikas-kashyap123/TV_Shows"
    },
    {
      id: 3,
      src: Todo,
      link: "https://class-based-todo-xtended.netlify.app/",
      title: "TODO_APP",
      code: "https://github.com/Vikas-kashyap123/ClassBasedTodo"
    },
    {
      id: 4,
      src: Calculator,
      link: "https://calculator-me-generation.netlify.app/",
      title: "CALCULATOR",
      code: "https://github.com/Vikas-kashyap123/Calculator"
    },
    {
      id: 5,
      src: Multitable,
      link: "https://multytable.netlify.app/",
      title: "MULTITABLE",
      code: "https://github.com/Vikas-kashyap123/Multy-Table"
    },
    {
      id: 6,
      src: Convertor,
      link: "https://assignment-17-vikas63.codeyogi-batch-2.repl.co/",
      title: "UNIT_CONVERTOR",
      code: ""
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full  bg-gradient-to-b from-black to-gray-800 p-4 text-white  "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col text-white justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 py-20 md:py-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-12 ">
          {portfolios.map(({ id, src, link, title, code }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg aspect-square "
            >
              
              <img
                src={src}
                alt=""
                className=" ronded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center ">
                <a href={link} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">
                  Demo
                </a>
                <a href={code} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">
                  Code
                </a>
                
              </div>
              <h1 className="flex text-center items-center justify-center mx-auto">{title}</h1>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
