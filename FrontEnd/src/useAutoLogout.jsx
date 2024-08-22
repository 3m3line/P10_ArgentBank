import { useDispatch } from 'react-redux';
import { logout } from './redux/actions/authActions';
import { useEffect } from 'react';

// Durée d'inactivité en millisecondes (1 minute)
const INACTIVITY_TIME_LIMIT = 5 * 60 * 1000;

const useAutoLogout = () => {
  const dispatch = useDispatch();
  let inactivityTimeout;

  const resetInactivityTimeout = () => {
    if (inactivityTimeout) {
      clearTimeout(inactivityTimeout);
    }
    inactivityTimeout = setTimeout(() => {
      dispatch(logout());
    }, INACTIVITY_TIME_LIMIT);
  };

  useEffect(() => {
    // Écoute les événements d'interaction
    window.addEventListener('mousemove', resetInactivityTimeout);
    window.addEventListener('keydown', resetInactivityTimeout);
    window.addEventListener('scroll', resetInactivityTimeout);
    window.addEventListener('click', resetInactivityTimeout);

    // Initialise le timer
    resetInactivityTimeout();

    return () => {
      // Nettoit les événements
      window.removeEventListener('mousemove', resetInactivityTimeout);
      window.removeEventListener('keydown', resetInactivityTimeout);
      window.removeEventListener('scroll', resetInactivityTimeout);
      window.removeEventListener('click', resetInactivityTimeout);
      clearTimeout(inactivityTimeout);
    };
  }, [dispatch]);

  return null;
};

export default useAutoLogout;
