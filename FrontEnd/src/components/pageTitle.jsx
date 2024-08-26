import React from 'react';
import { useLocation } from 'react-router-dom';

const PageTitle = ({ title }) => {
  const location = useLocation();
  React.useEffect(() => {
    document.title = title;
  }, [location, title]);

  return null; // Ce composant n'affiche rien, il est juste là pour changer le titre
};

export default PageTitle;
