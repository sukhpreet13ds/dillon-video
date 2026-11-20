import React, { createContext, useState, useEffect, useCallback } from 'react';
import useBookingModal from './useBookingModal';

const BookingModalContext = createContext();

export const BookingModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  const openBookingModal = useCallback((serviceName = '') => {
    if (serviceName && typeof serviceName === 'string') {
      setPreselectedService(serviceName);
    } else {
      setPreselectedService('');
    }
    setIsOpen(true);
  }, []);

  const closeBookingModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Global click interceptor:
  // Any link or button with href="#book-a-demo", href="#demo", href="#book",
  // data-open-modal="booking", or class "open-booking-modal" opens the modal.
  useEffect(() => {
    const handleGlobalTrigger = (e) => {
      const trigger = e.target.closest(
        'a[href="#book-a-demo"], a[href="#demo"], a[href="#book"], [data-open-modal="booking"], [data-open-modal="demo"], .open-booking-modal, .open-demo-modal'
      );
      if (trigger) {
        e.preventDefault();
        const service = trigger.getAttribute('data-service') || trigger.getAttribute('data-service-name') || '';
        openBookingModal(service);
      }
    };

    document.addEventListener('click', handleGlobalTrigger);

    // Expose on window for direct calls if needed
    if (typeof window !== 'undefined') {
      window.openBookingModal = openBookingModal;
      window.closeBookingModal = closeBookingModal;
    }

    return () => {
      document.removeEventListener('click', handleGlobalTrigger);
    };
  }, [openBookingModal, closeBookingModal]);

  return (
    <BookingModalContext.Provider
      value={{
        isOpen,
        preselectedService,
        openBookingModal,
        closeBookingModal,
        setPreselectedService
      }}
    >
      {children}
    </BookingModalContext.Provider>
  );
};

export default BookingModalContext;
