import React from "react";
import "./aboutSection.css";
import { Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const About = () => {
  const team = [
    {
      name: "Tanvi Somani",
      role: "Frontend Developer",
      image: "https://avatars.githubusercontent.com/u/your-image-1",
      instagram: "https://instagram.com/tanvi",
      linkedin: "https://linkedin.com/in/tanvi",
      github: "https://github.com/tanvi"
    },
    {
      name: "Mira Sharma",
      role: "Backend Developer",
      image: "https://avatars.githubusercontent.com/u/your-image-2",
      instagram: "https://instagram.com/member2",
      linkedin: "https://linkedin.com/in/member2",
      github: "https://github.com/member2"
    },
    {
      name: "Atharva Raut",
      role: "Backend Developer",
      image: "https://avatars.githubusercontent.com/u/your-image-3",
      instagram: "https://instagram.com/member3",
      linkedin: "https://linkedin.com/in/member3",
      github: "https://github.com/member3"
    }
  ];

  return (
    <div className="aboutSection">
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>
        <div className="aboutDescription">
          <p>
            ArtVista is a platform for Art lovers. We connect artists and art enthusiasts
            from all across the world. Our platform provides a secure and unique marketplace
            for buying and selling exceptional artworks.
          </p>
        </div>

        <Typography component="h2" className="teamHeading">Developed by Our Team</Typography>
        <div className="teamContainer">
          {team.map((member, index) => (
            <div key={index} className="teamMember">
              <Avatar
                src={member.image}
                alt={member.name}
                className="teamAvatar"
              />
              <Typography variant="h5" className="memberName">{member.name}</Typography>
              <Typography variant="subtitle1" className="memberRole">{member.role}</Typography>
              <div className="socialLinks">
                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                  <InstagramIcon />
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
