import React from 'react';
import '../css/pages/about/about.css';

const about = [
  {
    title: "Programming Languages",
    description: "Python, JavaScript, C#, ABAP, SQL, SAP" 
  },
  {
    title: "Tools & Technologies",
    description: "Power BI, .NET, Microsoft SQL Server, Django, React"
  },
  {
    title: "Version Control",
    description: "GitHub, Bitbucket"
  },
  {
    title: "Project Management",
    description: "JIRA, Confluence"
  }, 
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-line" />
        <div className="about-content">
          {about.map((item, index) => (
            <div className="about-row" key={index}>
              <strong className="about-title">{item.title}:</strong>
              <span className="about-desc">{item.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
