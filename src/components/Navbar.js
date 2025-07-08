import React, { useEffect, useState } from 'react';
import './css/utilities.css';

const sectionIds = ['home', 'about', 'projects', 'experience', 'contact'];
const sectionNames = {
  home: 'Welcome',
  about: 'About',
  projects: 'Projects',
  experience: 'Experiences',
  contact: 'Contact me',
};

const Navbar = ({ isMobile }) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  
  if (isMobile) {
    return (
      <div className="navbar-mobile-title">
        {sectionNames[activeSection] || ''}
      </div>
    );
  }

  // 👉 Masaüstü görünüm: klasik navbar
  return (
    <nav className="navbar">
      <ul>
        {sectionIds.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
            >
              {sectionNames[id]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
