import React from 'react';
import '../styles/Experience.css';
import SectionTitle from './SectionTitle';

function Experience() {
  const experiences = [
    {
      title: 'Data Engineering Co-Op',
      company: 'Delta Air Lines',
      location: 'Atlanta, GA',
      period: 'January 2024 – Present',
      responsibilities: [
        'Worked in the Decision Science team optimizing processes using AWS tools such as Lambda, Glue, adapting to constantly changing business requirements of the airline',
        'Developed the Ops Spare ETL which aims to ensure network redundancy by automatic swapping spare aircraft in the event of delays and scheduled maintenance using AWS services for the analytics jobs saving aircraft routers time, making delay responses faster',
        'Helped support several projects by collaborating with the SWE and Data Science teams through code review using merge requests, helped set up CI/CD pipelines, implemented SDLC, and successfully brought projects like Ops Spare to production',
        'Developed and led the development of a cost allocation reporting ETL using Redshift, Apache Airflow, Glue Data Catalog, and Lambda, saving Delta at least $1,000 on unnecessary cloud computing resource use every month'
      ]
    },
    {
      title: 'Undergraduate Researcher',
      company: 'Georgia Tech Sherrill Group',
      location: 'Atlanta, GA',
      period: 'October 2022 – December 2023',
      responsibilities: [
        'Developed Python scripts around the Psi4 software to launch and track 200+ CCSD(T) calculations on Georgia Tech\'s supercomputer, cutting manual setup time by 75%',
        'Parsed 1.2 TB of Psi4 log files across 250 outputs, extracting HF energies, CCSD(T) correlation, and perturbative-triples contributions into 12 structured CSVs',
        'Performed exploratory data analysis in Jupyter Notebooks, leveraging Matplotlib to create 40+ visualizations across 500+ molecular systems revealing key trends in binding energetics'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <SectionTitle title="Work Experience" />
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-header">
                <div className="experience-role">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                </div>
                <div className="experience-details">
                  <p className="experience-location">{exp.location}</p>
                  <p className="experience-period">{exp.period}</p>
                </div>
              </div>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;