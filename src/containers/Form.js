/* eslint-disable default-case */
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

import Owner from '../components/Owner';
import Thanks from '../components/Thanks';
import Unit from '../components/Unit';

const Form = inject('store')(
  observer(
    class Form extends Component {
      state = {
        step: 1,
        isHidden: false,
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

      // addUnit = e => {
      //   this.setState(prevState => ({
      //     units: [
      //       ...prevState.units,
      //       {
      //         id: '',
      //         unitNumber: '',
      //         bedrooms: '',
      //         bathrooms: '',
      //         occupancyStatus: '',
      //         occupancyStatusDetails: '',
      //         monthOccupied: '',
      //         yearOccupied: '',
      //         monthsRented: '',
      //         currentJanRent: '',
      //         collectedJanUtil: '',
      //         dateRentChanged: '',
      //         rentChangeAmount: '',
      //         currentRentAmount: ''
      //       }
      //     ]
      //   }));
      // };

      addUnit = e => {
        if (this.state.units.length < 100) {
          this.setState({
            units: this.state.units.concat([
              {
                id: '',
                unitNumber: '',
                bedrooms: '',
                bathrooms: '',
                occupancyStatus: '',
                occupancyStatusDetails: '',
                monthOccupied: '',
                yearOccupied: '',
                monthsRented: '',
                currentJanRent: '',
                collectedJanUtil: '',
                dateRentChanged: '',
                rentChangeAmount: '',
                currentRentAmount: ''
              }])
          })
        } // trying conditional 
      }

      handleOwner = input => event => {
        this.setState({ [input]: event.target.value })
      }

      handleUnit = e => {
        if (
          [
            'id',
            'unitNumber',
            'bedrooms',
            'bathrooms',
            'occupancyStatus',
            'occupancyStatusDetails',
            'monthOccupied',
            'yearOccupied',
            'monthsRented',
            'currentJanRent',
            'collectedJanUtil',
            'rentChangeAmount',
            'currentRentAmount',
            'evictions'
          ].includes(e.target.className)
        ) {
          let units = [...this.state.units];
          units[e.target.dataset.id][e.target.className] = e.target.value;
          this.setState({ units }, () => console.log(this.state.units));
        } else {
          this.setState({ [e.target.name]: e.target.value.toUpperCase() });
        }
      };

      handleSubmit = e => {
        e.preventDefault();
      };

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
              <Owner
                nextStep={this.nextStep}
                addUnit={this.addUnit}
                handleOwner={this.handleOwner}
                handleSubmit={this.handleSubmit}
                handleUnit={this.handleUnit}
                values={values}   
              />
            );
          case 2:
            return (
              <Unit
                addUnit={this.addUnit}
                handleOwner={this.handleOwner}
                handleSubmit={this.handleSubmit}
                handleUnit={this.handleUnit}
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

export default Form;
