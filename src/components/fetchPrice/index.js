import React, { Component } from 'react';

class PastPrice extends Component{
	constructor() {
		super();
		this.state ={
			price:[],
		};
	}

//How to fix cors preflight	
//https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
componentDidMount(){
	fetch('https://blockchain.info/charts/market-price?timespan=1days&start=2016-01-01&format=json')
	.then(results =>{
		return results.json();
	}).then(data => {
		let price = data.results.unit 

		this.setState({price: price});
		console.log(this.state.price)
	})//End data
	// this.setState({price: price});
	// console.log(this.state.price)
}//End componentDidMount


render(){
	return(
		<div>
		<h1>TEST FETCH</h1>
		</div>
		)
}




}//End PastPrice

export default PastPrice