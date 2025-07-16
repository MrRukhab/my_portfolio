import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/rukhab_profile.jpg" alt="Rukhab Amir" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! I'm <strong>Rukhab Amir</strong>, a professional web
              designer specializing in <strong>WordPress</strong> with over 3
              years of experience.
            </ScrollAnimation>

            
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              I have had the privilege of working with a diverse range of
              clients across the globe, helping businesses establish a strong
              online presence through clean, responsive, and user-friendly
              websites.
            </ScrollAnimation>

            <br />


            <ScrollAnimation animateIn="fadeInLeft">
              My focus is on delivering visually appealing designs that are both
              functional and optimized for performance. Whether it's a custom
              theme, eCommerce setup, or full-site redesign — I bring
              creativity, precision, and professionalism to every project.
              <div className="tagline2">
                Here are some technologies and tools I frequently work with:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech className="tech">
                    <TechImg
                      src={stack.img}
                      alt={stack.name}
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "contain",
                      }}
                    />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
