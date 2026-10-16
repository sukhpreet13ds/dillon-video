import React from 'react';
import ctaBg from '../assets/cta-bg.png';
import logo1 from '../assets/logo1.svg';
import logo2 from '../assets/logo2.svg';
import logo3 from '../assets/logo3.svg';
import logo4 from '../assets/logo4.svg';
import logo5 from '../assets/logo5.svg';
import logo6 from '../assets/logo6.png';

const CTA = () => {
  const logos = [
    { src: logo1, alt: "OBS - Ocala Breeders' Sales" },
    { src: logo2, alt: "Phillips CJDR" },
    { src: logo3, alt: "Ocala Bets" },
    { src: logo4, alt: "Marion County Sheriff" },
    { src: logo5, alt: "Twisted Garage" },
    { src: logo6, alt: "Ocala Fire Rescue" }
  ];

  return (
    <section
      className="cta-section"
      id="contact"
      style={{ backgroundImage: `url(${ctaBg})` }}
    >
      <div className="cta-overlay"></div>

      <div className="cta-container">
        {/* Main CTA Content */}
        <div className="cta-content">
          <h2 className="cta-heading animate-on-scroll" data-animation="animate__fadeInUp">
            Have a story<br />
            <span className="cta-heading-red">worth telling?</span>
          </h2>
          <p className="cta-subtitle animate-on-scroll" data-animation="animate__fadeInUp">
            Let's Create Something People Remember.
          </p>
          <a href="#discuss" className="cta-btn animate-on-scroll" data-animation="animate__fadeInUp">
            Book a demo
          </a>
        </div>

        {/* 6 Client Logos Over Background */}
        <div className="cta-logos-grid animate-on-scroll" data-animation="animate__fadeInUp">
          {logos.map((logo, index) => (
            <div key={index} className="cta-logo-item">
              <img src={logo.src} alt={logo.alt} className="cta-logo-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
