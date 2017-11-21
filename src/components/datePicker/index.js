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

//"Tue Aug 17 2010 23:02:23 GMT-0700 (PDT)"
//minDate={this.state.firstDate}

//moment example time input
//2013-02-17 09:30:26
 
class CalendarPicker extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),


    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date,

    });
    	console.log(moment("2010-08-17 23:02:23")._d)
    // console.log(typeof this.state.startDate._d)
  }
 
  render() {
    return( 
    	<div>
    	<h1>Pick your date</h1>
    	<DatePicker
    	fixedHeight
        selected={this.state.startDate}
        onChange={this.handleChange}
        minDate={moment("2010-08-17")}
        maxDate={moment()}
        showMonthDropdown
    	showYearDropdown
    	dropdownMode="select"
    	/>
    	<h1>{this.state.startDate._d.toString()}</h1>
    	<h1>X</h1>
    	</div>
    )
  }
}

export default CalendarPicker







