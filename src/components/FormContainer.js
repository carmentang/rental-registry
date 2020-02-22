/* eslint-disable default-case */
import { inject, observer } from 'mobx-react';
import * as RentalDataStore from '../stores/RentalDataStore';
import React, { Component } from 'react';
import OwnerDetails from './OwnerDetails';
import UnitDetails from './UnitDetails'
import Thanks from './Thanks';

const FormContainer = inject('RentalDataStore')(observer(class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      ]
    }
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

    const ownerStore = new RentalDataStore();

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
          ownerStore={ownerStore}
          values={values}
          handleChange={this.handleChange}
          nextStep={this.nextStep}
        />
      case 2:
        return <UnitDetails
          ownerStore={ownerStore}
          values={values}
          handleChange={this.handleChange}
          nextStep={this.nextStep}
        />
      case 3:
        return <Thanks />
    }
  }
}));

export default FormContainer;