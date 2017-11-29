
//blockchain.info API
//Example URL
//https://blockchain.info/charts/market-price?timespan=1days&start=2017-11-21&format=json
//date format
//YYYY-MM-DD
//blockchain.info's First BTC Date 2010-08-17


//How to fix cors preflight	issue
//https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe


const FetchPrice = (date) => {
	const proxyurl = "https://cors-anywhere.herokuapp.com/"
	//const url ='https://blockchain.info/charts/market-price?timespan=1days&start=2016-01-01&format=json'
	let url =`https://blockchain.info/charts/market-price?timespan=1days&start=${date}&format=json`

	return fetch(proxyurl + url)
	.then(results =>{
		return results.json();
	}).then(data => {
		return data.values[0].y  
	}).catch()

}

export default FetchPrice;












