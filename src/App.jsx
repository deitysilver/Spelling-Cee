import { useState } from 'react';
import './App.css';

import { FaPlay, FaBook } from "react-icons/fa";
import { MdHistoryEdu } from "react-icons/md";
// import { IoIosReturnLeft } from "react-icons/io";

function App() {
  return (
    <div>
      <div className="flex items-center flex-col justify-center h-screen bg-blue-950">
        <div className="flex items-center justify-center mb-4 gap-2 w-[300px] h-[150px]">
          <button className="w-full h-full text-lg font-bold rounded-sm text-white bg-blue-600 hover:bg-blue-700 hover:text-gray-200 active:bg-blue-800 active:text-gray-300 flex items-center justify-center scale-in">
            <FaPlay size={30} />
          </button>
          <div className="flex items-center flex-col justify-center gap-y-2 w-full h-full">
            <button className="w-full h-1/2 text-lg font-bold rounded-sm text-white bg-blue-600 hover:bg-blue-700 hover:text-gray-200 active:bg-blue-800 active:text-gray-300 flex items-center justify-center scale-in">
              <FaBook size={20} />
            </button>
            <button className="w-full h-1/2 text-lg font-bold rounded-sm text-white bg-blue-600 hover:bg-blue-700 hover:text-gray-200 active:bg-blue-800 active:text-gray-300 flex items-center justify-center scale-in">
              <MdHistoryEdu size={30} />
            </button>
          </div>
        </div>
        <input 
          type="text" 
          placeholder="Enter Word" 
          className="px-4 py-2 text-sm font-bold rounded-sm text-white bg-blue-600 hover:bg-blue-700 hover:text-gray-200 active:text-gray-300 text-center w-[300px] border-blue-600 border-2 bg-opacity-50 scale-in" 
        />
        <button className="flex items-center justify-center text-white bg-teal-600 hover:bg-teal-700 active:bg-emerald-700 hover:text-gray-200 active:text-gray-300 mt-4 font-bold text-sm w-[300px] px-4 py-2 border-3 border-teal-600 rounded-sm scale-in">
          Submit Word
          {
            /*<span className="ml-1">
              <IoIosReturnLeft size={20} className="text-white" />
            </span>*/
          }
        </button>
      </div>
    </div>
  );
}

export default App;
