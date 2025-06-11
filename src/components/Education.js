import React from 'react';
import '../styles/Education.css';
import SectionTitle from './SectionTitle';

function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <SectionTitle title="Education" />
        <div className="education-item">
          <div className="education-header">
            <div className="education-degree">
              <h3>Bachelor of Science in Computer Science</h3>
              <p>Minor in Chinese</p>
            </div>
            <div className="education-details">
              <h4>Georgia Institute of Technology</h4>
              <p>August 2022 – May 2026</p>
            </div>
          </div>
          <ul className="education-highlights">
            <li>Theory and Information Internetworks Concentrations</li>
            <li>International Plan candidate with study abroad experience in Hong Kong and China</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;