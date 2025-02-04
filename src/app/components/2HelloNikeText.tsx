import React from 'react';

const HelloNikeText = () => {
  return (
    <div className="w-full h-auto bg-[#F5F5F5] py-4 sm:py-10 md:py-8">
      <div className="text-center space-y-4 sm:space-y-6">
        <h1 className="text-[#111111] text-3xl sm:text-2xl md:text-lg font-bold font-sans">
          Hello Nike App
        </h1>
        <h2 className="text-[#111111] text-2xl sm:text-xl md:text-sm font-medium font-sans">
          Download the app to access everything Nike. 
          <a href="/" className="hover:underline text-black font-semibold">
            Get Your Great
          </a>
        </h2>
      </div>
    </div>
  );
};

export default HelloNikeText;
