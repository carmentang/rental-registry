import React, { Component } from 'react';

import { Form, Button } from 'react-bootstrap';

export class UnitDetailFormButton extends Component {
  render() {
    return (
      <React.Fragment>
        <Form>
          <Form.Row>
            <Button style={{ height: 42, width: 165 }} className="submit-new-form formButtonSubmit" onClick={this.props.addAnotherUnit}>
              <span>+ Add Another Unit</span>
            </Button>
          </Form.Row>
          <Form.Row>
            <Button style={{ height: 42, width: 165 }} className="submit-new-form formButtonSubmit" onClick={this.submitForm}>
              <span>Submit Form</span>
            </Button>
          </Form.Row>
        </Form>
        <br></br>
      </React.Fragment>
    )
  }
}

export default UnitDetailFormButton


