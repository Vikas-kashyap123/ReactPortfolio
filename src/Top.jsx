import React from "react";

function Top() {
  return (
    <div className="bg-white mt-2 ml-2 flex flex-col sm:flex-row-reverse justify-between max-w-6xl mx-auto">
      <div className=" flex justify-center mt-8 ">
        <img
          className="w-40 rounded-full sm:w-44"
          src="https://i.postimg.cc/XYmCMQ6H/passport-size-my-photo.jpg"
        />
      </div>
      <div className="text-center mx-5 sm:text-left sm:ml-8 sm:mt-12 md: max-w-2xl">
        <h1 className="text-2xl font-bold mx-8 my-4 sm:text-3xl sm:mx-0">
          Hi, I am vikas, Creative Web developer
        </h1>

        <p className="sm:text-left">
          Hi, I'm Vikas, I completed my diploma from the Government polytechnic
          Dehradun in Electronics in 2020. My interests are in Front End
          Engineering, and I love to create beautiful and performant products
          with delightful user experiences.
        </p>

        <button
          className="text-xl bg-indigo-500 py-2 px-2 mx-4 mt-4 mb-8 text-white rounded-md
         sm:mx-0 sm:mt-4 hover:bg-indigo-800"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default Top;
