import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import NewFormButton from '../components/Buttons/NewFormButton';

import CaLogo from '../images/ca-logo.png';

const Thanks = () => {
  console.log("Render Thanks");
  
  return (
    <>
      <Header />
      <div className="homepage">
        <div>
          <h2 className="pt-navbar-heading" style={{ color: 'black' }}>
            <img
              alt="California State Logo"
              src={CaLogo}
              style={{ display: 'block', 'height': 200, 'margin-left': 'auto', 'margin-right': 'auto' }}
            ></img><br />
            California<br />
            Rental Registry
          </h2>
        </div>
        <h1 className="homepage-title">Thank you for Submitting Your Form!</h1>
        <hr />
        <br></br>
        <NewFormButton />
      </div>
      <Footer />
    </>
  );
};

export default Thanks;
