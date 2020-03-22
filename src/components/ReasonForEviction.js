import React, { Component } from 'react'
import { Form, Col } from 'react-bootstrap';
import {monthList} from "../constants";

export class ReasonForEviction extends Component {
  render() {
    return (
      <React.Fragment>
        <Form>
          <Form.Row>
            <Col>
              <Form.Control as="select" onChange={this.props.handleChange(`unit-${this.props.unitIndex}-eviction-${this.props.evictionIndex}-month`)}>
                {monthList}
              </Form.Control>
              <Form.Label>Month of tenancy termination</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" md="6" onChange={this.props.handleChange(`unit-${this.props.unitIndex}-eviction-${this.props.evictionIndex}-reason`)}>
              </Form.Control>
              <Form.Label>Reason for tenancy termination</Form.Label>
            </Col>
          </Form.Row>
        </Form>
      </React.Fragment>
    )
  }
}

export default ReasonForEviction
