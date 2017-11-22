import React, { Component } from 'react';

import FetchPrice from '../helpers/fetchPrice.js';

class PastPrice extends Component{

	constructor(props) {
		super();
		this.state ={
			price:[],


		};
	}

//How to fix cors preflight	
//https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe

//date format
//YYYY-MM-DD

//BTC First Date 2010-08-17





componentDidMount(){
	const proxyurl = "https://cors-anywhere.herokuapp.com/"
	//const url ='https://blockchain.info/charts/market-price?timespan=1days&start=2016-01-01&format=json'
	let url =`https://blockchain.info/charts/market-price?timespan=1days&start=${this.props.date}&format=json`
	fetch(proxyurl + url)
	.then(results =>{
		return results.json();
	}).then(data => {
		let price = data.values[0].y 

		this.setState({price: price});
		console.log(data.values[0].y)
		console.log(this.state.price)
		console.log(`hello ${this.props.date} is todays date`)
	}).catch()

}//End componentDidMount






// componentDidMount(){
// 	FetchPrice()
// }//End componentDidMount










componentWillReceiveProps(){
	const proxyurl = "https://cors-anywhere.herokuapp.com/"
	//const url ='https://blockchain.info/charts/market-price?timespan=1days&start=2016-01-01&format=json'
	let url =`https://blockchain.info/charts/market-price?timespan=1days&start=${this.props.date}&format=json`
	fetch(proxyurl + url)
	.then(results =>{
		return results.json();
	}).then(data => {
		let price = data.values[0].y 

		this.setState({price: price});
		console.log(data.values[0].y)
		console.log(this.state.price)
		console.log(`hello ${this.props.date} is todays date`)
	}).catch()
}


render(){
	return(
		<div>		
		<h1>Price: {this.state.price}</h1>
		<h1>Date from props: {this.props.date}</h1>
		</div>
		)
}




}//End PastPrice

export default PastPrice










