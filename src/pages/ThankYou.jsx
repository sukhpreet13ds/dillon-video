import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Optional: automatically redirect back home after a few seconds
    // const timeout = setTimeout(() => {
    //   navigate('/');
    // }, 5000);
    // return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <main className="thank-you-page">
      <div className="thank-you-container animate__animated animate__fadeIn">
        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
          <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
          <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
        </svg>
        <h1 className="thank-you-heading">Thank You!</h1>
        <p className="thank-you-text">
          Your submission has been received. We will get back to you shortly.
        </p>
        <button className="thank-you-btn" onClick={() => navigate('/')}>
          Return Home
        </button>
      </div>
    </main>
  );
};

export default ThankYou;
