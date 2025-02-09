// Name: Dakari Sow
// Date: Febuary 6th 2025
// This page is the layout, for mostly the navbar and the footer


import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navigation from "./component/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation/> // nav bar
        <main>
          {children}
        </main>
        <footer className="grid-rows-[auto,1fr,auto]"> // footer that will be stuck to the bottom using a grid
          <div className="bg-yellow-300 border-4 border-orange-600 p-4">
            <p className="text-orange-600 font-semibold text-center">
               CREATED BY DAKARI SOW ★
              </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
