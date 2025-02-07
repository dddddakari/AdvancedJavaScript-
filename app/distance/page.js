"use client";
import React, { useState } from "react";
import Plane from "./component/plane";

const DistanceConverter = () => {
  const [meters, setMeters] = useState("");
  const [kilometers, setKilometers] = useState("");
  const [arrayInput, setArrayInput] = useState("");
  const [convertedArray, setConvertedArray] = useState([]);
  const [isMetersToKilometers, setIsMetersToKilometers] = useState(true);

  const handleMetersChange = (e) => {
    const value = e.target.value;
    setMeters(value);
    setKilometers((value / 1000).toFixed(2));
  };

  const handleKilometersChange = (e) => {
    const value = e.target.value;
    setKilometers(value);
    setMeters((value * 1000).toFixed(2));
  };

  const handleArrayConvert = () => {
    const values = arrayInput
      .split(",")
      .map((val) => val.trim())
      .filter((val) => val !== "");

    const convertedValues = values.map((val) => {
      const num = parseFloat(val);
      return isMetersToKilometers
        ? (num / 1000).toFixed(2) + " km"
        : (num * 1000).toFixed(2) + " m";
    });

    setConvertedArray(convertedValues);
  };

  const toggleConversion = () => {
    setIsMetersToKilometers(!isMetersToKilometers);
    setMeters("");
    setKilometers("");
    setArrayInput("");
    setConvertedArray([]);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-6xl font-extrabold mb-10">Distance Converter</h1>
      <Plane />
      <button
        onClick={toggleConversion}
        className="mb-4 px-4 py-2 bg-yellow-400 border-4 border-orange-500 text-black font-semibold rounded-3xl mt-20 mb-10"
      >
        {isMetersToKilometers
          ? "Switch From Kilometers to Meters"
          : "Switch from Meters to Kilometers"}
      </button>

      <div className="flex flex-col sm:flex-row gap-5 mb-10">
        <div>
          <input
            type="number"
            value={isMetersToKilometers ? meters : kilometers}
            onChange={isMetersToKilometers ? handleMetersChange : handleKilometersChange}
            placeholder={isMetersToKilometers ? "Meters" : "Kilometers"}
            className="p-2 border-4 border-orange-400 rounded-3xl"
          />
          <span className="text-2xl text-orange-500 pl-4 font-extrabold">
            {isMetersToKilometers ? "m" : "km"}
          </span>
        </div>
        <div>
          <input
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
        <h2 className="text-2xl font-bold mb-2">Convert Multiple Values</h2>
        <input
          type="text"
          value={arrayInput}
          onChange={(e) => setArrayInput(e.target.value)}
          placeholder="Enter values separated by commas (e.g., 100, 200, 300)"
          className="p-2 border-4 border-orange-400 rounded-3xl w-full"
        />
        <button
          onClick={handleArrayConvert}
          className="mt-4 px-4 py-2 bg-blue-400 border-4 border-blue-500 text-white font-semibold rounded-3xl"
        >
          Convert List
        </button>
        <ul className="mt-4">
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
