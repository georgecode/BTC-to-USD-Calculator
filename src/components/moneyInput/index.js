import React, { Component } from 'react';
import FetchPrice from '../helpers/fetchPrice.js'
import "./style.css"
import ReactGA from 'react-ga';
ReactGA.initialize('UA-112754902-1');


//GA ID
// UA-112754902-1

class MoneyInput extends Component{
 constructor(props) {
    super(props);
    this.state = {
    	inputPrice:"",
    	numBTC:0,
    	usdValue:0,
    	pastPrice:0,
      calculateBtn:"calculateBtn"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({inputPrice: event.target.value});
  }

  handleSubmit(event) {

    this.setState({calculateBtn:"calculateBtn animate"});

    //Google Analytics
    ReactGA.event({
      category: 'Calculations',
      action: 'Calculated a value',
      });

    FetchPrice(this.props.startDate)
    .then(value =>{


      // TIME OUT START
      setTimeout(function(){
      // TIME OUT START


    	this.setState({
    		pastPrice: (value),
    		numBTC: (this.state.inputPrice / value),
    		usdValue:(this.state.inputPrice / value) * this.props.todaysPrice,
        calculateBtn:"calculateBtn"
    	})


      // TIME OUT END
    }.bind(this), 500);
       // TIME OUT END


    })
    event.preventDefault();
  }


  render() {
    return (
    <div className="moneyInput">
      Amount:
      <form onSubmit={this.handleSubmit}>
        <label>
          <div className="currency">
          <span className="usdIcon">$</span>
          <input className="amountField" type="number" min="0.01" step="0.01" value={this.state.inputPrice} onChange={this.handleChange} />
          </div>
        </label>
        <input className={this.state.calculateBtn} type="submit" value="Calculate" />
      </form>

      <h1 className="TodaysValue">
        Value Today 
        <span>${this.state.usdValue.toLocaleString("currency")}</span>
      </h1>

      <ul className="extraData">
	      <li>Buy Date 1 BTC ~ ${this.state.pastPrice} </li>
	      <li>Number of BTC: {this.state.numBTC}</li>
	      <li>Today 1 BTC ~ ${this.props.todaysPrice.toLocaleString("currency")}</li>
      </ul>

     </div> 
    );
  }

}//End DateInput

export default MoneyInput