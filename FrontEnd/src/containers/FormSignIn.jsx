import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FieldDiv from '../components/FieldDiv';
import Button from '../components/Button';
import { login } from '../redux/actions/authActions';

const FormSignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, loading, error } = useSelector((state) => state.auth);

  // Définir l'état initial des champs du formulaire
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

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
    // Ici, vous pouvez traiter les données du formulaire, comme les valider ou envoyer une requête
    console.log('Form Data Submitted:', formData);
    const { email, password } = formData;
    dispatch(login(email, password));
  };

  //si la connexion est un succès
  useEffect(() => {
    if (token) {
      navigate('/profile');
    }
  }, [token, navigate]);

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
      <Button 
        text="Sign In" 
        className="sign-in-button" 
        type="submit" 
      />
    </form>
  );
};

export default FormSignIn;



