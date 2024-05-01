//import "../styles/global.css";
import React from "react";
import Image from "next/image";
import car from "./../../public/car.png";
import "tailwindcss/tailwind.css";
import { Poppins } from "next/font/google";
import { IoSettingsSharp } from "react-icons/io5";
import Link from "next/link";
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
          className="absolute inset-0 w-full h-full  object-cover "
        />
      </div>

      <div className="absolute inset-0 ">
        <div class="mx-2 flex items-end justify-center p-2 lg:p-5 text-white">
          <div class="flex flex-1 justify-center ">
            <div className="flex flex-col space-y-4 pt-6">
              {" "}
              <p
                className={`${poppins.variable} font-sans text-center text-7xl`}
              >
                Charge-Z{" "}
              </p>
              <p
                className={`${poppins.variable} font-sans text-center text-xl text-slate-600`}
              >
                Your one-stop destination for all things related to your ev!
              </p>
            </div>
          </div>
          <div class="flex justify-end absolute top-10 right-10">
            <Link href="/" className="p-4 rounded-lg hover:bg-gray-800">
              <IoSettingsSharp size={30} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
