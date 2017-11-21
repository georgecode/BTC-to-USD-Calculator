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
	const proxyurl = "https://cors-anywhere.herokuapp.com/"
	const url ='https://blockchain.info/charts/market-price?timespan=1days&start=2016-01-01&format=json'
	fetch(proxyurl + url)
	.then(results =>{
		return results.json();
	}).then(data => {
		let price = data.values[0].y 

		this.setState({price: price});
		console.log(data.values[0].y)
		console.log(this.state.price)
	}).catch()

}//End componentDidMount


render(){
	return(
		<div>
		<h1>SPACE</h1>
		<h1>SPACE</h1>
		<h1>SPACE</h1>
		<h1>SPACE</h1>
		<h1>SPACE</h1>
		<h1>BTC Price</h1>
		<h1>{this.state.price}</h1>
		</div>
		)
}




}//End PastPrice

export default PastPrice










