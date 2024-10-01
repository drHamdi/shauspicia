import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import './ContactStyles.css';

export const Contact = () => {
  const form = useRef(null); // Initialize form reference
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Ensure the form exists before trying to send it
    if (form.current) {
      emailjs
        .sendForm('service_c0tcjea', 'template_j1ep46n', form.current, 'P6qye5ERgGa6PXFoX') // Use public key as the 4th argument
        .then(
          () => {
            console.log('SUCCESS!');
            setShowSuccessModal(true);
            setFormSubmitted(true);
            deleteFormData(); // Clear form data after successful submission
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  const deleteFormData = () => {
    if (form.current) {
      form.current.reset(); // Safely reset form fields
    }
  };

  return (
    <div id="clients" className="clients-section">
      {!formSubmitted ? (
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h2 className="contact-heading">Contact</h2>
          <p className="contact-description">
            Contactez-nous pour une consultation personnalisée. Posez vos questions sur l'amour, le travail, ou la spiritualité.
            madame<span> Silva Helena </span>est à votre écoute pour éclairer votre chemin et vous aider à améliorer votre situation.
          </p>
          <div>
            <label htmlFor="user_name" className="label">Nom</label>
            <input type="text" name="user_name" className="modern-input" required />
          </div>
          <div>
            <label htmlFor="user_mobile" className="label">Mobile</label>
            <input type="text" name="user_mobile" className="modern-input" required />
          </div>
          <div>
            <label htmlFor="user_email" className="label">Email</label>
            <input type="email" name="user_email" className="modern-input" required />
          </div>
          <div>
            <label htmlFor="message" className="label">Message</label>
            <textarea name="message" className="modern-textarea" required></textarea>
          </div>
          <div>
            <input type="submit" value="Envoyer" className="submit-button" />
          </div>
        </form>
      ) : null}
      {showSuccessModal && (
        <div className="success-modal">
          <FontAwesomeIcon icon={faCheckCircle} size="5x" className="success-icon" />
          <p className="success-message">Message envoyé avec succès!</p>
        </div>
      )}
    </div>
  );
};

export default Contact;

