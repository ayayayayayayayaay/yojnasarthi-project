import React from 'react';

const Home = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="hero">
          <h1>Welcome to Government Portal</h1>
          <p>Your gateway to government services and information</p>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <h3>Student Services</h3>
            <p>Scholarships, education loans, and academic resources</p>
          </div>
          <div className="service-card">
            <h3>Senior Citizen Services</h3>
            <p>Pension schemes, healthcare, and welfare programs</p>
          </div>
          <div className="service-card">
            <h3>Women Empowerment</h3>
            <p>Support programs, safety initiatives, and career development</p>
          </div>
          <div className="service-card">
            <h3>Farmer Support</h3>
            <p>Agricultural subsidies, crop insurance, and farming assistance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;