import React, { Component } from 'react';
import './style.css';
import BtcCoinSVG from "../../images/btcCoinSVG.js"


class Header extends Component {
  render() {
    return (
      <div className="header">
      	<BtcCoinSVG svgClass="btc" width="50" fill="#f5922f" opasity="1" />
       	<h1 className="bitcoin">bitcoin</h1> 
       	<h1 className="millionaire">You could have been a millionaire</h1>
      </div>
    );
  }
}

export default Header;

