import React, { Component } from 'react'
import { Form } from 'react-bootstrap';

export class ReasonForEviction extends Component {
  render() {
    return (
      <React.Fragment>
        <Form>
          <Form.Control type="text" md="6" onChange={this.props.handleChange('reasonForEviction')} disabled="disabled">
          </Form.Control>
          <Form.Label>Reasons for evictions in this unit</Form.Label>
        </Form>
      </React.Fragment>
    )
  }
}

export default ReasonForEviction
