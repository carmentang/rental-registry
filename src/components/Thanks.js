import React from 'react';
import Header from './Header';
import Footer from './Footer';
import NewFormButton from './NewFormButton'

const Thanks = () => {
  return <div>
    <Header />
    <div className="wrapper wrapperBorder">
      <div className="homepage">
        <h1 className="homepage-title formHeader">Thank you for Submitting Your Form</h1>
        <hr />
        <div className="homeButtonWrapper">
          <div className="buttonGrid">
            <NewFormButton />
          </div>
        </div>
      </div>
      <div className="footer">
          <Footer />
      </div>
    </div>
  </div>
}

export default Thanks
