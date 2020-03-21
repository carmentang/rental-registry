import { inject, observer } from 'mobx-react';
import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import UnitDetailForm from './UnitDetailForm'
import UnitDetailFormButton from './UnitDetailFormButton'

const UnitDetails = inject('store')(observer(class UnitDetails extends Component {
  submitForm = (e) => {
      this.props.store.sendDataToNetlify();
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

    renderInvisibleFormForNetlify() {
      return (
        <form name="rental-data" method="post" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
            <input type="hidden" name="form-name" value="rental-data" />
            {Object.entries(this.props.store.data).map(([key, value]) => (
                <input type="text" name={key} value={value} />
            ))}
        </form>
      );
    }

  render() {

    return (
      <React.Fragment>
        {this.renderInvisibleFormForNetlify()}
        <Header />
        <h1 className="formHeader">Submit New Rental Registry Form</h1>
        <hr />    
        {this.state.unitDetailFormRows.map((r, index) => (
          <UnitDetailForm
            nextStep={this.props.nextStep}
            handleChange={this.props.handleChange}
            values={this.props}
            index={index+1}
          />
        ))}
        <UnitDetailFormButton
          nextStep={this.props.nextStep}
          handleChange={this.props.handleChange}
          values={this.props}
          unitDetailFormRows={this.state.unitDetailFormRows}
          addAnotherUnit={this.addAnotherUnit}
          submitForm={this.submitForm}
          hasMultipleUnits={this.props.store.hasMultipleUnits}
        />
        <Footer />
      </React.Fragment>
    )
  }
}));

export default UnitDetails
