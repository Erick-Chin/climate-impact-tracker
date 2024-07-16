import React, { useState } from 'react';

const DataInputForm: React.FC = () => {
  const [energyUse, setEnergyUse] = useState('');
  const [waterConsumption, setWaterConsumption] = useState('');
  const [waste, setWaste] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add data submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="energyUse">Energy Use (kWh):</label>
        <input
          type="number"
          id="energyUse"
          value={energyUse}
          onChange={(e) => setEnergyUse(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="waterConsumption">Water Consumption (liters):</label>
        <input
          type="number"
          id="waterConsumption"
          value={waterConsumption}
          onChange={(e) => setWaterConsumption(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="waste">Waste (kg):</label>
        <input
          type="number"
          id="waste"
          value={waste}
          onChange={(e) => setWaste(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DataInputForm;
