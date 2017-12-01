import React, { Component } from 'react';
// import './App.css';
import CalendarPicker from './components/datePicker/index.js';

import BtcCoinSVG from "./images/btcCoinSVG.js"
import Header from "./components/header/index.js"
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Header />
       
        <BtcCoinSVG svgClass="btcCoin" width="100" fill="#FFBF80" opasity="0.95" />
        <div className="calculator">
          <CalendarPicker />
        </div>
        <BtcCoinSVG  svgClass="btcCoin big" width="900" fill="#FFBF80" opasity="0.4"/>
        
      </div>
    );
  }
}

export default App;
