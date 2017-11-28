import React, { Component } from 'react';
import FetchPrice from '../helpers/fetchPrice.js'

class MoneyInput extends Component{
 constructor(props) {
    super(props);
    this.state = {
    	inputPrice: 0,
    	numBTC:0,
    	usdValue:0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({inputPrice: event.target.value});
  }

  handleSubmit(event) {
    //alert('inputPrice was submitted: ' + this.state.inputPrice +"   "+this.props.startDate);
    //let numBTC = this.props.startDate
    // this.setState({numBTC: 5});
    FetchPrice(this.props.startDate)
    // .then(xvalue =>{this.state.inputPrice / xvalue})
    .then(value =>{
    	this.setState({
    		numBTC: (this.state.inputPrice / value),
    		usdValue:(this.state.inputPrice / value)*this.props.todaysPrice,

    	})
    })
    event.preventDefault();
  }

//*this.props.todaysPrice

  render() {
    return (
    <div>
    <h1>#####################</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          Price:
          <input type="number" min="0.07" step="0.01" value={this.state.inputPrice} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h1>PriceDate: {this.props.startDate}</h1>
      <h1>BTC: {this.state.numBTC}</h1>
      <h1>USD value: {this.state.usdValue} </h1>
      <h1>Todays Price: {this.props.todaysPrice}</h1>
     <h1>#####################</h1>
     </div> 
    );
  }

}//End DateInput

export default MoneyInput