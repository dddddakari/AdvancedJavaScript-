// Name: Dakari Sow
// Date: Febuary 6th 2025
// This page is the landing page!


"use client";
import React from 'react';
import Gif from './component/gif'; // importing the main 'tails' graphic for the home page

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen pt-10 sm:pt-20 font-[family-name:var(--font-geist-sans)]"> // keeping the font
      <main className="flex flex-col items-center sm:items-start text-center">
        <h1 className="text-7xl sm:text-9xl text-orange-600 font-extrabold">
          Converter Site!
        </h1>
        <p className="text-orange-600 font-extrabold text-xl mt-2"> // this is intentionally not centered for a better look
          We do it, so you don't have to!
        </p>
        <Gif />
      </main>
    </div>
  );
}
