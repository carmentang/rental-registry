import { inject, observer } from 'mobx-react';
import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';

const years = [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990]
const yearsList = years.map((year) =>
  <option>{year}</option>
)
const states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
const statesList = states.map((state) =>
  <option>{state}</option>
)
const OwnerDetailForm = inject('store')(observer(class OwnerDetailForm extends Component {
  saveAndContinueMultiple = (e) => {
    e.preventDefault()
    this.props.store.setHasMultipleUnits(true);
    this.props.nextStep()
  }

  saveAndContinueSingle = (e) => {
    e.preventDefault()
    this.props.store.setHasMultipleUnits(false);
    this.props.nextStep()
  }

  render() {
    const { values } = this.props;

    return (
      <React.Fragment>
        <div className="wrapper wrapperBorder">
          <div className="wrapperContent">
            <Form className="formBody">
              <h1 className="formHeader">Submit New Rental Registry Form</h1>
              <hr />
              <h4>Owner</h4>
              <div className="gridWrapper">
                <div className="grid2">
                  <p>
                    <Form.Control type="text" onChange={this.props.handleChange('ownerName')}
                      defaultValue={values.ownerName} />
                    <Form.Label>Owner Name</Form.Label>                
                  </p>
                </div>
                <div className="grid2">
                  <p>
                    <Form.Control as="select" onChange={this.props.handleChange('ownership')}
                      defaultValue={values.ownership}>
                      <option></option>
                      <option>Sole Ownership</option>
                      <option>Joint Tenancy</option>
                      <option>Tenancy in Common</option>
                      <option>Tenants by Entirety</option>
                      <option>Community Property</option>
                    </Form.Control>
                    <Form.Label>Ownership Type</Form.Label>
                  </p>
                  <p>
                    <Form.Control as="select" onChange={this.props.handleChange('acquired')}
                      defaultValue={values.acquired}>
                      <option></option>
                      {yearsList}
                    </Form.Control>
                    <Form.Label>Year of Acquisition</Form.Label>
                  </p>
                </div>
              </div>

              <h4>Rental Property Address</h4>
              <div className="grid4">
                <p>
                  <Form.Control type="text" onChange={this.props.handleChange('street')}
                    defaultValue={values.street} />
                  <Form.Label>Street</Form.Label>
                </p>
                <p>
                  <Form.Control type="text" onChange={this.props.handleChange('city')}
                    defaultValue={values.city} />
                  <Form.Label>City</Form.Label>              
                </p>
                <p>
                  <Form.Control as="select" onChange={this.props.handleChange('state')}
                    defaultValue={values.state} >
                    <option></option>
                    {statesList}
                  </Form.Control>
                  <Form.Label>State</Form.Label>              
                </p>
                <p>
                  <Form.Control type="text" onChange={this.props.handleChange('zipcode')}
                    defaultValue={values.zipcode} />
                  <Form.Label>Zipcode</Form.Label>               
                </p>
              </div>
            </Form>

            <br></br>
              <h4 className="blueText centeredText"> Does this property have more than one unit?</h4>
              <div className="buttonWrapper">
                <div className="buttonGrid">
                  <Button className="submit-new-form homeButtons buttonColor buttons" onClick={this.saveAndContinueMultiple}>
                    <span>YES</span>
                  </Button>
                  <Button className="submit-new-form homeButtons buttonColor buttons" onClick={this.saveAndContinueSingle}>
                    <span>NO</span>
                  </Button>              
                </div>
              </div>
          </div>
        </div>

      </React.Fragment>
    )
  }
}));

export default OwnerDetailForm;