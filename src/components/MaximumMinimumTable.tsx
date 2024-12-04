import React from 'react';
import { calculateMaxMinProduction } from '../utils/dataUtils';
import { agricultureData } from '../data/agricultureData';

const maxMinData = calculateMaxMinProduction(agricultureData);

const MaximumMinimumTable: React.FC = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Year</th>
          <th>Crop with Maximum Production</th>
          <th>Crop with Minimum Production</th>
        </tr>
      </thead>
      <tbody>
        {maxMinData.map((row, index) => (
          <tr key={index}>
            <td>{row.year}</td>
            <td>{row.cropWithMaxProduction}</td>
            <td>{row.cropWithMinProduction}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MaximumMinimumTable;
