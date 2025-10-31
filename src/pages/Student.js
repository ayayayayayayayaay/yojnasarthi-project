import React from 'react';

const Student = () => {
  const schemes = [
    {
      title: "National Scholarship Portal (NSP)",
      description: "Central platform for various scholarship schemes for students",
      link: "https://scholarships.gov.in"
    },
    {
      title: "PM Internship Scheme",
      description: "Skill development and internship opportunities for students",
      link: "#"
    },
    {
      title: "Education Loan Subsidy",
      description: "Interest subsidy on education loans for higher studies",
      link: "#"
    },
    {
      title: "AICTE Scholarships",
      description: "Technical education scholarships and grants",
      link: "#"
    }
  ];

  return (
    <div className="container">
      <div className="section-page">
        <div className="section-header">
          <h2><i className="fas fa-graduation-cap"></i> Student Benefits & Schemes</h2>
          <p>Educational support and opportunities for students</p>
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

export default Student;