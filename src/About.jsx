import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col  justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="mt-20 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          numquam. Atque, illo. Qui et repellendus vitae esse ducimus, nostrum
          id blanditiis veritatis tempore vel voluptatem. Nostrum magni, eos ad
          aperiam eum facere veritatis, similique sit velit, fugiat eaque omnis
          officiis delectus fugit quibusdam natus dolore sunt distinctio odio
          quis accusamus!
        </p>
        <br />
        <p className=" text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          numquam. Atque, illo. Qui et repellendus vitae esse ducimus, nostrum
          id blanditiis veritatis tempore vel voluptatem. Nostrum magni, eos ad
          aperiam eum facere veritatis, similique sit velit, fugiat eaque omnis
          officiis delectus fugit quibusdam natus dolore sunt distinctio odio
          quis accusamus!
        </p>
      </div>
    </div>
  );
}

export default About;
