import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

import { Form, Button, Col, Row } from 'react-bootstrap';

import * as Types from '../types';

const OwnerDetailForm = inject('store')(
  observer(
    class OwnerDetailForm extends Component {
      saveAndContinue = e => {
        e.preventDefault();
        this.props.store.storeOwnerAndPropertyData(this.props.values);
        this.props.nextStep();
      };

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
                  <Form.Control
                    type="text"
                    onChange={this.props.handleChange('firstName')}
                    defaultValue={values.firstName}
                  />
                  <Form.Label>First name</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    onChange={this.props.handleChange('lastName')}
                    defaultValue={values.lastName}
                  />
                  <Form.Label>Last name</Form.Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    as="select"
                    onChange={this.props.handleChange('ownership')}
                    defaultValue={values.ownership}
                  >
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
                  <Form.Control
                    as="select"
                    onChange={this.props.handleChange('acquired')}
                    defaultValue={values.acquired}
                  >
                    <option></option>
                    {Types.yearsList}
                  </Form.Control>
                  <Form.Label>Year of Acquisition</Form.Label>
                </Col>
              </Row>
              <h1>Rental Property Address</h1>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    onChange={this.props.handleChange('street')}
                    defaultValue={values.street}
                  />
                  <Form.Label>Street</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    onChange={this.props.handleChange('city')}
                    defaultValue={values.city}
                  />
                  <Form.Label>City</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    as="select"
                    onChange={this.props.handleChange('state')}
                    defaultValue={values.state}
                  >
                    <option></option>
                    {Types.americanStatesList}
                  </Form.Control>
                  <Form.Label>State</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    onChange={this.props.handleChange('zipcode')}
                    defaultValue={values.zipcode}
                  />
                  <Form.Label>Zipcode</Form.Label>
                </Col>
              </Row>
              <br></br>
              <div className="formSubmitContainer">
                <h4> Does this property have more than one unit?</h4>
                <Button
                  className="submit-new-form formButton"
                  onClick={this.saveAndContinue}
                >
                  <span>YES</span>
                </Button>
                <Button
                  className="submit-new-form formButton"
                  onClick={this.saveAndContinue}
                >
                  <span>NO</span>
                </Button>
              </div>
            </Form>
            <br></br>
          </React.Fragment>
        );
      }
    }
  )
);

export default OwnerDetailForm;
