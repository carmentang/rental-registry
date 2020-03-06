import React, { Component } from 'react'

import Header from './Header';
import Footer from './Footer';
import OwnerDetailForm from './OwnerDetailForm'

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

