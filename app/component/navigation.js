import React from 'react';

const Navigation = () => {
  return (
    <nav className="p-4 bg-yellow-300 border-4 border-double border-orange-600">
      <ul className="flex space-x-9 p-3 justify-center"> {/* Use flex and spacing between items */}
      <li>
          <a href="/page" className="font-bold text-2xl">Home</a> {/* Bold and large text */}
        </li>
        <li>
          <a href="./pages/cAndF.js" className="font-bold text-2xl">Temperature</a> {/* Bold and large text */}
        </li>
        <li>
          <a href="./pages/kgToLbs.js" className="font-bold text-2xl">Weight</a> {/* Bold and large text */}
        </li>
        <li>
          <a href="./pages/mAndKm.js" className="font-bold text-2xl">Distance</a> {/* Bold and large text */}
        </li>
      </ul>

      <a href=""
    </nav>
  );
};

export default Navigation;

