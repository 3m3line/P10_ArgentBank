import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AccountCard from '../components/AccountCard';
import Button from '../components/Button';
import { updateUser } from '../redux/actions/updateUserActions';
import { NavLink, useNavigate } from 'react-router-dom';

function Profile() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const navigate = useNavigate();

  //fonction de redirection si pas de User
  useEffect(() => {
    if (!user) {
      const timer = setTimeout(() => {
        navigate('/login');
      }, 5000); // 5000ms = 5s

      // Efface timer si user devient disponible
      return () => clearTimeout(timer);
    }
  }, [user, history]);

  if (!user) {
    return <p>No user is logged in, redirect to Sign In page...</p>;
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser(newName));
    setIsEditing(false); // Ferme le formulaire après submission
    setNewName(''); // Réinitialise le champ
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewName(''); // Réinitialise le champ
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
        {isEditing ? (
          <form onSubmit={handleSubmit} className="edit-form">
            <h2>Edit user info</h2>
            <div className="form-group">
            <label htmlFor="newName">User name:</label>
            <input
              id="newName"
              type="text"
              value={newName}
              onChange={handleChange}
              placeholder={user.userName}
              required
            />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <p id="firstName" className="form-control">{user.firstName}</p>
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <p id="lastName" className="form-control">{user.lastName}</p>
            </div>
            <button type="submit" className='form-btn'>Save</button>
            <button type="button" onClick={handleCancel} className='form-btn'>Cancel</button>
          </form>
        ) : (
          <Button text="Edit Name" className="edit-button" onClick={handleEditClick} />
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <AccountCard
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
        buttonText="View transactions"
      />
      <AccountCard
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
        buttonText="View transactions"
      />
      <AccountCard
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
        buttonText="View transactions"
      />
    </main>
  );
}

export default Profile;