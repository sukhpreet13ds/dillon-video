import React, { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import useBookingModal from '../context/useBookingModal';

const SERVICES_LIST = [
  'Branding Videos',
  'Drone & Aerial',
  'Short-Form Content',
  'Multi-Camera Production',
  'Live Streaming',
  'Staging, Lighting, Audio',
  'Corporate Event Production',
  'Product Photography',
  'Real Estate Photography'
];

const BookingModalForm = ({ preselectedService, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || SERVICES_LIST[0],
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.service) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="booking-modal-success animate__animated animate__fadeIn">
        <div className="booking-success-icon-wrap">
          <FaCheckCircle className="booking-success-icon" />
        </div>
        <h3 className="booking-success-title">Thank You, {formData.name || 'there'}!</h3>
        <p className="booking-success-desc">
          Your demo request for <strong>{formData.service}</strong> has been received. Our team will review your project details and reach out within 24 hours.
        </p>
        <button
          type="button"
          className="booking-modal-done-btn"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="booking-modal-content">
      <div className="booking-modal-header">
        <span className="booking-modal-tagline">BOOK A DEMO / CONSULTATION</span>
        <h2 id="booking-modal-title" className="booking-modal-title">
          Let's discuss your project.
        </h2>
      </div>

      {errorMsg && (
        <div className="booking-modal-error" role="alert">
          {errorMsg}
        </div>
      )}

      <form className="booking-modal-form" onSubmit={handleSubmit}>
        {/* Row 1: Name and Email */}
        <div className="booking-form-row">
          <div className="booking-form-group">
            <label htmlFor="booking-name" className="booking-form-label">
              Name <span className="required-star">*</span>
            </label>
            <input
              type="text"
              id="booking-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="booking-form-input"
              required
              autoFocus
            />
          </div>

          <div className="booking-form-group">
            <label htmlFor="booking-email" className="booking-form-label">
              Email <span className="required-star">*</span>
            </label>
            <input
              type="email"
              id="booking-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="booking-form-input"
              required
            />
          </div>
        </div>

        {/* Row 2: Phone and Service Dropdown */}
        <div className="booking-form-row">
          <div className="booking-form-group">
            <label htmlFor="booking-phone" className="booking-form-label">
              Ph no. <span className="required-star">*</span>
            </label>
            <input
              type="tel"
              id="booking-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(352) 620-0686"
              className="booking-form-input"
              required
            />
          </div>

          <div className="booking-form-group">
            <label htmlFor="booking-service" className="booking-form-label">
              Services <span className="required-star">*</span>
            </label>
            <div className="booking-select-wrapper">
              <select
                id="booking-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="booking-form-select"
                required
              >
                <option value="" disabled>Select a service...</option>
                {SERVICES_LIST.map((srv) => (
                  <option key={srv} value={srv}>
                    {srv}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Row 3: Message (Optional) */}
        <div className="booking-form-group full-width">
          <label htmlFor="booking-message" className="booking-form-label">
            Message <span className="optional-tag">(optional)</span>
          </label>
          <textarea
            id="booking-message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your timeline, locations, or vision..."
            className="booking-form-textarea"
          />
        </div>

        {/* Submit Button */}
        <div className="booking-form-submit-wrap">
          <button
            type="submit"
            className="booking-modal-submit-btn"
          >
            <span>Submit Request</span>
            <FaArrowRight className="booking-submit-arrow" aria-hidden="true" />
          </button>
        </div>
      </form>
    </div>
  );
};

const BookingModal = () => {
  const { isOpen, closeBookingModal, preselectedService } = useBookingModal();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeBookingModal();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeBookingModal]);

  if (!isOpen) return null;

  return (
    <div
      className="booking-modal-overlay"
      onClick={closeBookingModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        className="booking-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          className="booking-modal-close-btn"
          onClick={closeBookingModal}
          aria-label="Close modal"
        >
          <IoClose />
        </button>

        <BookingModalForm
          key={`${preselectedService}-${isOpen}`}
          preselectedService={preselectedService}
          onClose={closeBookingModal}
        />
      </div>
    </div>
  );
};

export default BookingModal;
