import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Student from './pages/Student';
import Senior from './pages/Senior';
import Women from './pages/Women';
import Farmer from './pages/Farmer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/student" element={<Student />} />
            <Route path="/senior" element={<Senior />} />
            <Route path="/women" element={<Women />} />
            <Route path="/farmer" element={<Farmer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;