import React from 'react';
import '../css/pages/experience/experience.css';

const experiences = [
  {
    role: "System Development Specialist",
    company: "VESTEL",
    period: "Oct 2024 – Present",
    description: `
• Developed a web-based application (Python/Django, React, MSSQL) integrated with Power BI, reducing manual reporting time by 40%.\n
• Designed and implemented ETL processes, ensuring accurate data extraction, transformation, and loading, which improved reporting accuracy and efficiency.\n
• Delivered actionable insights by transforming raw data into interactive dashboards and automated reports.\n
• Streamlined version control workflows using GitHub, enhancing team collaboration and code quality.\n
• Contributed to RFI & RFQ processes, led e-contract implementation, and performed detailed planning/scheduling analysis.\n
• Designed and documented process flow diagrams using draw.io, improving project transparency and process optimization.\n
`
  },
  {
    role: "Software Specialist Assistant",
    company: "Inci GS Yuasa",
    period: "Oct 2022 – Oct 2024",
    description: `
• Built enterprise-scale business intelligence reports (MSSQL, T-SQL, SQL Server Agent, SAP-ABAP, Power BI), enabling data-driven decision-making across departments.\n
• Automated key workflows and scheduled report generation using JavaScript, T-SQL, and SQL Server Agent, reducing manual processing time by 50%.\n
• Conducted data analysis and system testing to support SAP ECC to SAP HANA migration, ensuring a smooth transition with minimal downtime.\n
• Delivered Python training sessions to improve employees’ technical skills and promote internal knowledge sharing.\n
• Managed Bitbucket repositories and coordinated version control for mobile application development projects.\n
• Optimized ETL workflows to improve data extraction, transformation, and loading speed, enhancing overall reporting efficiency.\n
`
  },
  {
    role: "Intern",
    company: "SISKON Industrial Software Automation",
    period: "Mar – Jun 2021",
    description: `
• Developed a Microsoft Teams ChatBot using Python to automate repetitive tasks, reducing time spent on manual work.\n
• Improved database efficiency through SQL stored procedure optimization.\n
• Gained hands-on experience with Docker and collaborative version control (Git).\n
`
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
