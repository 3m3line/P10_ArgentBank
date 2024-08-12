import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FieldDiv from '../components/FieldDiv';
import Button from '../components/Button';

const FormSignIn = () => {
  const navigate = useNavigate();

  // Définir l'état initial des champs du formulaire
  const [formData, setFormData] = useState({
    username: '',
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
    navigate('/user');
  };

  return (
    <form onSubmit={handleSignIn}>
      <FieldDiv 
        label="Username" 
        type="text" 
        id="username" 
        name="username"
        value={formData.username}
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
        type="submit" // Changed to type="submit" to work with the form
      />
    </form>
  );
};

export default FormSignIn;



