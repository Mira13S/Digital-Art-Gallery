import React from "react";
import "./Contact.css";
import { Typography, Container } from "@material-ui/core";
import { Email, Phone, LocationOn, Instagram, Facebook } from "@material-ui/icons";

const Contact = () => {
  return (
    <div className="contactContainer">
      <Container className="contactWrapper">
        <Typography variant="h3" className="contactHeading">
          Get In Touch
        </Typography>
        
        <div className="contactInfo">
          <div className="contactItem">
            <Email className="contactIcon" />
            <a href="mailto:meghadrikoley9@gmail.com" className="contactLink">
              artvista@gmail.com
            </a>
          </div>

          <div className="contactItem">
            <Phone className="contactIcon" />
            <a href="tel:+1234567890" className="contactLink">
              +91 0123456789
            </a>
          </div>

          <div className="contactItem">
            <LocationOn className="contactIcon" />
            <p className="contactText">Pune, Maharashtra, India</p>
          </div>

          <div className="socialLinks">
            <a href="https://instagram.com/your-gallery" target="_blank" rel="noopener noreferrer">
              <Instagram className="socialIcon" /> Instagram
            </a>
            <a href="https://facebook.com/your-gallery" target="_blank" rel="noopener noreferrer">
              <Facebook className="socialIcon" /> Facebook
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
