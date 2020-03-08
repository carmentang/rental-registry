import React from 'react';
import { Link } from 'react-router-dom';

import CaLogo from '../images/ca-logo.png';

const Header = () => {
  return (
    <nav className="pt-navbar">
      <div className="pt-navbar-group pt-align-left">
        <img alt="California State Logo" src={CaLogo} style={{ padding: 15, float: "left", height: 100 }}></img>
        <div className="pt-navbar-heading">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <p style={{ color: "white" }}>
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
