import React, { Component } from "react";

class Footer extends Component {
  render() {
    return <div>
        <p>copyright {new Date().getFullYear()}</p>
    </div>;
  }
}

export default Footer;
