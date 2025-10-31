import React from 'react';

const Senior = () => {
  const schemes = [
    {
      title: "Pradhan Mantri Vaya Vandana Yojana (PMVVY)",
      description: "Pension scheme providing assured returns for senior citizens",
      link: "#"
    },
    {
      title: "National Pension System (NPS)",
      description: "Retirement savings scheme with tax benefits",
      link: "#"
    },
    {
      title: "Ayushman Bharat Health Scheme",
      description: "Health insurance coverage for senior citizens",
      link: "#"
    },
    {
      title: "Senior Citizen Travel Concessions",
      description: "Railway and airline discounts for senior citizens",
      link: "#"
    }
  ];

  return (
    <div className="container">
      <div className="section-page">
        <div className="section-header">
          <h2><i className="fas fa-user-friends"></i> Senior Citizen Benefits</h2>
          <p>Pension, healthcare and welfare schemes for senior citizens</p>
        </div>
        
        <div className="schemes-grid">
          {schemes.map((scheme, index) => (
            <div key={index} className="scheme-card">
              <h4>{scheme.title}</h4>
              <p>{scheme.description}</p>
              <a href={scheme.link} className="scheme-link" target="_blank" rel="noopener noreferrer">
                Learn More <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Senior;