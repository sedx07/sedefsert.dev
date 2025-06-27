import React from 'react';
import '../css/pages/experience/experience.css';

const experiences = [
  {
    role: "role1",
    company: "company1",
    period: "2023 - tuday",
    description: "summary"
  },
  {
    role: "role2",
    company: "company2",
    period: "2021 - 2023",
    description: "summary"
  },
];

const Experience = () => {
  return (
    <section className="experience">
      <h2>experiences</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <h3>{exp.role} <span>@ {exp.company}</span></h3>
            <p className="period">{exp.period}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
