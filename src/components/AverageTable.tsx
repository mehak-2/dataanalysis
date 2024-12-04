import React from 'react';
import { calculateAverageYieldAndArea } from '../utils/dataUtils';
import { agricultureData } from '../data/agricultureData';

const AverageTable: React.FC = () => {
  const avgData = calculateAverageYieldAndArea(agricultureData);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Crop</th>
          <th>Average Yield (1950-2020)</th>
          <th>Average Cultivation Area (1950-2020)</th>
        </tr>
      </thead>
      <tbody>
        {avgData.map((row, index) => (
          <tr key={index}>
            <td>{row.crop}</td>
            <td>{row.averageYield}</td>
            <td>{row.averageArea}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AverageTable;
