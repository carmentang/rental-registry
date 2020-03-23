  
import React from 'react';
import { Button } from 'react-bootstrap';
import { Route } from 'react-router-dom';

const NewFormButton = () => (
  <Route render={({ history }) => (
       <Button className="submit-new-form homeButtons buttonColor" onClick={() => { history.push('/form') }}>
        Submit New <br/> Rental Registry Form
      </Button>
  )} />
)

export default NewFormButton;