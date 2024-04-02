// Main Component
import React from 'react';
import Navbar from './Navbar';
import Body from './Body';

const MainComponent = () => {
  const data = [
    { column1: 'Data1', column2: 'Data2', column3: 'Data3' },
    // More data...
  ];

  return (
    <div className="main">
      <Navbar />
      <Body data={data} />
    </div>
  );
};

export default MainComponent;
