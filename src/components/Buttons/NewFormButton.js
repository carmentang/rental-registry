import React from 'react';
import { Route } from 'react-router-dom';

import { Button } from 'react-bootstrap';


const NewFormButton = () => (
  <Route render={({ history }) => (
    <Button style={{ height: 62, width: 215 }} className="submit-new-form formButtonSubmit" onClick={() => { history.push('/form') }}>
      <span>Submit New</span>
      <span>Rental Registry Form</span>
    </Button>
  )} />
)

export default NewFormButton;
