import React from "react";
import Image from "next/image"; // Import the Image component from Next.js

const StepIntoShoes = () => {
  return (
    <div className="relative bg-white py-16 px-4 sm:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto text-center">
        {/* Image Section with centered layout */}
        <div className="relative w-full">
          <Image
            src="/featured.jpg"
            alt="Man Shoes"
            width={1600} // Adjusted for better proportions
            height={800}
            className="w-full h-auto object-cover" // Ensure image covers properly
          />
        </div>
        
        {/* Text Content */}
        <h1 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-gray-900">
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Cause everyone should know the feeling of running in that perfect pair!
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
          Find Your Shoe
        </button>
      </div>
    </div>
  );
};

export default StepIntoShoes;
