import React, { useState } from 'react'
import { url } from './../node_modules/zod/v4/mini/schemas';


  const App=() => {
    const [count,setCount]=useState(0);
    const handleIncreament=()=>
{
  setCount(count+1);
};
let fact=1;
const factorial=()=>{
  for(let i=0; i<=5;i++){
  fact=fact*i;
}
return fact;
};

  return (
    <div className="bg-[url(https://png.pngtree.com/thumb_back/fh260/background/20231023/pngtree-aesthetic-dark-blue-green-background-infused-with-a-cloudy-texture-image_13683281.png)] bg-no-repeat w-100% bg-cover h-500 p-5 flex flex-col justify-center items-center">
      <h1  className=" w-100 text-center font-bold bg-green-200  m-3 p-5 italic text-2xl rounded-4xl shadow-2xl shadow-green-400 underline decoration-emerald-700 decoration-[5px] decoration-dotted">Sample project</h1>
      <h2 className="backdrop-blur-2sl w-50 text-center text-2xl font-bold shadow-red-200 shadow-2xl rounded-2xl text-white ">Welcome to tailwind</h2>
      <button className="bg-gray-700 text-white font-bold p-2 m-2 rounded-4xl text-center hover:bg-emerald-400 hover:pointer hover:cursor-pointer">
        Increament++
      </button>
      <button className="text-4xl font-bold">
        count
      </button>
      <button onClick="">
        fact
      </button>

      <div className=" bg-green-950 p-10 grid grid-cols-4 gap-x-2 gap-y-2 rounded-2xl">
        <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs"></div>
        <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs"></div>
        <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs"></div>
        <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs"></div>
        <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs"></div>
        <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs"></div>
        <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs"></div>
        <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs"></div>
        <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs"></div>
        <div className="bg-red-400 h-10 w-30 rounded-2xl shadow-2xs"></div>
      </div>
      </div>
  )}


export default App