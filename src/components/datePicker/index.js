// import React, { Component } from 'react';

// class DatePicker extends Component{
// 	render(){
// 		return(
// 			<h1>DatePicker </h1>
// 			)
// 	}
// }

// export default DatePicker



//API doc's
//https://hacker0x01.github.io/react-datepicker/
//https://github.com/Hacker0x01/react-datepicker/blob/master/docs/datepicker.md

import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "./style.css"
 
import 'react-datepicker/dist/react-datepicker.css';
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class CalendarPicker extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      pickedDate: ""

    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });

    console.log(this.state.startDate._d)
  }
 
  render() {
    return( 
    	<div>
    	<h1>Pick your date</h1>
    	<DatePicker
    	fixedHeight
        selected={this.state.startDate}
        onChange={this.handleChange}
        maxDate={moment()}
        showMonthDropdown
    	showYearDropdown
    	dropdownMode="select"
    	/>
    	<h1>X</h1>
    	<h1>X</h1>
    	</div>
    )
  }
}

export default CalendarPicker







