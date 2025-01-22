"use client"
import { motion } from "framer-motion";
import { useState } from "react";




export default function FilterSection ({ onClose }: { onClose: () => void })  {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<number>(145);

  const colors = ["red", "blue", "green", "black", "gray"];
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "2X-Large",
    "3X-Large",
    "4X-Large",
  ];

  return (
    <motion.div
      className="w-full p-4 border border-black border-opacity-10 rounded-lg"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={onClose}
        className="text-gray-600 lg:hidden absolute top-4 right-4"
      >
      </button>
      <h3 className="text-2xl font-bold mb-4">Filters</h3>


      {/* Price Range with Slider */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Price</h4>
        <input
          type="range"
          min="50"
          max="300"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full"
        />
        <p>Price: ${priceRange}</p>
      </div>

      {/* Colors */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Colors</h4>
        <div className="flex gap-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-6 h-6 rounded-full border ${
                selectedColor === color
                  ? "border-blue-500 ring-2 ring-blue-500"
                  : "border-gray-400"
              }`}
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Size</h4>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`border px-3 py-1 rounded-full ${
                selectedSize === size ? "bg-black text-white" : "bg-gray-400 text-white"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Dress Style */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Dress Style</h4>
        <select className="border p-2 w-full">
          <option>Casual</option>
          <option>Party</option>
          <option>Gym</option>
        </select>
      </div>

      {/* Apply Filter Button */}
      <button className="w-full py-2 bg-black text-white rounded-full hover:bg-white hover:text-black border-black border transition-all duration-500 ease-in-out">
        Apply Filter
      </button>
    </motion.div>
  );
};
