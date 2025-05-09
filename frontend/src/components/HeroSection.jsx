import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
        Turn Unused Software Licenses into Cash
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        SoftSell helps you sell excess software licenses quickly and
        effortlessly.
      </p>
      <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition duration-300">
        Sell My Licenses
      </button>
    </section>
  );
};

export default HeroSection;
