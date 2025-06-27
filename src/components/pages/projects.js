import React from 'react';
import '../css/pages/projects/projects.css';

const projects = [
  {
    title: 'mobile app1',
    description: 'summary',
    link: '#'
  },
  {
    title: 'mobile app2',
    description: 'summary',
    link: '#'
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>projects</h2>
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
