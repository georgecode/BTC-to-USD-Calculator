import React, { Component } from 'react';
// import './App.css';
import CalendarPicker from './components/datePicker/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CalendarPicker />
      </div>
    );
  }
}

export default App;