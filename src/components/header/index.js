import React, { Component } from 'react';
import './style.css';
import BtcCoinSVG from "../../images/btcCoinSVG.js"


class Header extends Component {
  render() {
    return (
      <div className="header">
      	<BtcCoinSVG fill="#ffffff" opasity="0.15" />
       	<h1>Header Component</h1>
      </div>
    );
  }
}

export default Header;