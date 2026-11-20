import { useContext } from 'react';
import BookingModalContext from './BookingModalContext';

export const useBookingModal = () => {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error('useBookingModal must be used within a BookingModalProvider');
  }
  return context;
};

export default useBookingModal;
