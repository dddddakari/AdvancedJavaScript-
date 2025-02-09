// Name: Dakari Sow
// Date: Febuary 6th 2025
// This page is convert miles to kilometers or convert kilometres to metres!

"use client";
import React, { useState } from "react";
import Plane from "./component/plane";

const DistanceConverter = () => {  // set up the state for the meters, kilometers, array input, and converted array
  const [meters, setMeters] = useState("");
  const [kilometers, setKilometers] = useState("");
  const [arrayInput, setArrayInput] = useState("");
  const [convertedArray, setConvertedArray] = useState([]);
  const [isMetersToKilometers, setIsMetersToKilometers] = useState(true);

  const handleMetersChange = (e) => { // for the input to change the meters
    const value = e.target.value;
    setMeters(value);
    setKilometers((value / 1000).toFixed(2));
  };

  const handleKilometersChange = (e) => { // for the input to change the kilometers
    const value = e.target.value;
    setKilometers(value);
    setMeters((value * 1000).toFixed(2));
  };

  const handleArrayConvert = () => { // for the input to convert the array into the actual values
    const values = arrayInput
      .split(",")
      .map((val) => val.trim())
      .filter((val) => val !== "");

    const convertedValues = values.map((val) => { // for the values to turn into whole numbers or decimals
      const num = parseFloat(val);
      return isMetersToKilometers
        ? (num / 1000).toFixed(2) + " km"
        : (num * 1000).toFixed(2) + " m";
    });

    setConvertedArray(convertedValues);
  };

  const toggleConversion = () => {  // for the button to switch between meters and kilometers
    setIsMetersToKilometers(!isMetersToKilometers);
    setMeters("");
    setKilometers("");
    setArrayInput("");
    setConvertedArray([]);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-6xl font-extrabold mb-10">Distance Converter</h1>  {/* for the title of the page */}
      <Plane /> {/* for the plane graphic */}
      <button
        onClick={toggleConversion} {/* for the button to switch between meters and kilometers */}
        className="mb-4 px-4 py-2 bg-yellow-400 border-4 border-orange-500 text-black font-semibold rounded-3xl mt-20 mb-10"
      >
        {isMetersToKilometers  {/* for the button to switch between meters and kilometersto decrease confusion of what the user is converting */}
          ? "Switch From Kilometers to Meters"
          : "Switch from Meters to Kilometers"}
      </button>

      <div className="flex flex-col sm:flex-row gap-5 mb-10">
        <div>
          <input
            type="number" {/* for the input to convert */}
            value={isMetersToKilometers ? meters : kilometers} {/* deciding wether the input is meters or kilometers */}
            onChange={isMetersToKilometers ? handleMetersChange : handleKilometersChange} {/* for the input to change */}
            placeholder={isMetersToKilometers ? "Meters" : "Kilometers"}   {/* for the placeholder to change */}
            className="p-2 border-4 border-orange-400 rounded-3xl"
          />
          <span className="text-2xl text-orange-500 pl-4 font-extrabold">
            {isMetersToKilometers ? "m" : "km"}    {/* for the text to change between meters and kilometers */}
          </span>
        </div>
        <div>
          <input {/* same thing as the top */}
            type="number"
            value={isMetersToKilometers ? kilometers : meters}
            onChange={isMetersToKilometers ? handleKilometersChange : handleMetersChange}
            placeholder={isMetersToKilometers ? "Kilometers" : "Meters"}
            className="p-2 border-4 border-orange-400 rounded-3xl"
          />
          <span className="text-2xl text-orange-500 pl-4 font-extrabold">
            {isMetersToKilometers ? "km" : "m"}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center w-full max-w-lg mb-40">
        <h2 className="text-2xl font-bold mb-2">Convert Multiple Values</h2> {/* for the title of the array input */}
        <input
          type="text"
          value={arrayInput} {/* for the input to convert the array */}
          onChange={(e) => setArrayInput(e.target.value)} {/* for the input to take the numbers, parse them and get their values */}
          placeholder="Enter values separated by commas (e.g., 100, 200, 300)"
          className="p-2 border-4 border-orange-400 rounded-3xl w-full"
        />
        <button
          onClick={handleArrayConvert} {/* for the button to convert the array */}
          className="mt-4 px-4 py-2 bg-blue-400 border-4 border-blue-500 text-white font-semibold rounded-3xl"
        >
          Convert List
        </button>
        <ul className="mt-4"> {/* for the list of the converted values */}
          {convertedArray.map((result, index) => (
            <li key={index} className="text-lg text-orange-500 font-bold">
              {result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DistanceConverter;
