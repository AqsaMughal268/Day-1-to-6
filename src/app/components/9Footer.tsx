import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8 w-full">
      {/* Footer Links Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold text-black mb-4 text-lg sm:text-xl">Icons</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Air Force 1</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold text-black mb-4 text-lg sm:text-xl">Shoes</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold text-black mb-4 text-lg sm:text-xl">Clothing</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>All Clothing</li>
            <li>Modest Wear</li>
            <li>Hoodies & Pullovers</li>
            <li>Shirts & Tops</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold text-black mb-4 text-lg sm:text-xl">Kids</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Infant & Toddler Shoes</li>
            <li>Kid's Shoes</li>
            <li>Kid's Jordan Shoes</li>
            <li>Kid's Basketball Shoes</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center text-sm text-gray-600 mt-8">
        {/* Social Icons */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" aria-label="Facebook" className="text-xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Twitter" className="text-xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram" className="text-xl">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
