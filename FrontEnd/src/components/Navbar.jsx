import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="main-nav">
        <a className="main-nav-logo">
            <NavLink to="/">
          <img
            className="main-nav-logo-image"
            src="../../src/assets/images/argentBankLogo.webp"
            alt="Argent Bank Logo"
          />
          </NavLink>
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
            <NavLink to="/SignIn" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
