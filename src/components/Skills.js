import React from 'react';
import '../styles/Skills.css';
import SectionTitle from './SectionTitle';

function Skills() {
  const technicalSkills = [
    {
      category: 'Programming Languages',
      items: ['Java', 'SQL (Teradata/PostgreSQL)', 'Python', 'C/C++', 'JavaScript', 'HTML/CSS']
    },
    {
      category: 'Software',
      items: ['PowerBI', 'DBeaver', 'MySQL', 'Excel', 'LaTeX']
    },
    {
      category: 'Frameworks',
      items: ['React', 'Flask', 'Angular', 'Django']
    },
    {
      category: 'Cloud',
      items: ['AWS (S3, Lambda, Glue, EC2, SNS, SES, Step Functions, Athena, Redshift)', 'Apache Airflow']
    },
    {
      category: 'Developer Tools',
      items: ['Git', 'Docker', 'CI/CD Pipelines', 'SDLC', 'Agile (Scrum)', 'Unit Testing (PyTest, JUnit)', 'VIM']
    },
    {
      category: 'Libraries',
      items: ['Pandas', 'NumPy', 'Matplotlib', 'SQLAlchemy', 'TensorFlow', 'Keras', 'Torch']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionTitle title="Skills & Expertise" />
        
        <div className="technical-skills">
          {technicalSkills.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3>{category.category}</h3>
              <ul>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;