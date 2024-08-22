import { NavLink } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { logout } from '../redux/actions/authActions'

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };
    return (
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src="../../src/assets/images/argentBankLogo.webp"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
          </NavLink>
        <div>
        {user ? (
          <>
            <NavLink to="/profile" className="main-nav-item">
              <i className="fa fa-user-circle"></i> {user.userName}
            </NavLink>
            <NavLink to="/" className="main-nav-item" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i> Sign Out
            </NavLink>
          </>
        ) : (
          <NavLink to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i> Sign In
          </NavLink>
        )}
        </div>
      </nav>
    );
  };
  
  export default Navbar;
