import React, { Component } from 'react';
import './App.css';
import btcCoin from './images/btcCoin.svg';
import CalendarPicker from './components/datePicker/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={btcCoin} className="btcCoin small" alt="bitcoin" />
        <CalendarPicker />
        <img src={btcCoin} className="btcCoin med" alt="bitcoin" />
        <img src={btcCoin} className="btcCoin large" alt="bitcoin" />
      </div>
    );
  }
}

export default App;


// import logo from './logo.svg';

//<img src={logo} className="App-logo" alt="logo" />