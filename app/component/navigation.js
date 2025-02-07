import React from 'react';
import Link from 'next/link';  // Use Link from next for internal navigation

const Navigation = () => {
  return (
    <nav className="p-4 bg-yellow-300 border-8 border-orange-600">
      <div>
        <ul className="flex space-x-9 p-3 justify-center">
          <li>
            <Link href="/" className="font-bold text-2xl text-orange-700">Home</Link>
          </li>
          <li>
            <Link href="/temperature" className="font-bold text-2xl text-orange-500">Temperature</Link>
          </li>
          <li>
            <Link href="/weight" className="font-bold text-2xl text-orange-500">Weight</Link>
          </li>
          <li>
            <Link href="/distance" className="font-bold text-2xl text-orange-500">Distance</Link>
          </li>
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
