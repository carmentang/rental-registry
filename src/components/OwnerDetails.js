import React, { Component } from 'react'

import Header from './Header';
import Footer from './Footer';
import OwnerDetailForm from './OwnerDetailForm'
import { Button } from 'react-bootstrap';

export class OwnerDetails extends Component {
  saveAndContinue = (e) => {
    e.preventDefault()
    // this.props.store.storeOwnerAndPropertyData(this.props.props.values);
    this.props.nextStep()
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="wrapper, main">
          <div className="wrapperContent">
            <h1 className="formHeader">Submit New Rental Registry Form</h1>
            <OwnerDetailForm
              nextStep={this.props.nextStep}
              handleChange={this.props.handleChange}
              values={this.props}
            />
            <br></br>
            <h4 className="blueText centeredText"> Does this property have more than one unit?</h4>
            <div className="buttonWrapper">
              <div className='buttonGrid'>
                <Button className="submit-new-form homeButtons buttonColor" onClick={this.saveAndContinue}>
                  <span>YES</span>
                </Button>
              </div>
              <div className='buttonGrid'>
                <Button className="submit-new-form homeButtons buttonColor" onClick={this.saveAndContinue}>
                  <span>NO</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </React.Fragment>
    )
  }
};

export default OwnerDetails;

