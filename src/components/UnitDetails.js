import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import UnitDetailForm from './UnitDetailForm'
import UnitDetailFormButton from './UnitDetailFormButton'

export class UnitDetails extends Component {
  submitForm = (e) => {
    e.preventDefault()
    // submit function
  }

  addAnotherUnit = (e) => {
    e.preventDefault()
    var unitDetailFormRows = this.state.unitDetailFormRows
    unitDetailFormRows.push('new row')
    this.setState({ unitDetailFormRows: unitDetailFormRows })
  }

  constructor(props) {
    super(props);
    this.state = {
      unitDetailFormRows: ["primary row"]
    };
  }


  render() {

    return (
      <React.Fragment>
        <Header />
        <h1 className="formHeader">Submit New Rental Registry Form</h1>
        {this.state.unitDetailFormRows.map((r) => (
          <UnitDetailForm
            nextStep={this.props.nextStep}
            handleChange={this.props.handleChange}
            values={this.props}
          />
        ))}
        <UnitDetailFormButton
          nextStep={this.props.nextStep}
          handleChange={this.props.handleChange}
          values={this.props}
          unitDetailFormRows={this.state.unitDetailFormRows}
          addAnotherUnit={this.addAnotherUnit}
        />
        <Footer />
      </React.Fragment>
    )
  }
};

export default UnitDetails
