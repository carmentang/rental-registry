import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';

export class UnitDetailFormButton extends Component {
  render() {
    return (
      <React.Fragment>
        <Form>
          <div className='buttonWrapper'>
            <div className='buttonGrid'>
              <Button className="submit-new-form  homeButtons buttonColor" onClick={this.props.addAnotherUnit}>
                <span>+ Add Another Unit</span>
              </Button>
            </div>
            <div className='buttonGrid'>
              <Button className="submit-new-form  homeButtons buttonColor" onClick={this.submitForm}>
                <span>Submit Form</span>
              </Button>
            </div>
          </div>
        </Form>
        <br></br>
      </React.Fragment>
    )
  }
}

export default UnitDetailFormButton


