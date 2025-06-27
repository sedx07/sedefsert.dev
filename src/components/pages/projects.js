import React from 'react';
import '../css/pages/projects/projects.css';

const projects = [
  {
    title: 'Evcil Hayvan Takip Uygulaması',
    description: 'Evcil hayvanınızın konumunu ve sağlık durumunu takip edebileceğiniz bir mobil uygulama.',
    link: '#'
  },
  {
    title: 'Kişisel Portföy Web Sitesi',
    description: 'React, GitHub Pages ve modern CSS ile geliştirilmiş portföy sitesi.',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projelerim</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">Detay</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
