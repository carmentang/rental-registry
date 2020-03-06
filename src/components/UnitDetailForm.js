import React, { Component } from 'react';
import { Form, Col } from 'react-bootstrap';

import ReasonForEviction from './ReasonForEviction';

import * as Types from '../types';

export class UnitDetailForm extends Component {
  render() {
    const { values } = this.props;
    var evictsRows = [];
    if (values.values.numberOfEvictions) {
      var num = Number(this.props.values.values.numberOfEvictions);
      var numOfEvictsRows = new Array(num);

      for (var i = 0; i < numOfEvictsRows.length; i++) {
        evictsRows.push(
          <ReasonForEviction
            handleChange={this.props.handleChange}
            values={this.props}
          />
        );
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
              <Form.Control
                type="text"
                onChange={this.props.handleChange('unitNumber')}
                defaultValue={values.unitNumber}
              />
              <Form.Label>Unit #</Form.Label>
            </Col>
            <Col>
              <Form.Control
                as="select"
                onChange={this.props.handleChange('bedrooms')}
                defaultValue={values.bedrooms}
              >
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
              <Form.Control
                as="select"
                onChange={this.props.handleChange('bathrooms')}
                defaultValue={values.bathrooms}
              >
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
              <Form.Control
                as="select"
                onChange={this.props.handleChange('occupancyStatus')}
                defaultValue={values.occupancyStatus}
              >
                <option></option>
                <option>Manager/Owner unit</option>
                <option>Occupied</option>
                <option>Vacant</option>
                <option>Other</option>
              </Form.Control>
              <Form.Label>Occupancy Status</Form.Label>
            </Col>
            {values.values.occupancyStatus === 'Other' && (
              <Col>
                <Form.Control
                  type="text"
                  onChange={this.props.handleChange('occupancyStatusDetails')}
                  defaultValue={values.occupancyStatusOther}
                />
                <Form.Label>Please describe occupancy status:</Form.Label>
              </Col>
            )}
            <Col>
              <Form.Control
                as="select"
                onChange={this.props.handleChange('monthOccupied')}
                defaultValue={values.monthOccupied}
              >
                {Types.monthList}
              </Form.Control>
              <Form.Label>Start month of occupancy</Form.Label>
            </Col>
            <Col>
              <Form.Control
                as="select"
                onChange={this.props.handleChange('yearOccupied')}
                defaultValue={values.yearOccupied}
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
                onChange={this.props.handleChange('monthsRented')}
                defaultValue={values.monthsRented}
              >
                {Types.monthsRentedList}
              </Form.Control>
              <Form.Label># Months occupied last year</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="text"
                onChange={this.props.handleChange('previousJanRent')}
                defaultValue={values.previousJanRent}
              ></Form.Control>
              <Form.Label>January rent amount for current year</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="text"
                onChange={this.props.handleChange('collectedJanUtil')}
                defaultValue={values.collectedJanUtil}
              ></Form.Control>
              <Form.Label>Utility Amount Collected in January</Form.Label>
            </Col>
          </Form.Row>
          <h1>Rent Increase</h1>
          <Form.Row>
            <Col>
              <Form.Control
                type="date"
                onChange={this.props.handleChange('dateRentChanged')}
                defaultValue={values.dateRentChanged}
              ></Form.Control>
              <Form.Label>
                Date of last effective rent increase/decrease
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                as="select"
                onChange={this.props.handleChange('rentChangeAmount')}
                defaultValue={values.rentChangeAmount}
              ></Form.Control>
              <Form.Label>
                Rent amount for month prior to rent increase/decrease
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="text"
                onChange={this.props.handleChange('currentRentAmount')}
                defaultValue={values.currentRentAmount}
              ></Form.Control>
              <Form.Label>Rent Amount</Form.Label>
            </Col>
          </Form.Row>
          <h1>Evictions</h1>
          <Form.Row>
            <Col>
              <Form.Control
                as="select"
                md="4"
                value={this.props.numberOfEvictions}
                onChange={this.props.handleChange('numberOfEvictions')}
              >
                {Types.evictedTenantsList}
              </Form.Control>
              <Form.Label># Evicted tenants last year in this unit</Form.Label>
            </Col>
            <Col>{evictsRows}</Col>
          </Form.Row>
        </Form>
      </React.Fragment>
    );
  }
}

export default UnitDetailForm;
