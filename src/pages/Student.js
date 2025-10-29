import React from 'react';

const Student = () => {
  return (
    <div className="page">
      <div className="container">
        <h1>Student Services</h1>
        <div className="services-list">
          <div className="service-item">
            <h3>Scholarships</h3>
            <p>Apply for various government scholarships and financial aid programs</p>
          </div>
          <div className="service-item">
            <h3>Education Loans</h3>
            <p>Get information about subsidized education loans</p>
          </div>
          <div className="service-item">
            <h3>Career Guidance</h3>
            <p>Access career counseling and job placement services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;