import React from 'react';
import "../components/contactCard.css";


const ContactCard = ({icon: Icon, heading, description, contact}) => {
    return (
        <div className="contact-card">
          <Icon className="contact-icon" />
          <h4 className="contact-heading">{heading}</h4>
          <p className="contact-description">{description}</p>
          <p className="contact-info">{contact}</p>
        </div>
  )
}

export default ContactCard