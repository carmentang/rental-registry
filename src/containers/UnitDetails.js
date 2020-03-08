import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import UnitDetailForm from '../components/Unit';
import UnitDetailFormButton from '../components/Buttons/UnitButtons';

const UnitDetails = inject('store')(observer(class UnitDetails extends Component {
  // submitForm = (e) => {
  //   e.preventDefault()
  //   // submit function
  // }

  // addAnotherUnit = (e) => {
  //   e.preventDefault()
  //   var unitDetailFormRows = this.state.unitDetailFormRows
  //   unitDetailFormRows.push('new row')
  //   this.setState({ unitDetailFormRows: unitDetailFormRows })
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     unitDetailFormRows: ["primary row"]
  //   };
  // }


  render() {

    return (
      <React.Fragment>
        <Header />
        <h1 className="formHeader">Submit New Rental Registry Form</h1>
        <hr />    
        <UnitDetailForm
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
          handleUnitChange={this.props.handleUnitChange}
          nextStep={this.props.nextStep}
          values={this.props}
        />
        <UnitDetailFormButton
          addUnit={this.props.addUnit}
          handleChange={this.props.handleChange}
          nextStep={this.props.nextStep}
          values={this.props}
        />
        <Footer />
      </React.Fragment>
    )
  }
}));

export default UnitDetails;
