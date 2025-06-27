import React, { useEffect, useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

const ScrollButtons = () => {
  const sectionIds = ['home', 'about', 'projects', 'experience', 'blog', 'contact'];
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionOffsets = sectionIds.map(id => {
        const el = document.getElementById(id);
        return el ? el.offsetTop : 0;
      });

      const currentIndex = sectionOffsets.findIndex((top, i) => {
        const nextTop = sectionOffsets[i + 1] || Infinity;
        return scrollPosition >= top && scrollPosition < nextTop;
      });

      if (currentIndex !== -1) {
        setCurrentSection(currentIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100); // sayfa açılırken çalışması için
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index) => {
    const section = document.getElementById(sectionIds[index]);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(index); // scroll sonrası currentSection'ı güncelle
    }
  };

  return (
    <div className="scroll-buttons">
      {currentSection > 0 && (
        <button
          className="scroll-btn"
          onClick={() => scrollToSection(0)} // en üste git
        >
          <FiChevronUp size={40} />
        </button>
      )}

      {currentSection < sectionIds.length - 1 && (
        <button
          className="scroll-btn"
          onClick={() => scrollToSection(currentSection + 1)}
        >
          <FiChevronDown size={40} />
        </button>
      )}
    </div>

  );
};

export default ScrollButtons;

