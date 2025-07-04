import React from 'react';
import '../css/pages/projects/projects.css';

const projects = [
  {
    status: 'coming soon!',
    title: 'MySupplyMate',
    description:
      'mobile app that helps you track your pantry, fridge, and cleaning supplies. stay stocked, organized, and always prepared.',
    image: '/img/MySupplyMate_logo.png',
    // link: '#'
  }
];

const Projects = () => {
  return (
    <section className="container2" id="projects">
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {project.image && (
                <img
                src={process.env.PUBLIC_URL + project.image}
                alt={project.title}
                className="project-image"
              />
            )}
            <h3>{project.title}</h3>
            <p>
              <strong>{project.status}</strong>
            </p>
            <p>{project.description}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                Detay
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
