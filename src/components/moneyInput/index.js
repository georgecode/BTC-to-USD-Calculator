import React, { Component } from 'react';
import FetchPrice from '../helpers/fetchPrice.js'

class MoneyInput extends Component{
 constructor(props) {
    super(props);
    this.state = {
    	inputPrice: 0,
    	numBTC:0,
    	usdValue:0,
    	pastPrice:0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({inputPrice: event.target.value});
  }

  handleSubmit(event) {
    FetchPrice(this.props.startDate)
    .then(value =>{
    	this.setState({
    		pastPrice: (value),
    		numBTC: (this.state.inputPrice / value),
    		usdValue:(this.state.inputPrice / value) * this.props.todaysPrice,
    	})
    })
    event.preventDefault();
  }


  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Amount:
          <input type="number" min="0.01" step="0.01" value={this.state.inputPrice} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <h1>Value Today ${this.state.usdValue.toLocaleString("currency")}</h1>

      <ul>
	      <li>Buy Date BTC value ${this.state.pastPrice} </li>
	      <li>BTC: {this.state.numBTC}</li>
	      <li>1 BTC ~ ${this.props.todaysPrice.toLocaleString("currency")}</li>
      </ul>

     </div> 
    );
  }

}//End DateInput

export default MoneyInput