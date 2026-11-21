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

const SERVICE_PILLS = [
  'Branding Videos',
  'Drone & Aerial',
  'Short-Form Content',
  'Multi-Camera Production',
  'Livestreaming',
  'Staging, Lighting, Audio',
  'Corporate Event Production',
  'Product Photography',
  'Real Estate Photography'
];

const CLIENT_LOGOS = [
  { src: logo1, alt: "OBS - Ocala Breeders' Sales Company" },
  { src: logo2, alt: "Phillips CJDR" },
  { src: logo3, alt: "OcalaBets" },
  { src: logo4, alt: "Marion County Sheriff" },
  { src: logo5, alt: "Twisted Garage" },
  { src: logo6, alt: "Ocala Fire Rescue" }
];

const Contact = () => {
  useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    services: [],
    budget: '',
    timeline: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePillToggle = (service) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="contact-page-main">
      {/* 1. HERO SECTION (Dark) */}
      <section className="contact-hero-section">
        <div className="contact-container">
          {/* Breadcrumb */}
          <nav className="contact-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="contact-breadcrumb-link">HOME</Link>
            <span className="contact-breadcrumb-sep">/</span>
            <span className="contact-breadcrumb-active">CONTACT</span>
          </nav>

          {/* Hero Row */}
          <div className="contact-hero-row">
            <div className="contact-hero-left animate-on-scroll" data-animation="animate__fadeInLeft">
              <h1 className="contact-hero-title">
                Your story.
                <span className="contact-hero-title-italic">Our next production.</span>
              </h1>
            </div>

            <div className="contact-hero-right animate-on-scroll" data-animation="animate__fadeInRight">
              <h2 className="contact-hero-right-heading">
                Every great production starts with a conversation.
              </h2>
              <p className="contact-hero-right-desc">
                Tell us what you have in mind. We&apos;ll help bring it into focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN FORM SECTION (Dark with White Card) */}
      <section className="contact-main-section">
        <div className="contact-container">
          <div className="contact-main-grid">
            {/* Left Column */}
            <aside className="contact-left-col animate-on-scroll" data-animation="animate__fadeInUp">
              <span className="contact-sub-tag">LET&apos;S MAKE SOMETHING MATTER.</span>
              <h2 className="contact-left-heading">
                Big idea?<br />
                You&apos;re in the right place.
              </h2>
              <p className="contact-left-desc">
                From a first spark to a fully formed brief, tell us where you want to go. We&apos;ll work out the production together.
              </p>

              {/* Studio Image Box */}
              <div className="contact-img-box">
                <img
                  src={aboutRightImg}
                  alt="Dillon Video production crew on set"
                  className="contact-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="contact-img-caption">
                EXPERIENCED CREWS. PERSONAL SERVICE.
              </span>

              {/* Phone Sub-block */}
              <div className="contact-phone-block">
                <span className="contact-phone-tag">PREFER TO TALK IT THROUGH?</span>
                <a href="tel:3526200686" className="contact-phone-number">
                  (352) 620-0686
                </a>
                <p className="contact-location-info">
                  Based in Ocala, Florida.<br />
                  Producing stories across the US and beyond.
                </p>
              </div>
            </aside>

            {/* Right Column: White Form Card */}
            <div className="contact-form-card animate-on-scroll" data-animation="animate__fadeInUp">
              <div className="contact-form-header">
                <h2 className="contact-form-title">Tell us about your project</h2>
                <p className="contact-form-subtitle">
                  A few details to get the conversation started. * Required fields
                </p>
              </div>

              {submitted ? (
                <div className="contact-success-box">
                  <h3 className="contact-success-title">Thank you for getting in touch!</h3>
                  <p className="contact-success-desc">
                    We&apos;ve received your inquiry and will review your project details immediately. One of our producers will connect with you shortly.
                  </p>
                  <button
                    type="button"
                    className="contact-submit-btn"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        phone: '',
                        services: [],
                        budget: '',
                        timeline: '',
                        message: ''
                      });
                    }}
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  {/* Row 1: Name & Email */}
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label htmlFor="contact-name" className="contact-label">
                        Your name <span className="req">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        placeholder="Full name"
                        className="contact-input"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="contact-form-group">
                      <label htmlFor="contact-email" className="contact-label">
                        Email address <span className="req">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        placeholder="you@company.com"
                        className="contact-input"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Row 2: Company & Phone */}
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label htmlFor="contact-company" className="contact-label">
                        Company / organization
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        name="company"
                        placeholder="Company name"
                        className="contact-input"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="contact-form-group">
                      <label htmlFor="contact-phone" className="contact-label">
                        Phone number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        placeholder="Your phone number"
                        className="contact-input"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Row 3: Service Selection Pills */}
                  <div className="contact-pills-group">
                    <label className="contact-label">
                      What can we help you create? <span className="req">*</span>
                    </label>
                    <span className="contact-pills-sub">Choose all that apply.</span>

                    <div className="contact-pills-grid">
                      {SERVICE_PILLS.map((service) => {
                        const isSelected = formData.services.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            className={`contact-service-pill ${isSelected ? 'active' : ''}`}
                            onClick={() => handlePillToggle(service)}
                            aria-pressed={isSelected}
                          >
                            <span className="contact-pill-indicator" aria-hidden="true" />
                            <span className="contact-pill-text">{service}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 4: Budget & Timeline */}
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label htmlFor="contact-budget" className="contact-label">
                        Estimated budget
                      </label>
                      <select
                        id="contact-budget"
                        name="budget"
                        className="contact-select"
                        value={formData.budget}
                        onChange={handleInputChange}
                      >
                        <option value="">Select a range</option>
                        <option value="Under $5,000">Under $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                        <option value="$50,000+">$50,000+</option>
                      </select>
                    </div>

                    <div className="contact-form-group">
                      <label htmlFor="contact-timeline" className="contact-label">
                        Ideal timeline
                      </label>
                      <select
                        id="contact-timeline"
                        name="timeline"
                        className="contact-select"
                        value={formData.timeline}
                        onChange={handleInputChange}
                      >
                        <option value="">When do you need it?</option>
                        <option value="Immediately (1-2 weeks)">Immediately (1-2 weeks)</option>
                        <option value="Within 1 month">Within 1 month</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3+ months">3+ months</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 5: Tell us more */}
                  <div className="contact-form-group full-width">
                    <label htmlFor="contact-message" className="contact-label">
                      Tell us more <span className="req">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Your goals, audience, locations, and anything else we should know..."
                      className="contact-textarea"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Submit Row */}
                  <div className="contact-submit-row">
                    <button type="submit" className="contact-submit-btn">
                      <span>Send Project Inquiry</span>
                      <FaArrowRight className="contact-btn-arrow" aria-hidden="true" />
                    </button>
                    <span className="contact-privacy-text">
                      We&apos;ll use these details only to respond to your project inquiry.
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
        className="contact-next-section"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
        <div className="contact-next-overlay" />

        <div className="contact-container contact-next-container">
          <div className="contact-next-top animate-on-scroll" data-animation="animate__fadeInUp">
            <span className="contact-next-tag">WHAT HAPPENS NEXT</span>

            <div className="contact-next-grid">
              {/* Left Column: Heading */}
              <div className="contact-next-left">
                <h2 className="contact-next-heading">
                  A conversation.<br />
                  Then a clear plan.
                </h2>
              </div>

              {/* Right Column: 3 Steps */}
              <div className="contact-next-steps">
                {/* Step 01 */}
                <div className="contact-step-card">
                  <div className="contact-step-num">01</div>
                  <h3 className="contact-step-title">We connect</h3>
                  <p className="contact-step-desc">
                    We&apos;ll talk through your story, your audience, and what success looks like.
                  </p>
                </div>

                {/* Step 02 */}
                <div className="contact-step-card">
                  <div className="contact-step-num">02</div>
                  <h3 className="contact-step-title">We shape the idea</h3>
                  <p className="contact-step-desc">
                    Together, we&apos;ll define the approach, scope, and production details.
                  </p>
                </div>

                {/* Step 03 */}
                <div className="contact-step-card">
                  <div className="contact-step-num">03</div>
                  <h3 className="contact-step-title">We make a plan</h3>
                  <p className="contact-step-desc">
                    You&apos;ll know the next steps before we bring your production to life.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Logos Row Above Footer */}
          <div className="contact-logos-row animate-on-scroll" data-animation="animate__fadeInUp">
            {CLIENT_LOGOS.map((logo, index) => (
              <div key={index} className="contact-logo-item">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="contact-logo-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <Footer />
    </main>
  );
};

export default Contact;
