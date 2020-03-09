import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SingleUnit from '../containers/SingleUnit';


export class SingleContainer extends Component {
  render() {
    const { values } = this.props
    
    return (
      <>
        <Header />
        <SingleUnit
          addUnit={this.props.addUnit}
          handleOwner={this.props.handleOwner}
          handleSubmit={this.props.handleSubmit}
          handleUnit={this.props.handleUnit}
          nextStep={this.props.nextStep}
          values={values}
        />
        <Footer />
      </>
    )
  }
}

export default SingleUnit
