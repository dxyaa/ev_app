//import "../styles/global.css";
import React from "react";
import Image from "next/image";
import car from "./../../public/car.png";
import "tailwindcss/tailwind.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
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
          <div className="text-7xl mb-4 font-bold ">
            <p className={`${poppins.variable} font-sans`}>Charge-Z</p>
          </div>
          <div className="text-xl text-slate-600">
            <p className={`${poppins.variable} font-sans`}>
              Your one-stop destination for all things related to your ev!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
