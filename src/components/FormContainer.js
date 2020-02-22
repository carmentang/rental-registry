/* eslint-disable default-case */
import { inject, observer } from 'mobx-react';
import { RentalDataStore } from '../RentalDataStore';
import React, { Component } from 'react';
import OwnerDetails from './OwnerDetails';
import UnitDetails from './UnitDetails'
import Thanks from './Thanks';

const FormContainer = inject('store')(observer(class FormContainer extends Component {

  state = {
    step: 1,
    firstName: '',
    lastName: '',
    ownership: '',
    acquired: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    units: [
      {
        id: Number,
        bedrooms: Number,
        bathrooms: Number,
        occupancyStatus: '',
        monthOccupied: '',
        yearOccupied: '',
        monthsRented: Number,
        vacancyDays: Number,
        previousJanRent: '',
        currentJanRent: '',
        collectedJanUtil: '',
        monthRentChanged: '',
        dateRentChanged: '',
        evictions: Number,
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

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  handleChange = input => event => {
    this.setState({ [input]: event.target.value })
  }


  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      ownership,
      acquired,
      street,
      city,
      state,
      zipcode,
      units,
      bedrooms,
      bathrooms,
      occupancyStatus,
      monthOccupied,
      yearOccupied,
      monthsRented,
      vacancyDays,
      previousJanRent,
      currentJanRent,
      collectedJanUtil,
      monthRentChanged,
      dateRentChanged,
      evictions,
      evictionReasons
    } = this.state;

    const values = {
      firstName,
      lastName,
      ownership,
      acquired,
      street,
      city,
      state,
      zipcode,
      units,
      bedrooms,
      bathrooms,
      occupancyStatus,
      monthOccupied,
      yearOccupied,
      monthsRented,
      vacancyDays,
      previousJanRent,
      currentJanRent,
      collectedJanUtil,
      monthRentChanged,
      dateRentChanged,
      evictions,
      evictionReasons
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
        />
      case 3:
        return <Thanks />
    }
  }
}));

export default FormContainer;