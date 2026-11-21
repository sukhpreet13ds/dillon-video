import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';
import Footer from '../components/Footer';
import aboutRightImg from '../assets/about-right.png';
import ctaBg from '../assets/cta-bg.png';
import logo1 from '../assets/logo1.svg';
import logo2 from '../assets/logo2.svg';
import logo3 from '../assets/logo3.svg';
import logo4 from '../assets/logo4.svg';
import logo5 from '../assets/logo5.svg';
import logo6 from '../assets/logo6.png';

const NEED_OPTIONS = [
  'Video production',
  'Multi-camera live remotes',
  'Live streaming',
  'Sports replay systems',
  'Drones & aerial',
  'Photography',
  '360° virtual tours',
  'Not sure yet'
];

const CLIENT_LOGOS = [
  { src: logo1, alt: "OBS - Ocala Breeders' Sales Company" },
  { src: logo2, alt: "Phillips CJDR" },
  { src: logo3, alt: "OcalaBets" },
  { src: logo4, alt: "Marion County Sheriff" },
  { src: logo5, alt: "Twisted Garage" },
  { src: logo6, alt: "Ocala Fire Rescue" }
];

const Inquiry = () => {
  useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    needs: [],
    location: '',
    timing: '',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxToggle = (option) => {
    setFormData((prev) => {
      const exists = prev.needs.includes(option);
      return {
        ...prev,
        needs: exists
          ? prev.needs.filter((item) => item !== option)
          : [...prev.needs, option]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="inquiry-page-main">
      {/* 1. HERO SECTION (Dark) */}
      <section className="inquiry-hero-section">
        <div className="inquiry-container">
          {/* Breadcrumb */}
          <nav className="inquiry-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="inquiry-breadcrumb-link">HOME</Link>
            <span className="inquiry-breadcrumb-sep">/</span>
            <Link to="/branding" className="inquiry-breadcrumb-link">SERVICES</Link>
            <span className="inquiry-breadcrumb-sep">/</span>
            <span className="inquiry-breadcrumb-active">PROJECT INQUIRY</span>
          </nav>

          {/* Hero Row */}
          <div className="inquiry-hero-row">
            <div className="inquiry-hero-left animate-on-scroll" data-animation="animate__fadeInLeft">
              <h1 className="inquiry-hero-title">
                Let&apos;s talk
                <span className="inquiry-hero-title-italic">about your project.</span>
              </h1>
              <p className="inquiry-hero-intro">
                Tell us what you have in mind. We&apos;ll help you find the right production.
              </p>
            </div>

            <div className="inquiry-hero-right animate-on-scroll" data-animation="animate__fadeInRight">
              <div className="inquiry-hero-img-box">
                <img
                  src={aboutRightImg}
                  alt="Dillon Video production studio and team"
                  className="inquiry-hero-img"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <span className="inquiry-hero-img-caption">
                OCALA, FLORIDA. WORKING WORLDWIDE.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN FORM SECTION (Light / Cream) */}
      <section className="inquiry-form-section">
        <div className="inquiry-container">
          <div className="inquiry-main-grid">
            {/* Left Sidebar */}
            <aside className="inquiry-sidebar animate-on-scroll" data-animation="animate__fadeInUp">
              {/* Block 1: Start a conversation */}
              <div className="inquiry-side-block">
                <span className="inquiry-side-tag">START A CONVERSATION</span>
                <h2 className="inquiry-side-heading">
                  A little detail.<br />
                  A great beginning.
                </h2>
                <p className="inquiry-side-desc">
                  Whether you have a detailed brief or just an idea, tell us where you&apos;d like to start.
                </p>
              </div>

              <div className="inquiry-side-divider" aria-hidden="true" />

              {/* Block 2: Prefer to talk */}
              <div className="inquiry-side-block">
                <span className="inquiry-side-tag">PREFER TO TALK?</span>
                <a href="tel:3526200686" className="inquiry-side-phone">
                  (352) 620-0686
                </a>
                <p className="inquiry-side-location">
                  Based in Ocala, Florida.<br />
                  Available for productions worldwide.
                </p>
              </div>

              {/* Block 3: The Right People */}
              <div className="inquiry-side-block inquiry-side-crews">
                <span className="inquiry-side-tag">THE RIGHT PEOPLE. THE RIGHT PERSPECTIVE.</span>
                <ul className="inquiry-side-list">
                  <li>Experienced production crews</li>
                  <li>HD, UHD, 4K and more</li>
                  <li>FAA-certified drone pilots</li>
                </ul>
              </div>
            </aside>

            {/* Right Column: Form */}
            <div className="inquiry-form-column animate-on-scroll" data-animation="animate__fadeInUp">
              <div className="inquiry-form-header">
                <h2 className="inquiry-form-title">Tell us about your project</h2>
                <span className="inquiry-form-required-note">Fields marked * are required.</span>
              </div>

              {submitted ? (
                <div className="inquiry-success-message">
                  <h3 className="inquiry-success-title">Thank you for reaching out!</h3>
                  <p className="inquiry-success-desc">
                    We&apos;ve received your project inquiry and will review the details right away. Someone from our production team will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    className="inquiry-submit-btn"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        phone: '',
                        needs: [],
                        location: '',
                        timing: '',
                        details: ''
                      });
                    }}
                  >
                    <span>Submit another inquiry</span>
                  </button>
                </div>
              ) : (
                <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
                  {/* Row 1: Name & Email */}
                  <div className="inquiry-form-row">
                    <div className="inquiry-form-group">
                      <label htmlFor="inquiry-name" className="inquiry-label">
                        YOUR NAME <span className="req">*</span>
                      </label>
                      <input
                        id="inquiry-name"
                        type="text"
                        name="name"
                        required
                        placeholder="Your full name"
                        className="inquiry-input"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="inquiry-form-group">
                      <label htmlFor="inquiry-email" className="inquiry-label">
                        EMAIL ADDRESS <span className="req">*</span>
                      </label>
                      <input
                        id="inquiry-email"
                        type="email"
                        name="email"
                        required
                        placeholder="you@company.com"
                        className="inquiry-input"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Row 2: Company & Phone */}
                  <div className="inquiry-form-row">
                    <div className="inquiry-form-group">
                      <label htmlFor="inquiry-company" className="inquiry-label">
                        COMPANY (OPTIONAL)
                      </label>
                      <input
                        id="inquiry-company"
                        type="text"
                        name="company"
                        placeholder="Company or organization"
                        className="inquiry-input"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="inquiry-form-group">
                      <label htmlFor="inquiry-phone" className="inquiry-label">
                        PHONE (OPTIONAL)
                      </label>
                      <input
                        id="inquiry-phone"
                        type="tel"
                        name="phone"
                        placeholder="Your phone number"
                        className="inquiry-input"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Checkboxes: What Do You Need? */}
                  <div className="inquiry-needs-group">
                    <label className="inquiry-label">WHAT DO YOU NEED?</label>
                    <p className="inquiry-needs-sub">
                      Choose all that apply. It&apos;s okay if you&apos;re not sure yet.
                    </p>

                    <div className="inquiry-checkboxes-grid">
                      {NEED_OPTIONS.map((option) => {
                        const isChecked = formData.needs.includes(option);
                        return (
                          <label
                            key={option}
                            className={`inquiry-checkbox-item ${isChecked ? 'selected' : ''}`}
                          >
                            <input
                              type="checkbox"
                              name="needs"
                              value={option}
                              checked={isChecked}
                              onChange={() => handleCheckboxToggle(option)}
                              className="inquiry-checkbox-input"
                            />
                            <span className="inquiry-custom-checkbox" aria-hidden="true" />
                            <span className="inquiry-checkbox-label">{option}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 3: Location & Timing */}
                  <div className="inquiry-form-row">
                    <div className="inquiry-form-group">
                      <label htmlFor="inquiry-location" className="inquiry-label">
                        PROJECT LOCATION
                      </label>
                      <input
                        id="inquiry-location"
                        type="text"
                        name="location"
                        placeholder="City, state or remote"
                        className="inquiry-input"
                        value={formData.location}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="inquiry-form-group">
                      <label htmlFor="inquiry-timing" className="inquiry-label">
                        IDEAL TIMING
                      </label>
                      <select
                        id="inquiry-timing"
                        name="timing"
                        className="inquiry-select"
                        value={formData.timing}
                        onChange={handleInputChange}
                      >
                        <option value="">Select a timeframe</option>
                        <option value="Within 1–2 weeks">Within 1–2 weeks</option>
                        <option value="Within 1 month">Within 1 month</option>
                        <option value="1–3 months">1–3 months</option>
                        <option value="3+ months">3+ months</option>
                        <option value="Flexible / Just exploring">Flexible / Just exploring</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Project Details */}
                  <div className="inquiry-form-group full-width">
                    <label htmlFor="inquiry-details" className="inquiry-label">
                      PROJECT DETAILS <span className="req">*</span>
                    </label>
                    <textarea
                      id="inquiry-details"
                      name="details"
                      required
                      rows={5}
                      placeholder="What are you creating? Share your goals, audience and any details that will help us understand your project."
                      className="inquiry-textarea"
                      value={formData.details}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Submit Row */}
                  <div className="inquiry-submit-row">
                    <button type="submit" className="inquiry-submit-btn">
                      <span>Send project inquiry</span>
                      <FaArrowRight className="inquiry-btn-arrow" aria-hidden="true" />
                    </button>
                    <span className="inquiry-privacy-note">
                      Please don&apos;t include confidential information.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT HAPPENS NEXT SECTION (Dark with Overlay & Logos) */}
      <section
        className="inquiry-next-section"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
        <div className="inquiry-next-overlay" />

        <div className="inquiry-container inquiry-next-container">
          <div className="inquiry-next-top animate-on-scroll" data-animation="animate__fadeInUp">
            <span className="inquiry-next-tag">WHAT HAPPENS NEXT</span>

            <div className="inquiry-next-grid">
              {/* Left Column: Heading */}
              <div className="inquiry-next-left">
                <h2 className="inquiry-next-heading">
                  A conversation.<br />
                  Then a clear plan.
                </h2>
              </div>

              {/* Right Column: 3 Steps */}
              <div className="inquiry-next-steps">
                {/* Step 01 */}
                <div className="inquiry-step-card">
                  <div className="inquiry-step-num">01</div>
                  <h3 className="inquiry-step-title">We connect</h3>
                  <p className="inquiry-step-desc">
                    We&apos;ll talk through your story, your audience, and what success looks like.
                  </p>
                </div>

                {/* Step 02 */}
                <div className="inquiry-step-card">
                  <div className="inquiry-step-num">02</div>
                  <h3 className="inquiry-step-title">We shape the idea</h3>
                  <p className="inquiry-step-desc">
                    Together, we&apos;ll define the approach, scope, and production details.
                  </p>
                </div>

                {/* Step 03 */}
                <div className="inquiry-step-card">
                  <div className="inquiry-step-num">03</div>
                  <h3 className="inquiry-step-title">We make a plan</h3>
                  <p className="inquiry-step-desc">
                    You&apos;ll know the next steps before we bring your production to life.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Logos Row Above Footer */}
          <div className="inquiry-logos-row animate-on-scroll" data-animation="animate__fadeInUp">
            {CLIENT_LOGOS.map((logo, index) => (
              <div key={index} className="inquiry-logo-item">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="inquiry-logo-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOOTER (No CTA section as requested) */}
      <Footer />
    </main>
  );
};

export default Inquiry;
