import React from 'react';
import '../styles/Projects.css';
import SectionTitle from './SectionTitle';

function Projects() {
  const projects = [
    {
      title: 'Hip Prosthesis Loosening Detector',
      description: 'A deep learning framework utilizing OpenAI\'s CLIP (ViT-B/32) computer vision model to classify hip prosthesis loosening from medical images, collaborating with Emory\'s HITI lab.',
      technologies: ['Python', 'PyTorch', 'CLIP', 'Pydicom', 'CUDA'],
      image: 'project1.jpg',
      link: '#'
    },
    {
      title: 'Dynamic Ground Time ETL',
      description: 'An ETL pipeline that identifies aircraft with 6+ hours of scheduled ground time, to swap and increase redundancy of regional aircraft routes subject to delays, cancellation or diversion.',
      technologies: ['Python', 'SQL', 'Pandas', 'Airflow', 'AWS Cloud'],
      image: 'project2.jpg',
      link: '#'
    },
    {
      title: 'Ops Spare ETL',
      description: 'Developed an ETL which aims to ensure network redundancy by automatic swapping spare aircraft in the event of delays and scheduled maintenance using AWS services.',
      technologies: ['AWS Lambda', 'AWS Glue', 'Python', 'SQL', 'Teradata'],
      image: 'project3.jpg',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <SectionTitle title="My Projects" />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={`/images/${project.image}`} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;