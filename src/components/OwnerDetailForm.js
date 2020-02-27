import React, { Component } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap';

const years = [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990]
const yearsList = years.map((year) =>
  <option>{year}</option>
)
const states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
const statesList = states.map((state) =>
  <option>{state}</option>
)
export class OwnerDetailForm extends Component {
  saveAndContinue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  render() {
    const { values } = this.props;
    return (
      <React.Fragment>
        <Form className="formBody">
          <h1 className="formHeader">Submit New Rental Registry Form</h1>
          <hr />
          <h1>Owner</h1>
          <Row>
            <Col>
              <Form.Control type="text" placeholder='' onChange={this.props.handleChange('firstName')}
                defaultValue={values.firstName} />
              <Form.Label>First name</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" placeholder='' onChange={this.props.handleChange('lastName')}
                defaultValue={values.lastName} />
              <Form.Label>Last name</Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control as="select" placeholder='' onChange={this.props.handleChange('ownership')}>
                <option></option>
                <option>Sole Ownership</option>
                <option>Joint Tenancy</option>
                <option>Tenancy in Common</option>
                <option>Tenants by Entirety</option>
                <option>Community Property</option>
              </Form.Control>
              <Form.Label>Ownership Type</Form.Label>
            </Col>
            <Col>
              <Form.Control as="select" placeholder='' onChange={this.props.handleChange('acquired')}
                defaultValue={values.acquired}>
                <option></option>
                {yearsList}
              </Form.Control>
              <Form.Label>Year of Acquisition</Form.Label>
            </Col>
          </Row>
          <h1>Rental Property Address</h1>
          <Row>
            <Col>
              <Form.Control type="text" placeholder='' onChange={this.props.handleChange('street')}
                defaultValue={values.street} />
              <Form.Label>Street</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" placeholder='' onChange={this.props.handleChange('city')}
                defaultValue={values.city} />
              <Form.Label>City</Form.Label>
            </Col>
            <Col>
              <Form.Control as="select" onChange={this.props.handleChange('state')}>
                <option></option>
                {statesList}
              </Form.Control>
              <Form.Label>State</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" placeholder='' onChange={this.props.handleChange('zipcode')}
                defaultValue={values.zipcode} />
              <Form.Label>Zipcode</Form.Label>
            </Col>
          </Row>
          <br></br>
          <div className="formSubmitContainer">
            <h4> Does this property have more than one unit?</h4>
            <Button className="submit-new-form formButton" onClick={this.saveAndContinue}>
              <span>YES</span>
            </Button>
            <Button className="submit-new-form formButton" onClick={this.saveAndContinue}>
              <span>NO</span>
            </Button>
          </div>
        </Form>
        <br></br>
      </React.Fragment>
    )
  }
}

export default OwnerDetailForm


