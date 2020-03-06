import React, { Component } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import OwnerDetailForm from '../components/OwnerDetailForm';

export class OwnerDetails extends Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <OwnerDetailForm
          nextStep={this.props.nextStep}
          handleChange={this.props.handleChange}
          values={this.props}
        />
        <br></br>
        <Footer />
      </React.Fragment>
    )
  }
};

export default OwnerDetails;

