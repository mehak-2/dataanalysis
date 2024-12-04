import React from 'react';
import '../index.css'; 
import MaximumMinimumTable from '../components/MaximumMinimumTable';
import AverageTable from '../components/AverageTable';

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">Indian Agriculture Data Analysis</h1>

      <div className="card">
        <h2 className="card-title">Maximum and Minimum Production by Year</h2>
        <MaximumMinimumTable />
      </div>

      <div className="card">
        <h2 className="card-title">Average Yield and Cultivation Area (1950-2020)</h2>
        <AverageTable />
      </div>
    </div>
  );
};

export default HomePage;