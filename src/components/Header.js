import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <div className="emblem">
                <i className="fas fa-university"></i>
              </div>
              <div className="site-title">
                <h1>Government Portal</h1>
                <p>भारत सरकार | Government of India</p>
              </div>
            </div>
            <div className="contact-info">
              <p><i className="fas fa-phone"></i> Helpline: 1800-XXX-XXXX</p>
            </div>
          </div>
        </div>
      </header>
      
      <nav className="nav">
        <div className="container">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/student">Students</Link></li>
            <li><Link to="/senior">Senior Citizens</Link></li>
            <li><Link to="/women">Women</Link></li>
            <li><Link to="/farmer">Farmers</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;