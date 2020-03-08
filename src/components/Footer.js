import React, { Component } from 'react';

let sticky = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
}

let phantom = {
  display: 'block',
  padding: '8px',
  height: '28px',
  width: '100%',
}


class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      year: new Date().getFullYear()
    }
  }
  render() {
    return (
      <div style={{ ...sticky, ...phantom }}>
        <footer>
          &copy; {this.state.year} TechEquity Collaborative
      </footer>
      </div>
    );
  }
}

export default Footer;
