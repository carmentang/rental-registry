import React, { Component } from 'react';

import { Form, Col, Button } from 'react-bootstrap';

// import ReasonsForEviction from '../containers/ReasonsForEviction';
// import Header from '../components/Header';


import UnitButtons from '../components/Buttons/UnitButtons';

import * as Types from '../types';

export class Unit extends Component {

  state = {
    isBlue: true,
    isRed: false,
    isViolet: false,
  }

  showBlue = () => {
    this.setState({ isBlue: true });
  };

  hideBlue = () => {
    this.setState({ isBlue: false });
  };

  showRed = () => {
    this.setState({ isRed: true });
  };

  hideRed = () => {
    this.setState({ isRed: false });
  };
  showViolet = () => {
    this.setState({ isViolet: true });
  };

  hideViolet = () => {
    this.setState({ isViolet: false });
  };

  warm = () => {
    this.hideBlue();
    this.showRed()
  }

  cool = () => {
    this.hideBlue();
    this.showViolet();
  }

  render() {

    const { values } = this.props;

    return (
      values.units.map(({ val, evictions }, idx) => {
        let unitNumberId = `unitNumber-${idx}`,
          bedroomId = `bedrooms-${idx}`,
          bathroomId = `bathrooms-${idx}`,
          occupancyStatusId = `occupancyStatus-${idx}`,
          occupancyStatusDetailsId = `occupancyStatusDetails-${idx}`,
          monthOccupiedId = `monthOccupied-${idx}`,
          yearOccupiedId = `yearOccupied-${idx}`,
          monthsRentedId = `monthsRented-${idx}`,
          currentJanRentId = `currentJanRent-${idx}`,
          collectedJanUtilId = `collectedJanUtil-${idx}`,
          dateRentChangedId = `dateRentChanged-${idx}`,
          rentChangeAmountId = `rentChangeAmount-${idx}`,
          currentRentAmountId = `currentRentAmount-${idx}`

        return (
          <>
            <div >
              <Form key={idx}
                className="formBody"
                onChange={this.props.handleUnit}
              >
                <h5>Entry #{idx + 1}</h5>
                <h1>Occupancy</h1>
                <Form.Row>
                  <Col>
                    <Form.Control
                      type="text"
                      name={unitNumberId}
                      data-id={idx}
                      id={unitNumberId}
                      values={values.units[idx].unitNumber}
                      className="unit"
                    />
                    <Form.Label>Unit #</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      as="select"
                      name={bedroomId}
                      data-id={idx}
                      id={bedroomId}
                      defaultValue={values.units[idx].bedrooms}
                      className="bedrooms"
                    > <option></option>
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
                    <Form.Control
                      as="select"
                      name={bathroomId}
                      data-id={idx}
                      id={bathroomId}
                      defaultValue={values.units[idx].bathrooms}
                      className="bathrooms"
                    >
                      <option></option>
                      <option>0</option>
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
                    <Form.Control
                      as="select"
                      name={occupancyStatusId}
                      data-id={idx}
                      id={occupancyStatusId}
                      defaultValue={values.units[idx].occupancyStatus}
                      className="occupancyStatus"
                    >
                      <option></option>
                      <option>Manager/Owner unit</option>
                      <option>Occupied</option>
                      <option>Vacant</option>
                      <option>Other</option>
                    </Form.Control>
                    <Form.Label>Occupancy Status</Form.Label>
                  </Col>
                  {values.units[idx].occupancyStatus === 'Other' && (
                    <Col>
                      <Form.Control
                        type="text"
                        name={occupancyStatusDetailsId}
                        data-id={idx}
                        id={occupancyStatusDetailsId}
                        onChange={this.props.handleChange('occupancyStatusDetails')}
                        defaultValue={values.units[idx].occupancyStatusOther}
                        className="occupancyStatusDetails"
                      />
                      <Form.Label>Please describe occupancy status:</Form.Label>
                    </Col>
                  )}
                  <Col>
                    <Form.Control
                      as="select"
                      name={monthOccupiedId}
                      data-id={idx}
                      id={monthOccupiedId}
                      defaultValue={values.units[idx].monthOccupied}
                      className="monthOccupied"
                    >
                      {Types.monthList}
                    </Form.Control>
                    <Form.Label>Start month of occupancy</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      as="select"
                      name={yearOccupiedId}
                      data-id={idx}
                      id={yearOccupiedId}
                      defaultValue={values.units[idx].yearOccupied}
                      className="yearOccupied"
                    >
                      {Types.yearsList}
                    </Form.Control>
                    <Form.Label>Start year of occupancy</Form.Label>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Control
                      as="select"
                      name={monthsRentedId}
                      data-id={idx}
                      id={monthsRentedId}
                      defaultValue={values.units[idx].monthsRented}
                      className="monthsRented"
                    >
                      {Types.monthsRentedList}
                    </Form.Control>
                    <Form.Label># Months occupied last year</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      name={currentJanRentId}
                      data-id={idx}
                      id={currentJanRentId}
                      defaultValue={values.units[idx].currentJanRent}
                      className="currentJanRent"
                    ></Form.Control>
                    <Form.Label>January rent amount for current year</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      name={collectedJanUtilId}
                      data-id={idx}
                      id={collectedJanUtilId}
                      defaultValue={values.units[idx].collectedJanUtil}
                      className="collectedJanUtil"
                    ></Form.Control>
                    <Form.Label>Utility Amount Collected in January</Form.Label>
                  </Col>
                </Form.Row>
                <h1>Rent Increase</h1>
                <Form.Row>
                  <Col>
                    <Form.Control
                      type="date"
                      name={dateRentChangedId}
                      data-id={idx}
                      id={dateRentChangedId}
                      defaultValue={values.units[idx].dateRentChanged}
                      className="dateRentChanged"
                    ></Form.Control>
                    <Form.Label>
                      Date of last effective rent increase/decrease
              </Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      name={rentChangeAmountId}
                      data-id={idx}
                      id={rentChangeAmountId}
                      defaultValue={values.units[idx].rentChangeAmount}
                      className="rentChangeAmount"
                    ></Form.Control>
                    <Form.Label>
                      Rent amount for month prior to rent increase/decrease
              </Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      name={currentRentAmountId}
                      data-id={idx}
                      id={currentRentAmountId}
                      defaultValue={values.units[idx].currentRentAmount}
                      className="currentRentAmount"
                    ></Form.Control>
                    <Form.Label>Rent Amount</Form.Label>
                  </Col>
                </Form.Row>
                {this.state.isBlue && (
                  <div className="formSubmitContainer">
                    <h4> Was there any tenancy termination in this unit in the last calendar year?</h4>
                    <Button
                      className="submit-new-form formButton" onClick={this.warm}>
                      <span>YES</span>
                    </Button>
                    <Button
                      className="submit-new-form formButton" onClick={this.cool}>
                      <span>NO</span>
                    </Button>
                  </div>
                )}
                {this.state.isBlue ? null : (this.state.isRed ? (
                  evictions.map((val, j) => {
                    let numberOfEvictionsId = `numberOfEvictions-${j}`
                    return (
                      <>
                        <Form.Row key={j}>
                          <Col>
                            <Form.Control
                              as="select"
                              name={numberOfEvictionsId}
                              data-id={j}
                              md="4"
                              id={numberOfEvictionsId}
                              defaultValue={evictions[j].numberOfEvictionsId}
                              className="numberOfEvictions"
                            >
                              {Types.evictedTenantsList}
                            </Form.Control>
                            <Form.Label># Evicted tenants last year in this unit</Form.Label>
                          </Col>
                          <Col>
                          </Col>
                        </Form.Row>
                        <UnitButtons
                          handleOwner={this.props.handleOwner}
                          handleSubmit={this.props.handleSubmit}
                          handleUnit={this.props.handleUnit}
                          nextStep={this.props.nextStep}
                          values={values}
                          addUnit={this.props.addUnit}
                        />
                      </>
                    )
                  }
                  )) : this.showViolet ? (<div style={{ margin: '0 auto', display: 'flex' }}>
                    <Button style={{ height: 42, width: 165 }} className="submit-new-form formButtonSubmit" onClick={this.props.handleSubmit}>
                      <span>Submit Form</span>
                    </Button>
                  </div>) : (null))
                }
              </Form>
            </div>
            <br />
          </>
        );
      })
      // end of map
    )
  }
}

export default Unit

