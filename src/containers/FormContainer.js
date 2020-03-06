/* eslint-disable default-case */
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

import OwnerDetails from '../containers/OwnerDetails';
import UnitDetails from '../containers/UnitDetails';
import Thanks from '../containers/Thanks';

const FormContainer = inject('store')(
  observer(
    class FormContainer extends Component {
      state = {
        step: 1,
        firstName: '',
        lastName: '',
        ownership: '',
        acquired: '',
        street: '',
        city: '',
        amState: '',
        zipcode: '',
        units: [
          {
            id: '',
            unitNumber: Number,
            bedrooms: Number,
            bathrooms: Number,
            occupancyStatus: '',
            occupancyStatusDetails: '',
            occupancyStatusOther: '',
            monthOccupied: '',
            yearOccupied: '',
            monthsRented: Number,
            previousJanRent: '',
            currentJanRent: '',
            collectedJanUtil: '',
            dateRentChanged: '',
            rentchangeAmount: Number,
            currentRentAmount: Number,
            evictions: [
              {
                numberOfEvictions: Number,
                evictionReasons: ''
              }
            ]
          }
        ]
      };

      nextStep = () => {
        const { step } = this.state;
        this.setState({
          step: step + 1
        });
      };

      // prevStep = () => {
      //   const { step } = this.state
      //   this.setState({
      //     step: step - 1
      //   })
      // }

      addUnit = (e) => {
        this.setState((prevState) => ({
          units: [...prevState.unit, {
            id: 0,
            unitNumber: 0,
            bedrooms: 0,
            bathrooms: 0,
            occupancyStatus: '',
            occupancyStatusDetails: '',
            monthOccupied: '',
            yearOccupied: '',
            monthsRented: 0,
            currentJanRent: '',
            collectedJanUtil: '',
            dateRentChanged: '',
            rentchangeAmount: 0,
            currentRentAmount: 0,
            evictions: [
              {
                numberOfEvictions: 0,
                evictionReasons: ''
              }
            ]
          }],
        }));
      }

      addEviction = eviction => {
        this.setState({
          evictions: [
            ...this.state.evictions,
            eviction
          ]
        })
      }

      handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      };

      handleUnitChange = (e) => {
        if (['unitNumber', 'bedrooms', 'bathrooms', 'occupancyStatus', 'occupancyStatusDetails', 'monthOccupied', 'yearOccupied', 'monthsRented', 'currentJanRent', 'collectedJanUtil', 'rentChangeAmount', 'currentRentAmount', 'evictions'].includes(e.target.className)) {
          let units = [...this.state.units]
          units[e.target.dataset.id][e.target.className] = e.target.value
          this.setState({ units }, () => console.log(this.state.units))
        } else {
          this.setState({ [e.target.name]: e.target.value.toUpperCase() })
        }
      }

      handleSubmit = (e) => { e.preventDefault() }

      render() {
        const { step } = this.state;
        const {
          firstName,
          lastName,
          ownership,
          acquired,
          street,
          city,
          amState,
          zipcode,
          units,
          id,
          unitNumber,
          bedrooms,
          bathrooms,
          occupancyStatus,
          occupancyStatusDetails,
          monthOccupied,
          yearOccupied,
          monthsRented,
          currentJanRent,
          collectedJanUtil,
          dateRentChanged,
          rentChangeAmount,
          currentRentAmount,
          evictions,
          numberOfEvictions,
          evictionReasons
        } = this.state;

        const values = {
          firstName,
          lastName,
          ownership,
          acquired,
          street,
          city,
          amState,
          zipcode,
          units,
          id,
          unitNumber,
          bedrooms,
          bathrooms,
          occupancyStatus,
          occupancyStatusDetails,
          monthOccupied,
          yearOccupied,
          monthsRented,
          currentJanRent,
          collectedJanUtil,
          dateRentChanged,
          rentChangeAmount,
          currentRentAmount,
          evictions,
          numberOfEvictions,
          evictionReasons
        };

        switch (step) {
          case 1:
            return (
              <OwnerDetails
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            );
          case 2:
            return (
              <UnitDetails
                handleChange={this.handleChange}
                handleSubmit={this.props.handleSubmit}
                handleUnitChange={this.handleUnitChange}
                nextStep={this.nextStep}
                values={values}
              />
            );
          case 3:
            return <Thanks />;
        }
      }
    }
  )
);

export default FormContainer;
