import React from 'react';
import { FiTruck } from 'react-icons/fi';
import Image from 'next/image';

const Checkoutpage = () => {
  return (
    <div className="grid grid-cols-12 px-4 sm:px-6 lg:px-32 gap-6 lg:gap-20 my-10">
      {/* Left Section */}
      <div className="col-span-12 lg:col-span-8">
        <h2 className="font-bold text-lg lg:text-xl pb-4">How would you like to get your order?</h2>
        <p className="text-sm lg:text-base leading-relaxed">
          Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the
          shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be
          stored securely and used solely for the purpose of clearing customs (including sharing it with customs
          officials) for all orders and returns. If your KYC does not match your shipping address, please click the link
          for more information. <span className="underline">Learn More</span>
        </p>
        <div className="flex items-center border-[1.5px] border-black px-4 py-4 rounded-lg my-6 sm:my-10">
          <FiTruck size={24} />
          <span className="pl-4 text-sm lg:text-base">Deliver It</span>
        </div>

        <h2 className="font-bold text-lg lg:text-xl pb-4">Enter your name and address:</h2>
        {/** Input Fields */}
        <div className="space-y-4">
          <input
            className="w-full border-[#E5E5E5] rounded-md px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
            type="text"
            placeholder="First Name"
          />
          <input
            className="w-full border-[#E5E5E5] rounded-md px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="w-full border-[#E5E5E5] rounded-md px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
            type="text"
            placeholder="Address Line 1"
          />
          <span className="text-xs text-text-primary-gray">We do not ship to P.O. boxes</span>
          <input
            className="w-full border-[#E5E5E5] rounded-md px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
            type="text"
            placeholder="Address Line 2"
          />
        </div>

        {/** Postal Code & Locality */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <input
            className="flex-1 border-[#E5E5E5] rounded-md px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
            type="text"
            placeholder="Postal Code"
          />
          <input
            className="flex-1 border-[#E5E5E5] rounded-md px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
            type="text"
            placeholder="Locality"
          />
        </div>

        {/** State/Territory & Country */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <select
            className="flex-1 border-[#E5E5E5] rounded-md px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
            defaultValue="State/Territory"
          >
            <option disabled>State/Territory</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <div className="relative flex-1 border-[#E5E5E5] rounded-md px-4 py-3 border-[2px]">
            <span className="text-gray-700">India</span>
            <span className="absolute right-4 top-5 w-2 h-2 bg-green-500 rounded-full"></span>
          </div>
        </div>

        {/** Additional Checkboxes */}
        <div className="mt-6 space-y-4">
          <div>
            <input type="checkbox" id="save-address" />
            <label className="ml-2 text-sm text-text-secondary-gray" htmlFor="save-address">
              Save this address to my profile
            </label>
          </div>
          <div>
            <input type="checkbox" id="preferred-address" />
            <label className="ml-2 text-sm text-text-secondary-gray" htmlFor="preferred-address">
              Make this my preferred address
            </label>
          </div>
        </div>

        {/** Continue Button */}
        <div className="bg-[#F5F5F5] mt-10 py-4 rounded-full text-center text-sm lg:text-base text-text-secondary-gray cursor-pointer">
          Continue
        </div>
      </div>

      {/* Right Section */}
      <div className="col-span-12 lg:col-span-4">
        <div className="w-full">
          <Image
            className="object-cover rounded-lg mx-auto"
            src="/ordersummarycheckout.png"
            alt="Order Summary"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkoutpage;
