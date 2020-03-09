import React, { Component } from 'react';

import { Form } from 'react-bootstrap';

export class ReasonsForEviction extends Component {
  render() {
    const { values } = this.props;
    return (
      <>
        <Form.Control type="text" md="6" onChange={this.props.handleUnit('evictionReasons')} defaultValue={values.evictionReasons}>
        </Form.Control>
        <Form.Label>Reasons for evictions in this unit</Form.Label>
      </>
    )
  }
}

export default ReasonsForEviction