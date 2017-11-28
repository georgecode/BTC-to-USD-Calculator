// import React, { Component } from 'react';

//console.log("Helllllooooo")



const FetchPrice = (date) => {
	const proxyurl = "https://cors-anywhere.herokuapp.com/"
	//const url ='https://blockchain.info/charts/market-price?timespan=1days&start=2016-01-01&format=json'
	let url =`https://blockchain.info/charts/market-price?timespan=1days&start=${date}&format=json`


	return fetch(proxyurl + url)
	.then(results =>{
		return results.json();
	}).then(data => {
		//let price = data.values[0].y 

		return data.values[0].y  

		//this.setState({price: price});
		//console.log(price)
		//return price
		// console.log(this.state.price)
		// console.log(`hello ${date} is todays date`)
	}).catch()


}//END FetchPrice

// FetchPrice("2017-08-24").then

//FetchPrice("2017-08-24")


// console.log(FetchPrice("2017-08-24").then(value =>{
// 	return value
// }))

// const FetchPrice = () =>{
// 	Promise.resolve(FetchPromise()).then(value => {
// 		return value
// 	})
// }


// console.log(FetchPromise().resolved)
export default FetchPrice;












