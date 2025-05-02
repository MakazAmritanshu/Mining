import React from "react";
import rocket from "../assets/icon/rocket-start-up.png"
const PopupCard = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-none flex items-center justify-center z-50">
      <div className="relative bg-white rounded-2xl w-[90%] max-w-[340px] pb-2 px-4 text-center shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl font-bold text-gray-400 hover:text-gray-600"
        >
          &times;
        </button>
        <img
          src={rocket} 
          alt="Rocket"
          className="w-30 mx-auto animate-bounce"
        />
        <h2 className="text-xl font-semibold mb-2">Boost Gh/s</h2>
        <p className="text-gray-600 mb-1">
          You can collect more by boosting the mining Gh/s up to <span className="font-bold text-gray-800">100 Gh/s</span>
        </p>
        <p className="text-lg font-bold text-green-500 mb-4">30 Gh/s + 50 Gh/s</p>
        <button className="bg-teal-200 text-teal-800 font-medium py-2 px-6 rounded-xl">
          Let's Do It
        </button>
        <p className="mt-3 text-sm text-gray-500">
          * You have <span className="text-blue-600 font-medium">2 Free</span> attempt remaining.
        </p>
      </div>
    </div>
  );
};

export default PopupCard;
