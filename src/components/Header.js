import React from 'react';
import CaLogo from '../images/ca-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="pt-navbar">
      <div className="pt-navbar-group pt-align-left">
        <div className="pt-navbar-heading header">
          <Link className='link' to="/" >
              <img className='headerLogo' alt="California State Logo" src={CaLogo}></img>
              <p>
                <span>California</span>
                <span>Rental Registry</span>
              </p>
            </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;