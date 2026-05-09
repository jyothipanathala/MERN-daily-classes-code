// import React from 'react'
// import { useState } from 'react';
import Factorial from "./Factorial";
const App = () => {
    return(
      <>
      <Factorial/>
      
      <div className="bg-[url(https://isorepublic.com/wp-content/uploads/2022/11/iso-republic-colorful-bokeh-abstract-17.jpg)] bg-no-repeat w-100% bg-cover h-150 p-5 flex flex-col justify-center items-center ">
      <h1 className="w-100 text-center font-bold bg-pink-200 m-3 p-5 text-2xl rounded-4xl shadow -2xl shadow-fuchsia-500 underline decoration-fuchsia-900 decoration-[4px] decoration-dotted">Sample Project</h1>

      <h2 className= "backdrop-blur-5xl w-50 text-center text-2xl font-bold shadow-2xl shadow-pink-600 rounded-3xl text-red-950 items-center">Welcome to Tailwind CSS</h2>

        <div className="bg-fuchsia-800 p-10 grid grid-cols-4 gap-x-2 gap-y-2 rounded-2xl">
        <div className="bg-pink-400 h-10 w-30 rounded-2xl shadow-2xl shadow-pink-400"></div>
        <div className="bg-pink-400 h-10 w-30 rounded-2xl shadow-2xl shadow-pink-400"></div>
        <div className="bg-pink-300 h-10 w-30 rounded-2xl shadow-2xl shadow-pink-400"></div>
        <div className="bg-pink-300 h-10 w-30 rounded-2xl shadow-2xl shadow-pink-400"></div>
        <div className="bg-pink-300 h-10 w-30 rounded-2xl shadow-2xl shadow-pink-400"></div>
        <div className="bg-pink-200 h-10 w-30 rounded-2xl shadow-2xl shadow-pink-400"></div>
        <div className="bg-pink-200 h-10 w-30 rounded-2xl shadow-2xl shadow-pink-400"></div>
        <div className="bg-pink-200 h-10 w-30 rounded-2xl shadow-2xl shadow-pink-400"></div>
        <div className="bg-pink-300 h-10 w-30 rounded-2xl shadow-2xl shadow-pink-400"></div>
        <div className="bg-pink-300 h-10 w-30 rounded-2xl shadow-2xl shadow-pink-400"></div>
        <div className="bg-pink-400 h-10 w-30 rounded-2xl shadow-2xl shadow-pink-400"></div>
        <div className="bg-pink-400 h-10 w-30 rounded-2xl shadow-2xl shadow-pink-400"></div>
      </div>
    </div>

    </>

    );
  };

export default App;