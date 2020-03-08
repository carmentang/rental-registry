import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import NewFormButton from '../components/Buttons/NewFormButton';

const Thanks = () => {
  return (
    <>
      <Header />
      <div className="homepage">
        <h1 className="homepage-title">Thank you for Submitting Your Form</h1>
        <hr />ww
        <br></br>
        <NewFormButton />
      </div>
      <Footer />
    </>
  );
};

export default Thanks;
