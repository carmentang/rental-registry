import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import TechEquityLogo from '../images/tech-equity.png';

const About = () => {

  return <div>
    <Header />
    <div className="wrapper wrapperBorder">
      <div className="homepage">
        <h1 className="homepage-title formHeader">About</h1>
        <hr />
        <div className="homepage-body">
          <p className="centeredText">* Blurb on AB 724*</p>
          <p className="centeredText">* Blurb about Tech Equity and Volunteers*</p>
        </div>
          <img className="logo" alt="Tech Equity Collaborative Logo" src={TechEquityLogo}></img>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
    
    <Footer />
  </div>
}

export default About
