import React, { Component } from 'react';

class DateInput extends Component{
 constructor(props) {
    super(props);
    this.state = {buyDate: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({buyDate: event.target.value});
  }

  handleSubmit(event) {
    alert('buyDate was submitted: ' + this.state.buyDate);
    event.preventDefault();
  }

  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.buyDate} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <h1>Buy Date : {this.state.buyDate}</h1>
     </div> 
    );
  }

}//End DateInput

export default DateInput









