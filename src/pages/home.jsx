import React from "react";
import Image from "next/image";
import car from "./../../public/car.png";
const Home = () => {
  return (
    <div className="relative">
      {/* Container for the Image */}
      <div className="relative h-screen">
        {/* Use a relative container to position the image */}
        <Image
          alt="car img"
          src={car}
          layout="fill"
          objectFit="cover"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Centered flex container for text */}
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-lg">Explore our awesome content.</p>
          <a
            href="#_"
            className="mt-4 px-6 py-3 bg-gray-800 text-white rounded-lg inline-block hover:bg-gray-700"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
