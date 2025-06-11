import React, { useState } from 'react';
import '../styles/Contact.css';
import SectionTitle from './SectionTitle';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionTitle title="Get In Touch" />
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>gamezquita@gatech.edu</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p>678-542-0412</p>
            </div>
            <div className="contact-item">
              <i className="fab fa-linkedin"></i>
              <p><a href="https://linkedin.com/in/gabeamezquita/" target="_blank" rel="noopener noreferrer">linkedin.com/in/gabeamezquita/</a></p>
            </div>
            <div className="contact-item">
              <i className="fas fa-globe"></i>
              <p><a href="https://gabrielamezquita.com" target="_blank" rel="noopener noreferrer">gabrielamezquita.com</a></p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;