// Name: Dakari Sow
// Date: Febuary 6th 2025
// This page is the navigation bar!



import React from 'react';
import Link from 'next/link';  // Use Link from next for internal navigation

const Navigation = () => {
  return (
    
    <nav className="p-4 bg-yellow-300 border-8 border-orange-600">
      <div>
        <ul className="flex space-x-9 p-3 justify-center">
          <li>
            <Link href="/" className="font-bold text-2xl text-orange-700">Home</Link> {/* Link to the home page */}
          </li>
          <li>
            <Link href="/temperature" className="font-bold text-2xl text-orange-500">Temperature</Link> {/* Link to the temperature conversion page */}
          </li>
          <li>
            <Link href="/weight" className="font-bold text-2xl text-orange-500">Weight</Link> {/* Link to the weight conversion page */}
          </li>
          <li>
            <Link href="/distance" className="font-bold text-2xl text-orange-500">Distance</Link> {/* Link to the distance conversion page */}
          </li>
          {/* External link to the github repository **that'll open in a NEW window instead of the exact same window*/}
          <li>
            <a href="https://github.com/dddddakari/AdvancedJavaScript-" target="_blank" rel="noopener noreferrer" className="font-bold text-2xl text-black">
              Github
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
