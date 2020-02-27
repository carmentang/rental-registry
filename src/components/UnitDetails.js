import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import UnitDetailForm from './UnitDetailForm'
import UnitDetailFormButton from './UnitDetailFormButton'

export class UnitDetails extends Component {
  addAnotherUnit = (e) => {
    e.preventDefault()
    // add a new form column
  }

  submitForm = (e) => {
    e.preventDefault()
    // submit function
  }

  constructor(props) {
    super(props);
    this.state = {
      unitDetailFormRows: ["primary row"]
    };
  }

  addRow = (e) => {
    var unitDetailFormRows = this.state.unitDetailFormRows
    unitDetailFormRows.push('new row')
    this.setState({ unitDetailFormRows: unitDetailFormRows })
    console.log("clicked addRow")
  }

  render() {
    // const { unitDetailFormRows } = this.state.unitDetailFormRows
    return (
      <React.Fragment>
        <Header />
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
          addRow={this.addRow}
        />
        <Footer />
      </React.Fragment>
    )
  }
}

export default UnitDetails
