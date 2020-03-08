import React from 'react';
import { Route } from 'react-router-dom';

import { Button } from 'react-bootstrap';


const AboutButton = () => (
  <Route
    render={({ history }) => (
      <Button style={{height: 52, width: 215}}
        className="submit-new-form formButtonSubmit"
        onClick={() => {
          history.push('/about');
        }}
      >About
      </Button>
    )} // Note: just playing with non-breaking space above...
  />
);

export default AboutButton;
