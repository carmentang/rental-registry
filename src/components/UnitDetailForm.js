import React, { Component } from 'react'
import { Form, Col, Button } from 'react-bootstrap';
import ReasonForEviction from './ReasonForEviction'
import { inject, observer } from "mobx-react";
import { monthList } from "../constants";

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

const UnitDetailForm = inject('store')(observer(class UnitDetailForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numEvictionRows: 0,
    };
  }

  addEvictionRow = (e) => {
    e.preventDefault();
    var numEvictionRows = this.state.numEvictionRows;
    numEvictionRows += 1;
    this.setState({ numEvictionRows: numEvictionRows });
  }

  setNoEvictions = (e) => {
    e.preventDefault();
    this.props.store.setNoEvictions(this.props.index - 1);
  }

  renderEvictionRows() {
    var evictionRows = [];
    for (let i = 0; i < this.state.numEvictionRows; i++) {
      evictionRows.push(<ReasonForEviction
        handleChange={this.props.handleChange}
        unitIndex={this.props.index}
        evictionIndex={i + 1}
      />);
    }
    return evictionRows;
  }

  render() {
    const { values } = this.props;
    const unitIndex = this.props.index;

    return (
      <React.Fragment>
        <Form className="formBody">
          <h1>Occupancy</h1>
          <div className="minText">
            <Form.Row>
              <Col>
                <Form.Control type="text" onChange={this.props.handleChange(`unit-${unitIndex}-unitNumber`)}
                  defaultValue={values.unitNumber} />
                <Form.Label>Unit #</Form.Label>
              </Col>
              <Col>
                <Form.Control as="select" onChange={this.props.handleChange(`unit-${unitIndex}-bedrooms`)}
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
                <Form.Control as="select" onChange={this.props.handleChange(`unit-${unitIndex}-bathrooms`)}
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
                <Form.Control as="select" onChange={this.props.handleChange(`unit-${unitIndex}-occupancyStatus`)}
                  defaultValue={values.occupancyStatus}>
                  <option></option>
                  <option>Manager/Owner unit</option>
                  <option>Occupied</option>
                  <option>Vacant</option>
                  <option>Other</option>
                </Form.Control>
                <Form.Label>Occupancy Status</Form.Label>
              </Col>
              {this.props.store.data[`unit-${unitIndex}-occupancyStatus`] === "Other" &&
                <Col>
                  <Form.Control type="text" onChange={this.props.handleChange(`unit-${unitIndex}-occupancyStatusDetails`)}
                    defaultValue={values.occupancyStatusOther} />
                  <Form.Label>Please describe occupancy status:</Form.Label>
                </Col>
              }
              <Col>
                <Form.Control as="select" onChange={this.props.handleChange(`unit-${unitIndex}-monthOccupied`)}
                  defaultValue={values.monthOccupied}>
                  {monthList}
                </Form.Control>
                <Form.Label>Start month of occupancy</Form.Label>
              </Col>
              <Col>
                <Form.Control as="select" onChange={this.props.handleChange(`unit-${unitIndex}-yearOccupied`)}
                  defaultValue={values.yearOccupied}>
                  {yearsList}
                </Form.Control>
                <Form.Label>Start year of occupancy</Form.Label>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Control as="select" onChange={this.props.handleChange(`unit-${unitIndex}-monthsRented`)}
                  defaultValue={values.monthsRented}>
                  {monthsRentedList}
                </Form.Control>
                <Form.Label># Months occupied last year</Form.Label>
              </Col>
              <Col>
                <Form.Control type="text" onChange={this.props.handleChange(`unit-${unitIndex}-previousJanRent`)}
                  defaultValue={values.previousJanRent}>
                </Form.Control>
                <Form.Label>January rent amount for current year</Form.Label>
              </Col>
              <Col>
                <Form.Control type="text" onChange={this.props.handleChange(`unit-${unitIndex}-collectedJanUtil`)}
                  defaultValue={values.collectedJanUtil}>
                </Form.Control>
                <Form.Label>Utility Amount Collected in January</Form.Label>
              </Col>
            </Form.Row>
          </div>

          <h1>Rent Increase</h1>
          <div className="minText">
            <Form.Row>
              <Col>
                <Form.Control type="date" onChange={this.props.handleChange(`unit-${unitIndex}-dateRentChanged`)}
                  defaultValue={values.dateRentChanged}>
                </Form.Control>
                <Form.Label>Date of last effective rent increase/decrease</Form.Label>
              </Col>
              <Col>
                <Form.Control as="select" onChange={this.props.handleChange(`unit-${unitIndex}-rentChangeAmount`)}
                  defaultValue={values.rentChangeAmount}>
                </Form.Control>
                <Form.Label>Rent amount for month prior to rent increase/decrease</Form.Label>
              </Col>
              <Col>
                <Form.Control type="text" onChange={this.props.handleChange(`unit-${unitIndex}-currentRentAmount`)}
                  defaultValue={values.currentRentAmount}>
                </Form.Control>
                <Form.Label>Rent Amount</Form.Label>
              </Col>
            </Form.Row>
          </div>

          <h1>Evictions</h1>
          <div className="minText">
            <Form.Row>
              {this.props.store.hasEvictions[unitIndex - 1] ? (
                <div className={this.state.numEvictionRows === 0 ? "evictionButtonContainer" : "fullWidth"}>
                  {this.state.numEvictionRows === 0 ? (
                    <div>
                      <p>
                        Was there a tenancy termination in this unit in the prior calendar year?
                        </p>
                      <Button className="submit-new-form formButton" onClick={this.addEvictionRow}>
                        <span>YES</span>
                      </Button>
                      <Button className="submit-new-form formButton" onClick={this.setNoEvictions}>
                        <span>NO</span>
                      </Button>
                    </div>
                  ) : (
                      <div>
                        {this.renderEvictionRows()}
                        <Form.Row>
                          <Button variant="link" size="sm" onClick={this.addEvictionRow}>+ Add More Tenancy Termination</Button>
                        </Form.Row>
                      </div>
                    )}
                </div>
              ) : <Col>No eviction data for this unit</Col>}
            </Form.Row>
          </div>
        </Form>
      </React.Fragment>
    )
  }
}));

export default UnitDetailForm
