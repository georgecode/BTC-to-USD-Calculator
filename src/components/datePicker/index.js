//API doc's

//React Datepicker
//https://hacker0x01.github.io/react-datepicker/
//https://github.com/Hacker0x01/react-datepicker/blob/master/docs/datepicker.md
//https://www.npmjs.com/package/react-datepicker

//Moment.js
//https://momentjs.com/
//https://momentjs.com/docs/#/parsing/

//Moment examplt date time output
//"Tue Aug 17 2010 23:02:23 GMT-0700 (PDT)"

//Moment example time input
//2013-02-17 09:30:26

import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "./style.css" 
import 'react-datepicker/dist/react-datepicker.css';
import FetchPrice from '../helpers/fetchPrice.js'
import MoneyInput from '../moneyInput/index.js'

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';


 
class CalendarPicker extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment("2010-08-17 23:02:23"),
      //Api is supose to update every 30min but its often anlmost 24hrs off
      //subtracting one day prevents errors
      todaysPrice: moment().subtract(1, "days").format().slice(0,10),
    };

    this.handleChange = this.handleChange.bind(this);

  }


  componentDidMount(){
  	FetchPrice(moment().subtract(1, "days").format().slice(0,10))
  	.then(value =>{
  		this.setState({
  			todaysPrice: value,
  		})
  	})
  }

 
  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  render() {
    return( 
    	<div>
	    	<span className="buy-date">Buy Date :</span>

	    	<DatePicker
	    	fixedHeight
	        selected={this.state.startDate}
	        onChange={this.handleChange}
	        minDate={moment("2010-08-17")}
	        maxDate={moment()}
	        showMonthDropdown
	    	showYearDropdown
	    	dropdownMode="select"
	    	className="xdate-picker"
	    	/>

	    	<MoneyInput 
	    	todaysPrice={this.state.todaysPrice} 
	    	startDate={this.state.startDate.format().slice(0,10)} 
	    	/>
	    	
    	</div>
    )
  }
}

export default CalendarPicker



