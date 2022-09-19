import React from "react";

function About() {
  return (
    <div className="md:flex flex-row justify-between mx-auto max-w-6xl ">
      <div className="max-w-md">
        <div>
          <h1 className="text-indigo-600 ml-2 text-2xl font-medium">
            About me
          </h1>
        </div>
        <div className="my-4 ml-2">
          <h2>Full Name:-</h2>
          <h2 className="text-indigo-600">Vikas kashyap</h2>
        </div>
        <div className="mb-4 ml-2">
          <h2>Email address:-</h2>
          <h2 className="text-indigo-600">vkashyap81098@gmail.com</h2>
        </div>
        <div className="mb-4 ml-2">
          <h2>Mobile No:-</h2>
          <h2 className="text-indigo-600">8534800469</h2>
        </div>
        <div className="mb-4 ml-2">
          <h2>Address</h2>
          <h2 className="text-indigo-600">
            village: pelio, postOffice: NayaGaon Nathuwala shimla bypass road
            Dehradun, Uttarakhand, India
          </h2>
        </div>
      </div>
      <div className="hidden md:block  justify-center max-w-xs mt-8">
        <img
          className="rounded-md"
          src="https://www.seekpng.com/png/detail/78-788605_aboutme-logo-about-me-png.png"
        />
      </div>
    </div>
  );
}

export default About;
