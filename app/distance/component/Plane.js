// Name: Dakari Sow
// Date: Febuary 6th 2025
// This page is the component for the distance GIF

import React from 'react'
import Image from 'next/image';

// All this will do is import the wanted gif while also giving me the ALT text and the width and height of the gif

const Plane = () => {
  return (
    <div>
      <Image
        src="/Plane.gif"
        alt="gif of tails driving a plane to the left"
        width={800}        
        height={1} 
        />
    </div>
  )
}

export default Plane
