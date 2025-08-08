import React from 'react';
import '../css/pages/about/about.css';

const about = [
  {
    title: "Programming Languages",
    description: "Python, JavaScript, C#, ABAP, SQL, T-SQL",
    new: ""
  },
  {
    title: "Frameworks & Tools",
    description: "Django, React, .NET, DevExpress, Docker, SQL Server Agent",
    new: ""
  },
  {
    title: "Data Visualization",
    description: "Power BI, SAP Analytics",
    new: ""
  },
  {
    title: "Version Control",
    description: "GitHub, Bitbucket",
    new: ""
  },
  {
    title: "Project Management",
    description: "JIRA, Confluence",
    new: ""
  }
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
                {item.new && (<span className="about-new">
                    <em>new: {item.new}</em>
                               </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
