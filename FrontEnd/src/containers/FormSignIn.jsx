import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FieldDiv from '../components/FieldDiv';
import Button from '../components/Button';
import { login, resetError } from '../redux/actions/authActions';
import { fetchUser } from '../redux/actions/userInfoActions';

const FormSignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, error } = useSelector((state) => state.auth);

  // Définir l'état initial des champs du formulaire
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  //récupération email si stocké
  useEffect(() => {
    const storedEmail = localStorage.getItem('rememberedEmail');
    if (storedEmail) {
      setFormData(prevFormData => ({
        ...prevFormData,
        email: storedEmail,
        rememberMe: true, // On suppose que si un e-mail est stocké, la case "Remember me" est activée
      }));
    }
  }, []);

  // Fonction pour gérer les changements dans les champs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSignIn = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    const { email, password, rememberMe } = formData;
    dispatch(login(email, password));

    // Si "Remember me" est activé, stocker l'e-mail sinon supp
    if (rememberMe) {
      localStorage.setItem('rememberedEmail', email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }
  };

  //si la connexion est un succès
  useEffect(() => {
    console.log('Token in component:', token);
    if (token) {
      dispatch(fetchUser());
      navigate('/profile');
    }
  }, [token, dispatch, navigate]);

  //reset le message d'erreur
  useEffect(() => {
    return () => {
      dispatch(resetError());
    };
  }, [dispatch]);

  return (
    <form onSubmit={handleSignIn}>
      <FieldDiv 
        label="Username" 
        type="email" 
        id="email" 
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <FieldDiv 
        label="Password" 
        type="password" 
        id="password" 
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <div className="input-remember">
        <input 
          type="checkbox" 
          id="remember-me" 
          name="rememberMe"
          checked={formData.rememberMe}
          onChange={handleChange}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      {error && <div className="error-message">{error}</div>}
      <Button 
        text="Sign In" 
        className="sign-in-button" 
        type="submit" 
      />
    </form>
  );
};

export default FormSignIn;



