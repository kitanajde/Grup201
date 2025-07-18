// Not: Üstteki menü çubuğu. Sayfa geçişleri için Link kullandım.
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" style={{ marginRight: '1.2rem' }}>🎯 Focus Tracker</div>
      <div className="hamburger" onClick={handleMenuToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
        {/* Menüdeki tuşlar. İleride yeni sayfalar eklenebilir. */}
        <li><Link to="/">Ana Sayfa</Link></li>
        <li><Link to="/about">Biz Kimiz?</Link></li>
        <li><Link to="/student-panel">Öğrenci Girişi</Link></li>
        <li><Link to="/teacher-panel">Öğretmen Girişi</Link></li>
        <li><Link to="/register">Kayıt Ol</Link></li>
        <li><Link to="/pomodoro">⏲️ Pomodoro</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar; 