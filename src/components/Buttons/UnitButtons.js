import React, { Component } from 'react';

import { Form, Button } from 'react-bootstrap';

export class UnitDetailFormButton extends Component {
  render() {
    return (
      <React.Fragment>
        <Form>
          <Form.Row>
            <Button style={{ height: 42, width: 165 }} className="submit-new-form formButtonSubmit" onClick={this.props.addUnit}>
              <span>+ Add Another Unit</span>
            </Button>
            <Button style={{ height: 42, width: 165 }} className="submit-new-form formButtonSubmit" onClick={this.props.handleSubmit}>
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


