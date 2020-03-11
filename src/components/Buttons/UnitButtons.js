import React, { Component } from 'react';

import { Button } from 'react-bootstrap';

export class UnitButton extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='buttonWrapper'>
          <div className='buttonGrid'>
            <Button className="submit-new-form  homeButtons buttonColor" onClick={this.props.addUnit}>
              <span>+ Add Another Unit</span>
            </Button>
          </div>
          <div className='buttonGrid'>
            <Button className="submit-new-form  homeButtons buttonColor" onClick={this.props.handleSubmit}>
              <span>Submit Form</span>
            </Button>
            <br></br>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default UnitButton


