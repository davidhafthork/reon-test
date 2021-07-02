
function forecastByDay(forecast) {
	forecast.properties.timeseries = forecast.properties.timeseries.map((data) => {
		const day = new Date(data.time).getDate()
		return {
			...data,
			day
		}
	});

	const forecastByDay = forecast.properties.timeseries.reduce((acc, value) => {
		// Group initialization
		if (!acc[value.day]) {
			acc[value.day] = [];
		}
	 
		// Grouping
		acc[value.day].push(value);
	 
		return acc;
	}, {});

	let forecastByDayArray  = Object.keys(forecastByDay).map(function(key) {  
		return [Number(key), forecastByDay[key]];  
	});
	
	// We only want the forecast for the next 7 days including today
	return forecastByDayArray.slice(0,7);
}
export default forecastByDay