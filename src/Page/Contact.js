import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="container">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
          If you need assistance, you can contact us using the information below:
        </p>

        <div className="company-info">
          <h2>TOZEPY</h2>
          <p>
            <strong>Email:</strong>zepy@company.com
          </p>
          <p>
            <strong>Phone:</strong> 6301896368
          </p>
          <p>
            <strong>Address:</strong> Bagmane Tech park ,Banglore-560037
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;