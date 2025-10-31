import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const categories = [
    {
      id: 'student',
      icon: 'fas fa-graduation-cap',
      title: 'Student Section',
      description: 'Scholarships, Education Loans, Skill Development Programs',
      path: '/student'
    },
    {
      id: 'senior',
      icon: 'fas fa-user-friends',
      title: 'Senior Citizen Section',
      description: 'Pension Schemes, Health Benefits, Travel Concessions',
      path: '/senior'
    },
    {
      id: 'women',
      icon: 'fas fa-female',
      title: 'Women Section',
      description: 'Entrepreneurship, Safety Schemes, Maternity Benefits',
      path: '/women'
    },
    {
      id: 'farmer',
      icon: 'fas fa-seedling',
      title: 'Farmer Section',
      description: 'Crop Insurance, Kisan Credit, Irrigation Schemes',
      path: '/farmer'
    }
  ];

  return (
    <div className="container">
      <div className="hero">
        <h2>Government Schemes & Benefits Portal</h2>
        <p>Your gateway to authentic government schemes and benefits</p>
        
        <div className="auth-buttons">
          <Link to="/login" className="auth-link login-btn">
            <i className="fas fa-sign-in-alt"></i> Login
          </Link>
          <Link to="/signup" className="auth-link signup-btn">
            <i className="fas fa-user-plus"></i> Sign Up
          </Link>
        </div>
      </div>
      
      <div className="cards-grid">
        {categories.map(category => (
          <Link to={category.path} key={category.id} className="card">
            <div className="card-icon">
              <i className={category.icon}></i>
            </div>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;