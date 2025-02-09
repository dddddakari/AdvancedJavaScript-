// Name: Dakari Sow
// Date: Febuary 6th 2025
// This page is the navigation bar!



import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="p-4 bg-yellow-300 border-8 border-orange-600"> // cs
      <div>
        <ul className="flex space-x-9 p-3 justify-center"> // centering the text of the nav bar
          <li>
            <Link href="/" className="font-bold text-2xl text-orange-700">Home</Link> // link back to the home page
          </li>
          <li>
            <Link href="/temperature" className="font-bold text-2xl text-orange-500">Temperature</Link> // link to the temperature conversion page
          </li>
          <li>
            <Link href="/weight" className="font-bold text-2xl text-orange-500">Weight</Link> // link to the weight conversion page
          </li>
          <li>
            <Link href="/distance" className="font-bold text-2xl text-orange-500">Distance</Link> // link to the distance conversion page
          </li>
          <li>
            <a href="https://github.com/dddddakari/AdvancedJavaScript-" target="_blank" rel="noopener noreferrer" className="font-bold text-2xl text-black"> // link to my github
              Github
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
