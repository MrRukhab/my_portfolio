  import React, { useState } from "react";
  import Dropdown from "../Dropdown/Dropdown";
  import Header from "../Header/Header";
  import {
    HeroContainer,
    HeroWrapper,
    HeroLeft,
    HeroRight,
    Image,
    ScrollDown,
    ScrollLink,
  } from "./HeroElements";
  import { TypeAnimation } from 'react-type-animation';
  import ScrollAnimation from "react-animate-on-scroll";

  function Hero() {
    const [isOpen, setIsOpen] = useState(false);
    const [showSubtitle, setShowSubtitle] = useState(false);
    const [showScrollDown, setShowScrollDown] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return (
      <main>
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Header toggle={toggle} />
        <HeroContainer>
          <HeroWrapper>
            <HeroLeft>
              <ScrollAnimation animateIn="fadeIn">
                <TypeAnimation
                  cursor={false}
                  sequence={[
                    "Hi, I'm Rukhab.",
                    () => setShowSubtitle(true)
                  ]}
                  speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                  wrapper="h1"
                  repeat={0}
                />

                {showSubtitle && (
                  <TypeAnimation
                    cursor={true}
                    sequence={[
                      500,
                      "A Web Designer & Developer.",
                      1500,
                      "Specialized in WordPress & Elementor.",
                      1500,
                      "Delivering custom business solutions.",
                      1500,
                      () => setShowScrollDown(true),
                      "Let's bring your ideas to life!",
                      1000,
                    ]}
                    speed={50}
                    deletionSpeed={60}
                    wrapper="h5"
                    repeat={Infinity}
                  />
                )}
              </ScrollAnimation>

                
            </HeroLeft>

            <HeroRight>
    <ScrollAnimation animateIn="fadeIn">
      <Image
  src="/rukhab_profile2.jpg"
  alt="rukhab-profile"
  style={{
    width: "95%",
    maxWidth: "400px",       // slightly wider than before
    height: "auto",
    borderRadius: "16px",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
    border: "2px solid #e0e0e0",
    backgroundColor: "#fff",
    transition: "transform 0.3s ease-in-out",
    margin: "0 auto",
    display: "block",
  }}
  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
/>

    </ScrollAnimation>
  </HeroRight>

          </HeroWrapper>

          {showScrollDown && (
            <ScrollAnimation animateIn="flipInX" offset={0}>
              <ScrollDown to="projects" id="scrollDown">
                <ScrollLink>
                  Scroll down
                  <img
                    src="/scroll-down.svg"
                    alt="scroll-down"
                  />
                </ScrollLink>
              </ScrollDown>
            </ScrollAnimation>
          )}
        </HeroContainer>
      </main>
    );
  }

  export default Hero;
