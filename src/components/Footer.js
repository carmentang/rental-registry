  
import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      year: new Date().getFullYear()
    }
  }

  render() {
    return (
      <footer className="site-link centeredText">
        &copy; {this.state.year} TechEquity Collaborative
      </footer>
    );
  }
}

export default Footer;