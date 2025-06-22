import React from "react";
import heroImage from "/Users/vivekbhamla/Desktop/react js/landingpage/src/assets/hero_image.jpg";
const Hero = () => {
  return (
    <div className="flex w-full h-screen">
      {/* Text Section */}
      <div className="flex flex-col justify-center items-start w-1/2 px-12 bg-gradient-to-br from-sky-500 via-indigo-400 via-50% to-orange-400 text-white">
        <h2 className="text-5xl font-bold mb-4 leading-tight">
          The One-Stop Solution <br /> For Everything
        </h2>
        <h4 className="text-2xl mb-8">Our experts are ready to serve you!</h4>
        <button className="bg-white text-orange-600 font-semibold py-3 px-8 text-lg rounded-xl hover:bg-orange-600 hover:text-white transition duration-300">
          Get Experts
        </button>
      </div>

      {/* Image Section */}
      <div className="w-1/2 h-full">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
