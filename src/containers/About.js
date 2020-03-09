import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import TechEquityLogo from '../images/tech-equity.png';


const About = () => {


  return (
    <div>
      <Header />
      <div className="wrapper main wrapperBorder">
        <div className="homepage, content">
          <h1 className="homepage-title formHeader">About</h1>
          <hr />
          <p className="homepage-body">
            <span className='centeredText'> * Blurb about Tech Equity and Volunteers*</span>
          </p>
          <img className="logo" alt="Tech Equity Collaborative Logo" src={TechEquityLogo}></img>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  )
}


export default About
