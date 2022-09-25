import React from "react";
import mycart from "./assets/mycart.png";
import array from "./assets/array.png";
import converter from "./assets/converter.png";
import node from "./assets/node.png";
import reactparalel from "./assets/reactparalel.png";
import weather from "./assets/weather.png";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: mycart,
    },
    {
      id: 2,
      src: array,
    },
    {
      id: 3,
      src: converter,
    },
    {
      id: 4,
      src: node,
    },
    {
      id: 5,
      src: reactparalel,
    },
    {
      id: 6,
      src: weather,
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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
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
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
