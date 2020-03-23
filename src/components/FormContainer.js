/* eslint-disable default-case */
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import OwnerDetails from './OwnerDetails';
import UnitDetails from './UnitDetails'
import Thanks from './Thanks';



const FormContainer = inject('store')(observer(class FormContainer extends Component {

  state = {
    step: 1,
    ownerName: '',
    ownership: '',
    acquired: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    units: [
      {
        id: Number,
        unitNumber: Number,
        bedrooms: Number,
        bathrooms: Number,
        occupancyStatus: '',
        occupancyStatusDetails: '',
        monthOccupied: '',
        yearOccupied: '',
        monthsRented: Number,
        currentJanRent: '',
        includedUtilities: '',
        additionalCharges: '',
        totalAdditionalCharges: '',
        dateRentChanged: '',
        rentchangeAmount: Number,
        numberOfEvictions: Number,
        currentRentAmount: Number,
        evictionReasons: '',
      }
    ],
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  // prevStep = () => {
  //   const { step } = this.state
  //   this.setState({
  //     step: step - 1
  //   })
  // }

  handleMultiSelect = options => {
    let result = '';
    for (let i = 0; i < options.length; i++) {
      const option = options[i];
      if (option.selected) {
        if (result.length > 0) {
          result += ', ';
        }
        result += option.label;
      }
    }
    return result;
  };

  handleChange = input => event => {
    const value = event.target.type !== "select-multiple" ? event.target.value : this.handleMultiSelect(event.target.options);
    this.setState({ [input]: value });
    this.props.store.updateValue(input, value);
  }


  render() {
    const { step } = this.state;
    const {
      ownerName,
      ownership,
      acquired,
      street,
      city,
      state,
      zipcode,
      units,
      unitNumber,
      bedrooms,
      bathrooms,
      occupancyStatus,
      occupancyStatusDetails,
      monthOccupied,
      yearOccupied,
      monthsRented,
      currentJanRent,
      includedUtilities,
      additionalCharges,
      totalAdditionalCharges,
      monthRentChanged,
      dateRentChanged,
      rentChangeAmount,
      numberOfEvictions,
      evictionReasons
    } = this.state;

    const values = {
      ownerName,
      ownership,
      acquired,
      street,
      city,
      state,
      zipcode,
      units,
      unitNumber,
      bedrooms,
      bathrooms,
      occupancyStatus,
      occupancyStatusDetails,
      monthOccupied,
      yearOccupied,
      monthsRented,
      currentJanRent,
      includedUtilities,
      additionalCharges,
      totalAdditionalCharges,
      monthRentChanged,
      dateRentChanged,
      rentChangeAmount,
      numberOfEvictions,
      evictionReasons,
    }

    switch (step) {
      case 1:
        return <OwnerDetails
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
        />
      case 2:
        return <UnitDetails
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
          history={this.props.history}
        />
      case 3:
        return <Thanks />
    }
  }
}));

export default FormContainer;
