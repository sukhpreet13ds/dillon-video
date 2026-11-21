import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import aboutRightImg from '../assets/about-right.png';
import stageImg from '../assets/vserv4.jpg';

const CRAFT_AREAS = [
  {
    num: '01',
    title: 'Camera & production',
    desc: 'Camera operation, on-set support and the practical craft of bringing a shoot together.'
  },
  {
    num: '02',
    title: 'Editing & storytelling',
    desc: 'An eye for structure, pacing and the moments that make a story connect.'
  },
  {
    num: '03',
    title: 'Live & technical',
    desc: 'Multi-camera production, streaming, staging, lighting and audio.'
  },
  {
    num: '04',
    title: 'Photography & aerial',
    desc: 'Thoughtful composition, attention to detail and a fresh perspective.'
  }
];

const FAQS = [
  {
    question: 'What should I include?',
    answer: "A short introduction, your area of interest, where you're based and links to a few relevant examples of your work."
  },
  {
    question: 'Can I share collaborative work?',
    answer: 'You can link to work you have permission to share. Tell us which parts you worked on and what your contribution was.'
  },
  {
    question: 'Is this an application for a specific role?',
    answer: 'This form is for general introductions. Any advertised role should include its own requirements and application details.'
  }
];

const Careers = () => {
  useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    interest: '',
    portfolio: '',
    about: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('introduce');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="careers-page-main">
      {/* 1. HERO SECTION (Dark) */}
      <section className="careers-hero-section">
        <div className="careers-container">
          {/* Breadcrumb */}
          <nav className="careers-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="careers-breadcrumb-link">HOME</Link>
            <span className="careers-breadcrumb-sep">/</span>
            <span className="careers-breadcrumb-active">CAREERS</span>
          </nav>

          {/* Hero Row */}
          <div className="careers-hero-row">
            <div className="careers-hero-left animate-on-scroll" data-animation="animate__fadeInLeft">
              <h1 className="careers-hero-title">
                Make good work.
                <span className="careers-hero-title-italic">With good people.</span>
              </h1>
              <p className="careers-hero-intro">
                Bring your craft, curiosity and point of view. Help shape the stories people see, hear and remember.
              </p>
              <button
                type="button"
                className="careers-hero-cta-btn"
                onClick={scrollToForm}
              >
                Introduce yourself
              </button>
            </div>

            <div className="careers-hero-right animate-on-scroll" data-animation="animate__fadeInRight">
              <div className="careers-hero-img-box">
                <img
                  src={aboutRightImg}
                  alt="Dillon Video production crew on set"
                  className="careers-hero-img"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <span className="careers-hero-img-caption">
                BEHIND EVERY PROJECT, A PRODUCTION TEAM.
              </span>
            </div>
          </div>

          {/* Bottom Hero Meta */}
          <div className="careers-hero-meta-row animate-on-scroll" data-animation="animate__fadeIn">
            <span className="careers-hero-meta-tag">
              OCALA, FLORIDA / VIDEO &amp; PHOTO PRODUCTION
            </span>
          </div>
        </div>
      </section>

      {/* 2. SECTION 01: HOW WE WORK (Light / Cream) */}
      <section className="careers-work-section">
        <div className="careers-container">
          <span className="careers-section-tag red-tag animate-on-scroll" data-animation="animate__fadeIn">
            01 / HOW WE WORK
          </span>

          <div className="careers-work-top-grid animate-on-scroll" data-animation="animate__fadeInUp">
            <div className="careers-work-left">
              <h2 className="careers-work-heading">
                A shared eye.<br />
                A shared standard.
              </h2>
            </div>

            <div className="careers-work-right">
              <p className="careers-work-lead">
                Since 1985, Dillon Video has brought stories to life through video and photo production.
              </p>
              <p className="careers-work-desc">
                <strong>The craft is collaborative:</strong> camera, edit, sound, lighting and photography come together around one story.
              </p>
            </div>
          </div>

          {/* 3 Principles / Values Row */}
          <div className="careers-principles-grid animate-on-scroll" data-animation="animate__fadeInUp">
            <div className="careers-principle-card">
              <h3 className="careers-principle-title">Care for the craft.</h3>
              <p className="careers-principle-desc">
                Notice the details that make the difference.
              </p>
            </div>

            <div className="careers-principle-card">
              <h3 className="careers-principle-title">Work as one crew.</h3>
              <p className="careers-principle-desc">
                Listen, communicate and make space for other skills.
              </p>
            </div>

            <div className="careers-principle-card">
              <h3 className="careers-principle-title">Keep asking why.</h3>
              <p className="careers-principle-desc">
                Stay curious about the story, the tools and the next perspective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 02: FIND YOUR CRAFT (Dark) */}
      <section className="careers-craft-section">
        <div className="careers-container">
          <span className="careers-section-tag animate-on-scroll" data-animation="animate__fadeIn">
            02 / FIND YOUR CRAFT
          </span>

          <div className="careers-craft-grid">
            {/* Left Column: Heading + Image */}
            <div className="careers-craft-left animate-on-scroll" data-animation="animate__fadeInUp">
              <h2 className="careers-craft-heading">
                Different skills.<br />
                One production.
              </h2>
              <div className="careers-craft-img-box">
                <img
                  src={stageImg}
                  alt="Live production staging and sound console"
                  className="careers-craft-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="careers-craft-img-caption">
                FROM THE FIRST SETUP TO THE FINAL CUE.
              </span>
            </div>

            {/* Right Column: 4 Craft Rows */}
            <div className="careers-craft-right animate-on-scroll" data-animation="animate__fadeInUp">
              <div className="careers-craft-list">
                {CRAFT_AREAS.map((craft) => (
                  <div key={craft.num} className="careers-craft-item">
                    <span className="careers-craft-num">{craft.num}</span>
                    <div className="careers-craft-info">
                      <h3 className="careers-craft-title">{craft.title}</h3>
                      <p className="careers-craft-desc">{craft.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Sub-tag */}
          <div className="careers-craft-footer-tag animate-on-scroll" data-animation="animate__fadeIn">
            AREAS OF INTEREST &mdash; NOT ADVERTISED VACANCIES.
          </div>
        </div>
      </section>

      {/* 4. SECTION 03: MAKE AN INTRODUCTION (Light / Cream) */}
      <section className="careers-steps-section">
        <div className="careers-container">
          <span className="careers-section-tag red-tag animate-on-scroll" data-animation="animate__fadeIn">
            03 / MAKE AN INTRODUCTION
          </span>

          <h2 className="careers-steps-heading animate-on-scroll" data-animation="animate__fadeInUp">
            A good introduction starts here.
          </h2>

          <div className="careers-steps-grid animate-on-scroll" data-animation="animate__fadeInUp">
            {/* Step 01 */}
            <div className="careers-step-card">
              <span className="careers-step-num">01</span>
              <h3 className="careers-step-title">A few words about you</h3>
              <p className="careers-step-desc">
                Tell us about your craft, experience and the kind of projects that interest you.
              </p>
            </div>

            {/* Step 02 */}
            <div className="careers-step-card">
              <span className="careers-step-num">02</span>
              <h3 className="careers-step-title">A link to your work</h3>
              <p className="careers-step-desc">
                Share a reel, portfolio or project examples. Make clear what you contributed.
              </p>
            </div>

            {/* Step 03 */}
            <div className="careers-step-card">
              <span className="careers-step-num">03</span>
              <h3 className="careers-step-title">A conversation about fit</h3>
              <p className="careers-step-desc">
                If your experience aligns with a future need, the team can take the conversation further.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 04: INTRODUCE YOURSELF (Dark with White Form Card) */}
      <section className="careers-form-section" id="introduce">
        <div className="careers-container">
          <span className="careers-section-tag animate-on-scroll" data-animation="animate__fadeIn">
            04 / INTRODUCE YOURSELF
          </span>

          <div className="careers-form-grid">
            {/* Left Column: Heading and Context */}
            <div className="careers-form-left animate-on-scroll" data-animation="animate__fadeInUp">
              <h2 className="careers-form-left-heading">
                Your next chapter.<br />
                Tell us about it.
              </h2>
              <p className="careers-form-left-intro">
                Share your craft, a few links and the kind of work you&apos;d like to do.
              </p>

              <div className="careers-form-left-subblock">
                <h3 className="careers-form-left-subtitle">General-interest introductions</h3>
                <p className="careers-form-left-subtext">
                  Share your work for future consideration. This is not an application to an advertised vacancy.
                </p>
                <p className="careers-form-left-permission">
                  Share only work you have permission to submit.
                </p>
              </div>

              <span className="careers-form-left-footer-tag">
                DILLON VIDEO / OCALA, FLORIDA
              </span>
            </div>

            {/* Right Column: White Form Card */}
            <div className="careers-form-card animate-on-scroll" data-animation="animate__fadeInUp">
              <h2 className="careers-card-title">Introduce yourself</h2>
              <p className="careers-card-subtitle">
                Share your experience and a few examples of your work.
              </p>

              {submitted ? (
                <div className="careers-success-message">
                  <h3 className="careers-success-title">Thank you for introducing yourself!</h3>
                  <p className="careers-success-desc">
                    We&apos;ve received your information and portfolio link. Our production team reviews new talent and general-interest introductions regularly.
                  </p>
                  <button
                    type="button"
                    className="careers-submit-btn"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        location: '',
                        interest: '',
                        portfolio: '',
                        about: ''
                      });
                    }}
                  >
                    Send another introduction
                  </button>
                </div>
              ) : (
                <form className="careers-form" onSubmit={handleSubmit} noValidate>
                  {/* Row 1: Name & Email */}
                  <div className="careers-form-row">
                    <div className="careers-form-group">
                      <label htmlFor="careers-name" className="careers-label">
                        Name <span className="req">*</span>
                      </label>
                      <input
                        id="careers-name"
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        className="careers-input"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="careers-form-group">
                      <label htmlFor="careers-email" className="careers-label">
                        Email <span className="req">*</span>
                      </label>
                      <input
                        id="careers-email"
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="careers-input"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Row 2: Location & Area of interest */}
                  <div className="careers-form-row">
                    <div className="careers-form-group">
                      <label htmlFor="careers-location" className="careers-label">
                        Location
                      </label>
                      <input
                        id="careers-location"
                        type="text"
                        name="location"
                        placeholder="City, state or region"
                        className="careers-input"
                        value={formData.location}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="careers-form-group">
                      <label htmlFor="careers-interest" className="careers-label">
                        Area of interest
                      </label>
                      <select
                        id="careers-interest"
                        name="interest"
                        className="careers-select"
                        value={formData.interest}
                        onChange={handleInputChange}
                      >
                        <option value="">Select your craft</option>
                        <option value="Camera & production">Camera &amp; production</option>
                        <option value="Editing & storytelling">Editing &amp; storytelling</option>
                        <option value="Live & technical">Live &amp; technical</option>
                        <option value="Photography & aerial">Photography &amp; aerial</option>
                        <option value="General crew support">General crew support / Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Portfolio / Reel Link */}
                  <div className="careers-form-group full-width">
                    <label htmlFor="careers-portfolio" className="careers-label">
                      Portfolio / reel link
                    </label>
                    <input
                      id="careers-portfolio"
                      type="url"
                      name="portfolio"
                      placeholder="https://your-portfolio.com"
                      className="careers-input"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* A Little About You */}
                  <div className="careers-form-group full-width">
                    <label htmlFor="careers-about" className="careers-label">
                      A little about you <span className="req">*</span>
                    </label>
                    <textarea
                      id="careers-about"
                      name="about"
                      required
                      rows={5}
                      placeholder="Your experience, interests and the work you're proud of."
                      className="careers-textarea"
                      value={formData.about}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="careers-submit-row">
                    <button type="submit" className="careers-submit-btn">
                      Send introduction
                    </button>
                    <span className="careers-required-note">
                      Fields marked * are required.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION 05: A FEW PRACTICAL DETAILS / FAQ (Light / Cream) */}
      <section className="careers-faq-section">
        <div className="careers-container">
          <span className="careers-section-tag red-tag animate-on-scroll" data-animation="animate__fadeIn">
            05 / A FEW PRACTICAL DETAILS
          </span>

          <div className="careers-faq-grid">
            <div className="careers-faq-left animate-on-scroll" data-animation="animate__fadeInUp">
              <h2 className="careers-faq-heading">
                Before you<br />
                say hello.
              </h2>
            </div>

            <div className="careers-faq-right animate-on-scroll" data-animation="animate__fadeInUp">
              <div className="careers-faq-list">
                {FAQS.map((faq, index) => (
                  <div key={index} className="careers-faq-item">
                    <h3 className="careers-faq-question">{faq.question}</h3>
                    <p className="careers-faq-answer">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA & FOOTER */}
      <CTA />
      <Footer />
    </main>
  );
};

export default Careers;
