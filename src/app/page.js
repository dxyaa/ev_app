import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex justify-center h-screen items-center
     flex-col space-y-5"
    >
      <div className="flex flex-row p-2 space-x-2">
        <div>Car id -</div>
        <input className="p-1 border border-gray-800 "></input>{" "}
      </div>
      <div className="flex flex-row p-2 space-x-2">
        <div>Car Model - </div>
        <input className="p-1 border border-gray-800"></input>{" "}
      </div>
      <button className="p-2 bg-black text-white flex justify-center items-center rounded-md hover:bg-gray-700">
        Confirm
      </button>
    </div>
  );
}
