import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import NewFormButton from '../components/NewFormButton';

const Thanks = () => {
  return <div class="wrapper">
    <Header />
    <div className="homepage">
      <h1 className="homepage-title">Thank you for Submitting Your Form</h1>
      <hr />
      <p className="homepage-body">
        <div>
          <NewFormButton />
        </div>
      </p>
    </div>
    <Footer />
  </div>
}

export default Thanks
