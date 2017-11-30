import React, { Component } from 'react';
import './App.css';
import CalendarPicker from './components/datePicker/index.js';

import BtcCoinSVG from "./images/btcCoinSVG.js"

class App extends Component {
  render() {
    return (

      <div className="App">

        <BtcCoinSVG svgClass="btcCoin" width="100" fill="#FFBF80" opasity="0.8" />
        <CalendarPicker />
        <BtcCoinSVG  svgClass="btcCoin big" width="900" fill="#FFBF80" opasity="0.1"/>
      </div>
    );
  }
}

export default App;
