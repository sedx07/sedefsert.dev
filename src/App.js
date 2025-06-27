import React from 'react';
import Home from './components/pages/home';
import About from './components/pages/about';
import Projects from './components/pages/projects';
import Experience from './components/pages/experience';
// import Blog from './components/pages/blog';
import Contact from './components/pages/contact';
// import ScrollButtons from './components/scrollButoons';
import Navbar from './components/Navbar';

import useIsMobile from './hooks/useIsMobile';




function App() {

  const isMobile = useIsMobile();

  return (
    <div>
      <Navbar isMobile={isMobile} />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="experience"><Experience /></section>
      <section id="contact"><Contact /></section>
    </div>

    
  );
}

export default App;
