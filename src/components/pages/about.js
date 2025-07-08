import React from 'react';
import '../css/pages/about/about.css';

const about = [
  {
    title: "Programming Languages",
    description: "Python, JavaScript, C#, ABAP, SQL",
    new: "Typescript, Java" 
  },
  {
    title: "Tools & Technologies",
    description: "Power BI, .NET, Microsoft SQL Server, Django, React, SAP",
    new: ""
  },
  {
    title: "Version Control",
    description: "GitHub, Bitbucket",
    new: ""
  },
  {
    title: "Project Management",
    description: "JIRA, Confluence, Notion",
    new: ""
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
