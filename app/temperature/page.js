// Name: Dakari Sow
// Date: Febuary 6th 2025
// This page is convert celsius to farenheit or convert fareinheit to celsius!

"use client";
import React, { useState } from "react";
import Brr from './component/brr.js'

const TemperatureConverter = () => { // This is the main component for the temperature converter
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [arrayInput, setArrayInput] = useState("");
  const [convertedArray, setConvertedArray] = useState([]);
  const [isCelsiusToFahrenheit, setIsCelsiusToFahrenheit] = useState(true);

  const handleCelsiusChange = (e) => { // This function is for the celsius input
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(((value * 9) / 5 + 32).toFixed(2));
  };

  const handleFahrenheitChange = (e) => { // This function is for the fahrenheit input
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius((((value - 32) * 5) / 9).toFixed(2));
  };

  const handleArrayConvert = () => { // This function is for the array input
    const values = arrayInput
      .split(",")
      .map((val) => val.trim())
      .filter((val) => val !== "");

    const convertedValues = values.map((val) => { // This function is for the conversion of the values  
      const num = parseFloat(val);
      return isCelsiusToFahrenheit
        ? ((num * 9) / 5 + 32).toFixed(2) + " °F"
        : (((num - 32) * 5) / 9).toFixed(2) + " °C";
    });

    setConvertedArray(convertedValues); // This is the final input to set them to the converted values
  };

  const toggleConversion = () => { // This function is for the toggle conversion
    setIsCelsiusToFahrenheit(!isCelsiusToFahrenheit);
    setCelsius("");
    setFahrenheit("");
    setArrayInput("");
    setConvertedArray([]);
  };

  /* This is the main return for the temperature converter:
  It contains the following:
  - The Brr component
  - The toggle conversion button
  - The input fields for the temperature conversion
  - The input field for the array conversion
  - The button to convert the array
  - The list of converted values
  */

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-6xl font-extrabold mb-10">Temperature Converter</h1>
      <Brr />
      <button
        onClick={toggleConversion}
        className="mb-4 px-4 py-2 bg-yellow-400 border-4 border-orange-500 text-black font-semibold rounded-3xl mt-20 mb-10"
      >
        {isCelsiusToFahrenheit
          ? "Switch From Fahrenheit to Celsius"
          : "Switch From Celsius to Fahrenheit"}
      </button>

      <div className="flex flex-col sm:flex-row gap-5 mb-10">
        <div>
          <input
            type="number"
            value={isCelsiusToFahrenheit ? celsius : fahrenheit}
            onChange={isCelsiusToFahrenheit ? handleCelsiusChange : handleFahrenheitChange}
            placeholder={isCelsiusToFahrenheit ? "Celsius" : "Fahrenheit"}
            className="p-2 border-4 border-orange-400 rounded-3xl"
          />
          <span className="text-2xl text-orange-500 pl-4 font-extrabold">
            {isCelsiusToFahrenheit ? "°C" : "°F"}
          </span>
        </div>
        <div>
          <input
            type="number"
            value={isCelsiusToFahrenheit ? fahrenheit : celsius}
            onChange={isCelsiusToFahrenheit ? handleFahrenheitChange : handleCelsiusChange}
            placeholder={isCelsiusToFahrenheit ? "Fahrenheit" : "Celsius"}
            className="p-2 border-4 border-orange-400 rounded-3xl"
          />
          <span className="text-2xl text-orange-500 pl-4 font-extrabold">
            {isCelsiusToFahrenheit ? "°F" : "°C"}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center w-full max-w-lg mb-40">
        <h2 className="text-2xl font-bold mb-2">Convert Multiple Values</h2>
        <input
          type="text"
          value={arrayInput}
          onChange={(e) => setArrayInput(e.target.value)}
          placeholder="Enter values separated by commas (e.g., 0, 100, 37.5)"
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

export default TemperatureConverter;
