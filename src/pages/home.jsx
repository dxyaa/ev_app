//import "../styles/global.css";
import React from "react";
import Image from "next/image";
import car from "./../../public/car.png";
import "tailwindcss/tailwind.css";
const Home = () => {
  return (
    <div className="relative">
      <div className="relative h-screen">
        <Image
          src={car}
          alt="bgImage"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 flex justify-center pt-10">
        <div className="text-white text-center">
          <h1 className="text-7xl font-bold mb-4 font-poppins ">Charge-Z</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
