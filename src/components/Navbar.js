import React, { useEffect, useState } from 'react';
import './css/utilities.css';

const sectionIds = ['home', 'about', 'projects', 'experience', 'blog', 'contact'];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // %60 görünür olunca aktif say
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

  return (
    <nav className="navbar">
      <ul>
        {sectionIds.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeSection === id ? 'active' : ''}
            >
              {id === 'home' && 'Ana Sayfa'}
              {id === 'about' && 'Hakkımda'}
              {id === 'projects' && 'Projeler'}
              {id === 'experience' && 'Deneyim'}
              {id === 'blog' && 'Blog'}
              {id === 'contact' && 'İletişim'}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
