import React, { Component } from 'react';

import { Form } from 'react-bootstrap';

export class ReasonsForEviction extends Component {
  render() {
    const { values } = this.props;
    return (
      <React.Fragment>
        <Form>
          <Form.Control type="text" md="6" onChange={this.props.handleUnit('evictionReasons')} defaultValue={values.evictions.}>
          </Form.Control>
          <Form.Label>Reasons for evictions in this unit</Form.Label>
        </Form>
      </React.Fragment>
    )
  }
}

export default ReasonsForEviction
