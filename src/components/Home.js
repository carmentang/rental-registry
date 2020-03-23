import {inject, observer} from 'mobx-react';
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewFormButton from './NewFormButton';
import AboutButton from './AboutButton';

const Home = inject('store')(observer(class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="wrapper wrapperBorder">
          <div className="homepage">
            <div className="header">
              <h1>California Rental Registry</h1>
              <hr />
            </div>
            <p className="homepage-body">
              Welcome! If you are a landlord that owns five or more dwelling units, then you are required to submit a rental registry form for all of your properties.
            </p>
            <div className="homeButtonWrapper">
              <div className="buttonGrid">
                <NewFormButton />
              </div>
              <div className="buttonGrid">
                <AboutButton />
              </div>
            </div>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}));

export default Home;