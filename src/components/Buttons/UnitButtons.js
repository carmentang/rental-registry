import React, { Component } from 'react';

import { Row, Button } from 'react-bootstrap';

export class UnitDetailFormButton extends Component {
  render() {
    return (
      <React.Fragment>
        <Row style={{ margin: '0 auto', display: 'flex' }}>
          <Button style={{ height: 42, width: 165 }} className="submit-new-form formButtonSubmit" onClick={this.props.addUnit}>
            <span>+ Add Another Unit</span>
          </Button>
        </Row>
        <Row style={{ margin: '0 auto', display: 'flex' }}>
          <Button style={{ height: 42, width: 165 }} className="submit-new-form formButtonSubmit" onClick={this.props.handleSubmit}>
            <span>Submit Form</span>
          </Button>
          <br></br>
        </Row>
      </React.Fragment>
    )
  }
}

export default UnitDetailFormButton


