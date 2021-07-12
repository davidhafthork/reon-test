import capitalize from './capitalize';
import extractDataFromForecastDay from './extractDataFromForecastDay';

function forecastByDay(forecast) {
	forecast.properties.timeseries = forecast.properties.timeseries.map((data) => {
		const day = new Date(data.time).getDate()
		const dayOfWeek = capitalize(new Date(data.time).toLocaleString("is-IS", {
			weekday: "short",
		}).substr(0, 3));
		return {
			...data,
			day,
			dayOfWeek
		}
	});

	const byDay = forecast.properties.timeseries.reduce((acc, value) => {
		// Group initialization
		if (!acc[value.day]) {
			acc[value.day] = [];
		}
	 
		// Grouping
		acc[value.day].push(value);
	 
		return acc;
	}, {});

	let byDayArray  = Object.keys(byDay).map(function(key) {  
		return [Number(key), byDay[key]];  
	});

	// We only want the forecast for the next 7 days including today
	byDayArray = byDayArray.slice(0,7);

	// Only return relevant data from each day.
	return byDayArray.map(data => 
		extractDataFromForecastDay(data)
	);
}
export default forecastByDay