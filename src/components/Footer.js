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
  padding: '10px',
  height: '35px',
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
    console.log("Render Footer")
    
    return (
      <div style={{ ...sticky, ...phantom }}>
        <footer className="site-link centeredText">
          &copy; {this.state.year} TechEquity Collaborative
      </footer>
      </div>
    );
  }
}

export default Footer;