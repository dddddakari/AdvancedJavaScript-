import React, { useState } from "react";

const UnitConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("kg");
  const [toUnit, setToUnit] = useState("lb");
  const [result, setResult] = useState("");

  const handleConvert = () => {
    const convertedValue = convertUnits(Number(inputValue), fromUnit, toUnit);
    setResult(convertedValue);
  };

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter value"
      />
      <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
        <option value="kg">Kilograms</option>
        <option value="lb">Pounds</option>
        <option value="mi">Miles</option>
        <option value="km">Kilometers</option>
        <option value="c">Celsius</option>
        <option value="f">Fahrenheit</option>
      </select>
      <span> to </span>
      <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
        <option value="kg">Kilograms</option>
        <option value="lb">Pounds</option>
        <option value="mi">Miles</option>
        <option value="km">Kilometers</option>
        <option value="c">Celsius</option>
        <option value="f">Fahrenheit</option>
      </select>
      <button onClick={handleConvert}>Convert</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default UnitConverter;