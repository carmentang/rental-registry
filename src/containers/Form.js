/* eslint-disable default-case */
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

import Owner from '../components/Owner';
import Thanks from '../components/Thanks';
import SingleUnit from '../components/SingleUnit';

const Form = inject('store')(
  observer(
    class Form extends Component {
      state = {
        step: 1,
        isActive: true,
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
            utilities: [],
            landlordCharges: [],
            totalCharges: '',
            dateRentChanged: '',
            rentchangeAmount: Number,
            currentRentAmount: Number,
            evictions: [
              {
                numberOfEvictions: '',
                evictionReasons: ''
              }
            ],
          }
        ]
      };

      nextStep = () => {
        const { step } = this.state;
        this.setState({
          step: step + 1
        });
      };

      addUnit = e => {
        if (this.state.units.length < 100) {
          this.setState({
            isActive: true,
            units: this.state.units.concat([
              {
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
                currentRentAmount: '',
                evictions: [
                  {
                    numberOfEvictions: '',
                    evictionReasons: ''
                  }
                ],
              }
            ])
          })
        } // trying conditional 
      }

      addEviction = e => {
        if (this.state.evictions.length < 100) {
          this.setState({
            evictions: this.state.evictions.concat([
              {
                numberOfEvictions: '',
                evictionReasons: ''
              }
            ])
          })
        } // trying conditional 
      }

      handleOwner = input => event => {
        this.setState({ [input]: event.target.value })
      }

      handleUnit = e => {
        if (
          [
            'unitNumber',
            'bedrooms',
            'bathrooms',
            'occupancyStatus',
            'occupancyStatusDetails',
            'monthOccupied',
            'yearOccupied',
            'monthsRented',
            'currentJanRent',
            'utilities',
            'landlordCharges',
            'totalCharges',
            'rentChangeAmount',
            'currentRentAmount',
            'evictions',
            'numberOfEvictions',
          ].includes(e.target.className)
        ) {
          let units = [...this.state.units];
          units[e.target.dataset.id][e.target.className] = e.target.value;
          this.setState({ units }, () => console.log(this.state.units));
        }
        else {
          this.setState({ [e.target.name]: e.target.value.toUpperCase() });
        }
      };

      handleSubmit = e => {
        e.preventDefault();
      };

      handleShow = () => {
        this.setState({ isActive: true });
      };

      handleHide = () => {
        this.setState({ isActive: false });
      };


      render() {
        console.log("Render Form");
        
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
          unitNumber,
          bedrooms,
          bathrooms,
          occupancyStatus,
          occupancyStatusDetails,
          monthOccupied,
          yearOccupied,
          monthsRented,
          currentJanRent,
          utilities,
          landlordCharges,
          totalCharges,
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
          unitNumber,
          bedrooms,
          bathrooms,
          occupancyStatus,
          occupancyStatusDetails,
          monthOccupied,
          yearOccupied,
          monthsRented,
          currentJanRent,
          utilities,
          landlordCharges,
          totalCharges,
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
                addEviction={this.addEviction}
                handleOwner={this.handleOwner}
                handleSubmit={this.handleSubmit}
                handleUnit={this.handleUnit}
                values={values}
              />
            );
          case 2:
            return (
              <SingleUnit
                addEviction={this.addEviction}
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
