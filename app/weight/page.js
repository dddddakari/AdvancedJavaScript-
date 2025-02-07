"use client";
import React, { useState } from "react";
import Jogging from "./component/jog";

const WeightConverter = () => {
  const [kg, setKg] = useState("");
  const [lbs, setLbs] = useState("");
  const [arrayInput, setArrayInput] = useState("");
  const [convertedArray, setConvertedArray] = useState([]);
  const [isKgToLbs, setIsKgToLbs] = useState(true);

  const handleKgChange = (e) => {
    const value = e.target.value;
    setKg(value);
    setLbs((value * 2.20462).toFixed(2));
  };

  const handleLbsChange = (e) => {
    const value = e.target.value;
    setLbs(value);
    setKg((value / 2.20462).toFixed(2));
  };

  const handleArrayConvert = () => {
    const values = arrayInput
      .split(",")
      .map((val) => val.trim())
      .filter((val) => val !== "");

    const convertedValues = values.map((val) => {
      const num = parseFloat(val);
      return isKgToLbs
        ? (num * 2.20462).toFixed(2) + " lbs"
        : (num / 2.20462).toFixed(2) + " kg";
    });

    setConvertedArray(convertedValues);
  };

  const toggleConversion = () => {
    setIsKgToLbs(!isKgToLbs);
    setKg("");
    setLbs("");
    setArrayInput("");
    setConvertedArray([]);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-6xl font-extrabold mb-10">Weight Converter</h1>
      <Jogging />
      <button
        onClick={toggleConversion}
        className="mb-4 px-4 py-2 bg-yellow-400 border-4 border-orange-500 text-black font-semibold rounded-3xl mt-20 mb-10"
      >
        {isKgToLbs ? "Switch to Pounds to Kilograms" : "Switch to Kilograms to Pounds"}
      </button>

      <div className="flex flex-col sm:flex-row gap-5 mb-10">
        <div>
          <input
            type="number"
            value={isKgToLbs ? kg : lbs}
            onChange={isKgToLbs ? handleKgChange : handleLbsChange}
            placeholder={isKgToLbs ? "Kilograms" : "Pounds"}
            className="p-2 border-4 border-orange-400 rounded-3xl"
          />
          <span className="text-2xl text-orange-500 pl-4 font-extrabold">
            {isKgToLbs ? "kg" : "lbs"}
          </span>
        </div>
        <div>
          <input
            type="number"
            value={isKgToLbs ? lbs : kg}
            onChange={isKgToLbs ? handleLbsChange : handleKgChange}
            placeholder={isKgToLbs ? "Pounds" : "Kilograms"}
            className="p-2 border-4 border-orange-400 rounded-3xl"
          />
          <span className="text-2xl text-orange-500 pl-4 font-extrabold">
            {isKgToLbs ? "lbs" : "kg"}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center w-full max-w-lg mb-40">
        <h2 className="text-2xl font-bold mb-2">Convert Multiple Values</h2>
        <input
          type="text"
          value={arrayInput}
          onChange={(e) => setArrayInput(e.target.value)}
          placeholder="Enter values separated by commas (e.g., 50, 100, 150)"
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

export default WeightConverter;
