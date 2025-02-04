import React from "react";
import Image from "next/image";
import Link from "next/link";

const JoinUs = () => {
  return (
    <div className="flex flex-col items-center py-10 px-5 sm:px-10 md:px-20">
      {/* Logo */}
      <Image className="pb-5" src={"/nikelogo.png"} width={40} height={10} alt="Logo" />

      {/* Heading */}
      <h2 className="uppercase text-center font-bold text-lg md:text-xl pb-5">
        Become a Nike Member
      </h2>

      {/* Subheading */}
      <p className="w-full max-w-xs md:max-w-md text-center text-sm md:text-base text-gray-500 pb-5">
        Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
      </p>

      {/* Form */}
      <form className="flex flex-col w-full max-w-xs sm:max-w-sm lg:max-w-md">
        {/* Input Fields */}
        <input
          className="w-full border-gray-300 rounded-md mb-4 px-4 py-3 border-[2px] placeholder-gray-400"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="w-full border-gray-300 rounded-md mb-4 px-4 py-3 border-[2px] placeholder-gray-400"
          type="password"
          placeholder="Password"
        />
        <input
          className="w-full border-gray-300 rounded-md mb-4 px-4 py-3 border-[2px] placeholder-gray-400"
          type="text"
          placeholder="First Name"
        />
        <input
          className="w-full border-gray-300 rounded-md mb-4 px-4 py-3 border-[2px] placeholder-gray-400"
          type="text"
          placeholder="Last Name"
        />
        <input
          className="w-full border-gray-300 rounded-md mb-2 px-4 py-3 border-[2px] placeholder-gray-400"
          type="date"
        />

        {/* Birthday Message */}
        <p className="pb-3 text-gray-500 text-sm text-center">
          Get a Nike Member Reward every year on your Birthday.
        </p>

        {/* Country Selector */}
        <select
          className="w-full border-gray-300 rounded-md mb-2 px-4 py-3 border-[2px] text-gray-400"
        >
          <option value="India">India</option>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Canada">Canada</option>
        </select>

        {/* Gender Selector */}
        <div className="flex gap-2 sm:gap-5 mt-1">
          <div className="border-gray-300 rounded-md py-4 border-[2px] flex-1 text-center text-gray-500 cursor-pointer hover:bg-gray-100">
            Male
          </div>
          <div className="border-gray-300 rounded-md py-4 border-[2px] flex-1 text-center text-gray-500 cursor-pointer hover:bg-gray-100">
            Female
          </div>
        </div>

        {/* Email Opt-In */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 py-7">
          <input type="checkbox" id="email-opt-in" />
          <label
            className="text-sm sm:text-base cursor-pointer text-gray-500"
            htmlFor="email-opt-in"
          >
            Sign up for emails to get updates from Nike on products, offers, and your Member benefits.
          </label>
        </div>

        {/* Terms and Conditions */}
        <p className="text-gray-500 text-center text-sm md:text-base pb-6">
          By creating an account, you agree to Nike's{" "}
          <Link href="/privacy-policy" className="underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms-of-use" className="underline">
            Terms of Use
          </Link>.
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
        >
          Join Us
        </button>

        {/* Already a Member */}
        <p className="text-center pt-4">
          <span className="text-gray-500">Already a Member? </span>
          <Link href="/login" className="underline">
            Log In.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default JoinUs;
