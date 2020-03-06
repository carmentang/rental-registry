import React, { Component } from 'react';
import { Form, Col } from 'react-bootstrap';

import ReasonForEviction from './ReasonForEviction';

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

const vacancyDays = ["", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const vacancyDaysList = vacancyDays.map((days) =>
  <option>{days}</option>
)

const evictedTenants = ["", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evictedTenantsList = evictedTenants.map((evicted) =>
  <option>{evicted}</option>
)

export class UnitDetailForm extends Component {

  render() {
    const { values } = this.props;
    var evictsRows = []
    if (values.values.numberOfEvictions) {
      var num = Number(this.props.values.values.numberOfEvictions)
      var numOfEvictsRows = new Array(num);

      for (var i = 0; i < numOfEvictsRows.length; i++) {
        evictsRows.push(<ReasonForEviction
          handleChange={this.props.handleChange}
          values={this.props}
        />);
      }

    }

    // let OccupancyStatusDetails = "";
    // if (values.values.occupancyStatus == "Other") {
    //   OccupancyStatusDetails =
    //     <Col>
    //       <Form.Control type="text" onChange={this.props.handleChange('occupancyStatusDetails')}
    //         defaultValue={values.occupancyStatusOther} />
    //       <Form.Label>If 'other' is selected, please describe:</Form.Label>
    //     </Col>
    // }
    return (
      <React.Fragment>
        <Form className="formBody">
          <h1>Occupancy</h1>
          <Form.Row>
            <Col>
              <Form.Control type="text" onChange={this.props.handleChange('unitNumber')}
                defaultValue={values.unitNumber} />
              <Form.Label>Unit #</Form.Label>
            </Col>
            <Col>
              <Form.Control as="select" onChange={this.props.handleChange('bedrooms')}
                defaultValue={values.bedrooms}>
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
              <Form.Control as="select" onChange={this.props.handleChange('bathrooms')}
                defaultValue={values.bathrooms}>
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
              <Form.Control as="select" onChange={this.props.handleChange('occupancyStatus')}
                defaultValue={values.occupancyStatus}>
                <option></option>
                <option>Manager/Owner unit</option>
                <option>Occupied</option>
                <option>Vacant</option>
                <option>Other</option>
              </Form.Control>
              <Form.Label>Occupancy Status</Form.Label>
            </Col>
            {values.values.occupancyStatus === "Other" &&
              <Col>
                <Form.Control type="text" onChange={this.props.handleChange('occupancyStatusDetails')}
                  defaultValue={values.occupancyStatusOther} />
                <Form.Label>Please describe occupancy status:</Form.Label>
              </Col>
            }
            <Col>
              <Form.Control as="select" onChange={this.props.handleChange('monthOccupied')}
                defaultValue={values.monthOccupied}>
                {monthList}
              </Form.Control>
              <Form.Label>Start month of occupancy</Form.Label>
            </Col>
            <Col>
              <Form.Control as="select" onChange={this.props.handleChange('yearOccupied')}
                defaultValue={values.yearOccupied}>
                {yearsList}
              </Form.Control>
              <Form.Label>Start year of occupancy</Form.Label>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Control as="select" onChange={this.props.handleChange('monthsRented')}
                defaultValue={values.monthsRented}>
                {monthsRentedList}
              </Form.Control>
              <Form.Label># Months occupied last year</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" onChange={this.props.handleChange('previousJanRent')}
                defaultValue={values.previousJanRent}>
              </Form.Control>
              <Form.Label>January rent amount for current year</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" onChange={this.props.handleChange('collectedJanUtil')}
                defaultValue={values.collectedJanUtil}>
              </Form.Control>
              <Form.Label>Utility Amount Collected in January</Form.Label>
            </Col>
          </Form.Row>
          <h1>Rent Increase</h1>
          <Form.Row>
            <Col>
              <Form.Control type="date" onChange={this.props.handleChange('dateRentChanged')}
                defaultValue={values.dateRentChanged}>
              </Form.Control>
              <Form.Label>Date of last effective rent increase/decrease</Form.Label>
            </Col>
            <Col>
              <Form.Control as="select" onChange={this.props.handleChange('rentChangeAmount')}
                defaultValue={values.rentChangeAmount}>
              </Form.Control>
              <Form.Label>Rent amount for month prior to rent increase/decrease</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" onChange={this.props.handleChange('currentRentAmount')}
                defaultValue={values.currentRentAmount}>
              </Form.Control>
              <Form.Label>Rent Amount</Form.Label>
            </Col>
          </Form.Row>
          <h1>Evictions</h1>
          <Form.Row>
            <Col>
              <Form.Control as="select" md="4" value={this.props.numberOfEvictions} onChange={this.props.handleChange('numberOfEvictions')}>
                {evictedTenantsList}
              </Form.Control>
              <Form.Label># Evicted tenants last year in this unit</Form.Label>
            </Col>
            <Col>
              {evictsRows}
            </Col>
          </Form.Row>
        </Form>
      </React.Fragment>
    )
  }
}

export default UnitDetailForm
