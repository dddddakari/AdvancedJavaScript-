import React from 'react';

export const createConverter = (fromUnit, ToUnit) => {

    return(value) => {
        if (Array.isArray(value)) {
            return value.map((v) => convertSingleValue(v, fromUnit, toUnit))
        }
        return convertSingleValue(value, fromUnit, toUnit);
    };
};
const convertUnits = (value, fromUnit, toUnit) => {
    if (fromUnit === "kg" && toUnit === "lb") {
      return value * 2.20462; // Kilograms to pounds
    } else if (fromUnit === "lb" && toUnit === "kg") {
      return value * 0.453592; // Pounds to kilograms
    } else if (fromUnit === "mi" && toUnit === "km") {
      return value * 1.60934; // Miles to kilometers
    } else if (fromUnit === "km" && toUnit === "mi") {
      return value * 0.621371; // Kilometers to miles
    } else if (fromUnit === "c" && toUnit === "f") {
      return value * 1.8 + 32; // Celsius to Fahrenheit
    } else if (fromUnit === "f" && toUnit === "c") {
      return (value - 32) * (5 / 9); // Fahrenheit to Celsius
    }
  
    console.warn("Unsupported unit conversion:", fromUnit, "to", toUnit);
    return value;
  };

export default conversion
