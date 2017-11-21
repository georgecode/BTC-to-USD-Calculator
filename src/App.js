import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import YearDropDown from './components/yearDropDown/index.js';
import PastPrice from './components/fetchPrice/index.js';
import DateInput from './components/dateInput/index.js';
import DatePicker from './components/datePicker/index.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <PastPrice />
        <DateInput />
        <DatePicker />
      </div>
    );
  }
}

export default App;
