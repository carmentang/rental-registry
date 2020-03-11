import React from 'react';
import { Button } from 'react-bootstrap';

import { Route } from 'react-router-dom';

const AboutButton = () => (
  <Route
    render={({ history }) => (
      <Button
        className="submit-new-form homeButtons buttonColor"
        onClick={() => {
          history.push('/about');
        }}
      >
        <span>About</span>
      </Button>
    )}
  />
);

export default AboutButton;