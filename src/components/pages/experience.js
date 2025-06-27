import React from 'react';
import '../css/pages/experience/experience.css';

const experiences = [
  {
    role: "Sistem Geliştirme Uzmanı",
    company: "Vestel",
    period: "2023 - Günümüz",
    description: "SAP geliştirmeleri, süreç dijitalleştirme, otomasyon çözümleri ve yazılım entegrasyonları üzerine çalıştım."
  },
  {
    role: "Stajyer Yazılım Geliştirici",
    company: "ABC Teknoloji",
    period: "2022 Yaz",
    description: "React ve Python projelerine destek oldum. Basit frontend komponentler geliştirdim."
  }
];

const Experience = () => {
  return (
    <section className="experience">
      <h2>Deneyimlerim</h2>
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
