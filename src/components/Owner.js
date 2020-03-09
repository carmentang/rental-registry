import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

import { Form, Button, Col, Row } from 'react-bootstrap';

import * as Types from '../types';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Unit from '../components/Unit';
import UnitButtons from '../components/Buttons/UnitButtons';

const Owner = inject('store')(
  observer(
    class Owner extends Component {
      saveAndContinue = e => {
        e.preventDefault();
        this.props.store.storeOwnerAndPropertyData(this.props.values);
        this.props.nextStep();
      };

      state = {
        isActive: true
      };

      handleShow = () => {
        this.setState({ isActive: true });
      };

      handleHide = () => {
        this.setState({ isActive: false });
      };

      render() {
        const { values } = this.props;

        return (
          <React.Fragment>
            <Header />
            {this.state.isActive && (
              <Form className="formBody">
                <h1 className="formHeader">Submit New Rental Registry Form</h1>
                <hr />
                <h1>Owner</h1>
                <Row>
                  <Col>
                    <Form.Control
                      type="text"
                      onChange={this.props.handleOwner('firstName')}
                      defaultValue={values.firstName}
                    />
                    <Form.Label>First name</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      onChange={this.props.handleOwner('lastName')}
                      defaultValue={values.lastName}
                    />
                    <Form.Label>Last name</Form.Label>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Control
                      as="select"
                      onChange={this.props.handleOwner('ownership')}
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
                      onChange={this.props.handleOwner('acquired')}
                      defaultValue={values.acquired}
                    >
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
                      onChange={this.props.handleOwner('street')}
                      defaultValue={values.street}
                    />
                    <Form.Label>Street</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      onChange={this.props.handleOwner('city')}
                      defaultValue={values.city}
                    />
                    <Form.Label>City</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      as="select"
                      onChange={this.props.handleOwner('amState')}
                      defaultValue={values.amState}
                    >
                      {Types.americanStatesList}
                    </Form.Control>
                    <Form.Label>State</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      onChange={this.props.handleOwner('zipcode')}
                      defaultValue={values.zipcode}
                    />
                    <Form.Label>Zipcode</Form.Label>
                  </Col>
                </Row>
                <br></br>
              </Form>
            )}
            {this.state.isActive ? (
              <div className="formSubmitContainer">
                <h4> Does this property have more than one unit?</h4>
                <Button
                  className="submit-new-form formButton"
                  onClick={this.handleHide}
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
            ) : (
                <>
                  <Unit
                    handleOwner={this.props.handleOwner}
                    addEviction={this.addEviction}
                    addUnit={this.props.addUnit}
                    handleSubmit={this.props.handleSubmit}
                    handleUnit={this.props.handleUnit}
                    nextStep={this.props.nextStep}
                    values={values}
                  />
                </>
              )}
            <br></br>
            <Footer />
          </React.Fragment>
        );
      }
    }
  )
);

export default Owner;
