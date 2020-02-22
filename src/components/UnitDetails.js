import { inject, observer } from 'mobx-react';
import React, { Component } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

const months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const monthList = months.map((month) =>
  <option>{month}</option>
);

const days = ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
const daysList = days.map((day) =>
  <option>{day}</option>
)
const years = ["", 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990]
const yearsList = years.map((year) =>
  <option>{year}</option>
)
const monthsRented = ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const monthsRentedList = monthsRented.map((month) =>
  <option>{month}</option>
)

const vacancyDays = ["", "1-9", "10-19", "20-29", "30-39", "40-49", "50+"]
const vacancyDaysList = vacancyDays.map((days) =>
  <option>{days}</option>
)
const evictedTenants = ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, "10+"]
const evictedTenantsList = evictedTenants.map((evicted) =>
  <option>{evicted}</option>
)

const UnitDetails = inject('RentalDataStore')(observer(class UnitDetails extends Component {
  addAnotherUnit = (e) => {
    e.preventDefault()
    // add a new form column
  }

  submitForm = (e) => {
    e.preventDefault()
    // submit function
  }
  
  render() {
    const { values } = this.props
    return (
      <React.Fragment>
        <Header />
        <Form className="formBody">
          <h1 className="formHeader">Submit New Rental Registry Form</h1>
          <hr />
          <h1>Occupancy</h1>
          <Form.Row>
            <Col>
              <Form.Control type="text" onChange={this.props.handleChange('unitNumber')}
                defaultValue={values.firstName} />
              <Form.Label>Unit #</Form.Label>
            </Col>
            <Col>
              <Form.Control as="select" onChange={this.props.handleChange('bedroomNumber')}>
                <option></option>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6+</option>
              </Form.Control>
              <Form.Label># Bedrooms</Form.Label>
            </Col>
            <Col>
              <Form.Control as="select" onChange={this.props.handleChange('bathroomNumber')}>
                <option></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </Form.Control>
              <Form.Label># Bathrooms</Form.Label>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Control as="select" onChange={this.props.handleChange('occupancyStatus')}>
                <option></option>
                <option>Occupied</option>
                <option>Vacant</option>
                <option>Other</option>
              </Form.Control>
              <Form.Label>Occupancy Status</Form.Label>
            </Col>
            <Col>
              <Form.Control as="select" onChange={this.props.handleChange('startMonthOccupancy')}>
                {monthList}
              </Form.Control>
              <Form.Label>Start month of occupancy</Form.Label>
            </Col>
            <Col>
              <Form.Control as="select" onChange={this.props.handleChange('startYearOccupancy')}>
                {yearsList}
              </Form.Control>
              <Form.Label>Start year of occupancy</Form.Label>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Control as="select" onChange={this.props.handleChange('monthsRented')}>
                {monthsRentedList}
              </Form.Control>
              <Form.Label># months rented out last year</Form.Label>
            </Col>
            <Col>
              <Form.Control as="select" onChange={this.props.handleChange('vacancyDays')}>
                {vacancyDaysList}
              </Form.Control>
              <Form.Label># vacancy days last year</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" onChange={this.props.handleChange('januaryRent')}>
              </Form.Control>
              <Form.Label>January Rent $</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" onChange={this.props.handleChange('januaryUtility')}>
              </Form.Control>
              <Form.Label>January Utility $</Form.Label>
            </Col>
          </Form.Row>
          <h1>Rent Increase & Evictions</h1>
          <Form.Row>
            <Col>
              <Form.Control as="select" onChange={this.props.handleChange('monthOfRentChange')}>
                {monthList}
              </Form.Control>
              <Form.Label>Month of last effective rent increase/decrease</Form.Label>
            </Col>
            <Col>
              <Form.Control as="select" onChange={this.props.handleChange('monthOfRentChange')}>
                {daysList}
              </Form.Control>
              <Form.Label>Date of last effective rent increase/decrease</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" onChange={this.props.handleChange('rentChangeAmount')}>
              </Form.Control>
              <Form.Label>Rent increase/decrease $</Form.Label>
            </Col>
            <Form.Row />
            <Form.Row>
              <Col>
                <Form.Control as="select" md="3" onChange={this.props.handleChange('numberOfEvictions')}>
                  {evictedTenantsList}
                </Form.Control>
                <Form.Label># Evicted tenants last year</Form.Label>
              </Col>
              <Col>
                <Form.Control type="text" md="6" onChange={this.props.handleChange('reasonForEviction')}>
                </Form.Control>
                <Form.Label>Reason for evictions</Form.Label>
              </Col>
            </Form.Row>
          </Form.Row>
          <br></br>
          <div className="formSubmitContainer">
            <Form.Row>
              <Button className="submit-new-form formButtonSubmit" onClick={this.addAnotherUnit}>
                <span>+ Add Another Unit</span>
              </Button>
            </Form.Row>
            <Form.Row>
              <Button className="submit-new-form formButtonSubmit" onClick={this.submitForm}>
                <span>Submit Form</span>
              </Button>
            </Form.Row>
          </div>
        </Form>
        <Footer />
      </React.Fragment>
    )
  }
}));

export default UnitDetails
