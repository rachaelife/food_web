import React from "react";

export default function DishCard({ img, name, desc, price,onOrder }) {
  return (
    <div className="w-[400px] h-[532px] bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4">
    
      <img
        src={img}
        alt={name}
        className="w-[368px] h-[304px] rounded-md object-cover"
      />

      {/* Content */}
      <div className="w-[368px] h-[124px] flex flex-col gap-[29px]">
      
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-500 text-sm mt-1">{desc}</p>
        </div>

    
        <div className="w-[197px] h-10 flex items-center justify-between gap-4">
          <button 
          onClick={onOrder}
          className="px-4 py-2  text-sm rounded-md hover:bg-slate-400 transition border">
            Order Now
          </button>
          <span className="text-lg font-bold text-gray-800 ">{price}</span>
        </div>
      </div>
    </div>
  );
}



