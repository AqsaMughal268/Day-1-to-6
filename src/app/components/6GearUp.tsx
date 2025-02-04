import React from "react";
import Image from "next/image"; 

const GearUp = () => {
  return (
    <div>
      {/* Gear Up Section */}
      <div className="bg-white py-0 px-8 sm:px-12 lg:px-16">
        <div className="max-w-full mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-left">Gear Up</h2>
          
          {/* Shop Men's and Women's with Arrows */}
          <div className="flex flex-wrap justify-between mb-8">
            {/* Shop Men's Section */}
            <div className="flex items-center mb-4 sm:mb-0 w-full sm:w-auto">
              <h2 className="text-xl font-bold text-gray-900 ml-4 sm:ml-0">Shop Men</h2>
              <button className="p-2 bg-gray-100 rounded-full flex items-center justify-center ml-2">
                ←
              </button>
              <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center ml-2">
                →
              </button>
            </div>
            
            {/* Shop Women's Section */}
            <div className="flex items-center w-full sm:w-auto">
              <h2 className="text-xl font-bold text-gray-900">Shop Women</h2>
              <button className="p-2 bg-gray-100 rounded-full flex items-center justify-center ml-2">
                ←
              </button>
              <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center ml-2">
                →
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Men's Section */}
            <div className="text-center flex flex-col items-center">
              <Image src="/Image1.png" alt="Men's Top" width={300} height={300} className="rounded-lg" />
              <p className="text-black font-medium mt-4">Nike Dri-FIT ADV TechKnit Ultra</p>
              <p className="text-black text-right text-sm">₹ 3,895</p>
              <p className="text-gray-600 font-normal font-sans mt-2">Men's Short-Sleeve Running Top</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <Image src="/image2.png" alt="Men's Shorts" width={300} height={300} className="rounded-lg" />
              <p className="text-black font-medium mt-4">Nike Dri-FIT Challenger</p>
              <p className="text-black text-right text-sm">₹ 2,495</p>
              <p className="text-gray-600 font-normal font-sans mt-2">Men's 18cm (approx.) 2-in-1 Versatile Shorts</p>
            </div>

            {/* Women's Section */}
            <div className="text-center flex flex-col items-center">
              <Image src="/image3.png" alt="Women's Top" width={300} height={300} className="rounded-lg" />
              <p className="text-black font-medium mt-4">Nike Dri-FIT ADV Run Division</p>
              <p className="text-black text-right text-sm">₹ 5,295</p>
              <p className="text-gray-600 font-normal font-sans mt-2">Women's Long-Sleeve Running Top</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <Image src="/image4.png" alt="Women's Leggings" width={300} height={300} className="rounded-lg" />
              <p className="text-black font-medium mt-4">Nike Fast</p>
              <p className="text-black text-right text-sm">₹ 3,795</p>
              <p className="text-gray-600 font-normal font-sans mt-2">Women's Mid-Rise 7/8 Running Leggings with Pockets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GearUp;
