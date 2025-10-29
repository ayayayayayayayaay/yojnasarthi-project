import React from 'react';

const Farmer = () => {
  return (
    <div className="page">
      <div className="container">
        <h1>Farmer Support</h1>
        <div className="services-list">
          <div className="service-item">
            <h3>Agricultural Subsidies</h3>
            <p>Information about various agricultural subsidies and support schemes</p>
          </div>
          <div className="service-item">
            <h3>Crop Insurance</h3>
            <p>Crop insurance schemes to protect farmers from losses</p>
          </div>
          <div className="service-item">
            <h3>Farming Assistance</h3>
            <p>Technical assistance and modern farming techniques</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Farmer;