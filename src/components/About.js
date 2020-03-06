import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import TechEquityLogo from '../images/tech-equity.png';




const About = () => {


  return <div class="wrapper">
    <Header />
    <div className="homepage">
      <h1 className="homepage-title">About</h1>
      <hr />
      <p className="homepage-body">
        <span> * Blurb on AB 724*</span>
      </p>
      <br></br>
      <p className="homepage-body">
        <span> * Blurb about Tech Equity and Volunteers*</span>
      </p>
      <div>
      <img style={{ height: 100 }} alt="Tech Equity Collaborative Logo" src={TechEquityLogo}></img>
      </div>
    </div>
    
    <Footer />
  </div>
}

export default About
