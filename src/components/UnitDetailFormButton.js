import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';

export class UnitDetailFormButton extends Component {
  render() {
    return (
      <React.Fragment>
        <Form>
            {this.props.hasMultipleUnits ? (
              <Form.Row>
                <Button className="submit-new-form formButtonSubmit" onClick={this.props.addAnotherUnit}>
                  <span>+ Add Another Unit</span>
                </Button>
              </Form.Row>
            ) : null}
          <Form.Row>
            <Button className="submit-new-form formButtonSubmit" onClick={this.props.submitForm}>
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


