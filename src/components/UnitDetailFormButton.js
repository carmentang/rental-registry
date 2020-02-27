import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';

export class UnitDetailFormButton extends Component {

  render() {
    return (
      <React.Fragment>
        <Form>
          <div className="formSubmitContainer">
            <Button className="submit-new-form formButton" onClick={this.props.addRow}>
              <span>YES</span>
            </Button>
          </div>
        </Form>
        <br></br>
      </React.Fragment>
    )
  }
}

export default UnitDetailFormButton


