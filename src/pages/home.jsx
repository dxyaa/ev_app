//import "../styles/global.css";
import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import car from "./../../public/car.png";
import "tailwindcss/tailwind.css";
import { Poppins } from "next/font/google";
import { IoSettingsSharp } from "react-icons/io5";
//import TypingEffect from "../components/typewriter";
//import Typewriter from "typewriter-effect";
import Typewriter from "typewriter-effect";
import Link from "next/link";
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
new Typewriter("#typewriter", {
  strings: ["Hello", "World"],
  autoStart: true,
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

      <div className="absolute inset-0 text-white">
        <div class="mx-2 flex items-end justify-center p-2 lg:p-5 text-white">
          <div class="flex flex-1 justify-center ">
            <div className="flex flex-col space-y-4 pt-6">
              {" "}
              <p
                className={`${poppins.variable} font-sans text-center text-7xl font-bold`}
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
        {/*<TypingEffect />
        <div>
          <h3 className="text-white">GeeksforGeeks Typing Animation</h3>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello World!")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(2500)
                .deleteAll()
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
          />
          </div>*/}
        <Typewriter
          options={{
            strings: ["Hello", "World"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default Home;
