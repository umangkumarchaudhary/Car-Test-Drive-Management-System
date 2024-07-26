// src/components/CarModelDropdown.js
import React from 'react';

const CarModelDropdown = ({ onChange, isCarAvailable, selectedCarModel }) => {
  const carModels = [
    { value: 'A200', label: 'A200' },
    { value: 'A200d', label: 'A200d' },
    { value: 'C200', label: 'C200' },
    { value: 'C220d', label: 'C220d' },
    { value: 'C300', label: 'C300' },
    { value: 'E200', label: 'E200' },
    { value: 'E220d', label: 'E220d' },
    { value: 'E350d', label: 'E350d' },
    { value: 'S350', label: 'S350' },
    { value: 'GLA', label: 'GLA' },
    { value: 'GLC', label: 'GLC' },
    { value: 'GLB', label: 'GLB' },
    { value: 'GLS', label: 'GLS' },
    { value: 'EQA', label: 'EQA' },
    { value: 'EQB', label: 'EQB' },
    { value: 'EQS', label: 'EQS' },
  ];

  return (
    <select
      onChange={(e) => onChange(carModels.find(model => model.value === e.target.value))}
      value={selectedCarModel?.value || ''}
    >
      <option value="">Select a car model</option>
      {carModels.map((model) => (
        <option
          key={model.value}
          value={model.value}
          disabled={!isCarAvailable(model.value)}
          style={{
            color: !isCarAvailable(model.value) ? 'gray' : 'black'
          }}
        >
          {model.label} {!isCarAvailable(model.value) && '(Unavailable)'}
        </option>
      ))}
    </select>
  );
};

export default CarModelDropdown;
