import React from 'react';
import '../css/pages/experience/experience.css';

const experiences = [
  {
    role: "System Development Specialist",
    company: "VESTEL",
    period: "Oct 2024 – Present",
    description: "\n• Led data preparation and reporting processes using Power BI, transforming rawdata into actionable insights.\n• Designed and developed a web-based reporting system using Python (Django),React, and MSSQL, integrating Power BI for enhanced data visualization.\n• Managed version control with GitHub to ensure efficient collaboration across teams."
  },
  {
    role: "Software Specialist Assistant",
    company: "Inci GS Yuasa",
    period: "Oct 2022 – Oct 2024",
    description: "\n• Developed business reports using MSSQL, SAP-ABAP, and Power BI for data visualization.\n• Digitized manual processes with JavaScript to enhance operational efficiency.\n• Actively contributed to the SAP ECC to SAP HANA migration project.\n• Conducted Python training sessions for employees to enhance their technical skills.\n• Oversaw infrastructure setup for mobile application projects and managed Bitbucket for version control."
  },
  {
    role: "Intern",
    company: "SISKON Industrial Software Automation",
    period: "Mar – Jun 2021",
    description: "\n• Developed a Microsoft Teams ChatBot using Python to automate tasks, speeding up employee workflows.\n• Improved SQL skills by working with stored procedures and optimizing data management processes.\n• Gained hands-on experience with Docker and Git, while collaborating in a team environment."
  }
 
];

const Experience = () => {
  return (
    <section className="experience">
  <div className="experience-scroll-container">
    <div className="experience-list">
      {experiences.map((exp, index) => (
        <div className="experience-item" key={index}>
          <h3>
            {exp.role} <span>@ {exp.company}</span>
          </h3>
          <p className="period">{exp.period}</p>
          {exp.description.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Experience;
