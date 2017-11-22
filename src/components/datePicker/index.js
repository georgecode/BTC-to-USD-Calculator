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

import PastPrice from '../fetchPrice/index.js';

import "./style.css"
 
import 'react-datepicker/dist/react-datepicker.css';


import FetchPrice from '../helpers/fetchPrice.js'

 
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
      startDate: moment("2010-08-17 23:02:23"),
      price:"",

    };
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date,

    });

    	console.log(this.state.startDate._d)
    	//console.log(moment("2010-08-17 23:02:23").format().slice(0,10))
    	// console.log(Promise.resolve(FetchPrice()))
    // console.log(typeof this.state.startDate._d)
  }


  onClick(){
  	let date = this.state.startDate.format().slice(0,10)
  	console.log(date)
  	// FetchPrice(date).then(price =>{
  	// 	console.log(price)
  	// });
  	   // FetchPrice(date).then(function(result) {
      //   console.log(result);
    // });

//console.log(FetchPrice("2017-08-24").then(value =>{return value}))
//FetchPrice("2017-08-24").then(value =>{console.log(value)})
//FetchPrice("2017-08-24").then(value =>{this.setState({price: value,})})

FetchPrice(this.state.startDate.format().slice(0,10)).then(value =>{this.setState({price: value,})})

//this.setState({price: value,})

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
    	<PastPrice date={this.state.startDate.format().slice(0,10)} />
    	<button onClick={this.onClick}>Get Price</button>
    	<h1>This.state.price = {this.state.price}</h1>
    	</div>
    )
  }
}

export default CalendarPicker



//<PastPrice words="george" date={this.state.startDate.format().slice(0,10)} />



