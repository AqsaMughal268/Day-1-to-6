"use client"
import Image from 'next/image';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import { FaRegHeart, FaBars } from 'react-icons/fa';
import { BsBag } from 'react-icons/bs';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Header Section */}
      <header className="bg-[#F5F5F5] border-b font-[Helvetica Neue] flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-4">
        {/* Logo Section */}
        <Image src="/logo.png" alt="Logo" width={150} height={100} className="w-[40px] sm:w-[60px] lg:w-[80px] ml-4" />

        {/* Hamburger Icon */}
        <div className="sm:hidden flex items-center space-x-4">
          <FaBars
            className="text-black mt-4 text-lg cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          />
        </div>

        {/* Links Section */}
        <nav
          className={`flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 text-black text-sm sm:text-base md:text-lg font-medium ${
            isMenuOpen ? 'block' : 'hidden'
          } sm:block`}
          aria-label="Primary navigation"
        >
          <Link href="/findstore" className="block sm:inline">
            Find a Store
          </Link>
          <span className="hidden sm:inline-block h-[14px] w-[1px] bg-gray-400" />
          <Link href="/help" className="block sm:inline">
            Help
          </Link>
          <span className="hidden sm:inline-block h-[14px] w-[1px] bg-gray-400" />
          <Link href="/joinus" className="block sm:inline">
            Join Us
          </Link>
          <span className="hidden sm:inline-block h-[14px] w-[1px] bg-gray-400" />
          <Link href="/login" className="block sm:inline">
            Sign In
          </Link>
        </nav>
      </header>

      {/* Main Navbar Section */}
      <header className="bg-white border-b shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 lg:px-12 py-4">
          {/* Logo */}
          <Image src="/nikelogo.png" width={150} height={150} alt="Logo" className="w-[50px] sm:w-[70px] md:w-[80px] ml-8" />

          {/* Navigation Links */}
          <nav
            className="flex flex-col sm:flex-row space-y-4 mt-6 sm:space-y-0 sm:space-x-8 justify-center items-center font-medium"
            aria-label="Secondary navigation"
          >
            <Link href="/overallproducts" className="text-black hover:underline text-sm md:text-base">
              New & Featured
            </Link>
            <Link href="/overallproducts" className="text-black hover:underline text-sm md:text-base">
              Men
            </Link>
            <Link href="/overallproducts" className="text-black hover:underline text-sm md:text-base">
              Women
            </Link>
            <Link href="/overallproducts" className="text-black hover:underline text-sm md:text-base">
              Kids
            </Link>
            <Link href="/overallproducts" className="text-black hover:underline text-sm md:text-base">
              SNKRS
            </Link>
          </nav>

          {/* Search and Icons */}
          <div className="flex flex-col sm:flex-row items-center mt-4 space-x-4 ml-4">
            <div className="flex items-center bg-slate-100 rounded-full px-2 py-1 w-full md:w-64">
              <CiSearch className="text-black text-lg" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-sm sm:text-base pl-2 py-1 w-full"
                aria-label="Search input"
              />
            </div>

            <div className="flex space-x-4 mt-2 sm:space-x-2">
              <FaRegHeart className="text-black text-lg" aria-label="Favorites" />
              <BsBag className="w-6 h-6 text-lg" aria-label="Shopping cart" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
