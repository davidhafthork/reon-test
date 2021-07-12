function extractDataFromForecastDay(data) {
	const airTemperatureHigh = data[1][0].data.instant.details.air_temperature_percentile_90;
	const airTemperatureLow = data[1][0].data.instant.details.air_temperature_percentile_10;
	const dayOfWeek = data[1][0].dayOfWeek;
	
	// Possibly move hourly forecast parsing to extractDataFromForecastDay
	const oneHourForecast = data[1].map((day) => {
		const hour = new Date(day.time).getHours();
		const airTemperatureHigh = day.data.instant.details.air_temperature_percentile_90;
		const airTemperatureLow = day.data.instant.details.air_temperature_percentile_10;
		let symbol = '';
		if(day.data.next_1_hours) {
			symbol = data[1][0].data.next_1_hours.summary.symbol_code;
		} else if(day.data.next_6_hours) {
			symbol = data[1][0].data.next_6_hours.summary.symbol_code;
		} else {
			symbol = data[1][0].data.next_12_hours.summary.symbol_code;
		}
		return {
			hour: `${hour}:00`,
			airTemperatureHigh,
			airTemperatureLow,
			symbol
		};
	});
	let symbol = '';

	if(data[1][0].data.next_12_hours) {
		symbol = data[1][0].data.next_12_hours.summary.symbol_code;
	}
	const id = `${airTemperatureHigh}${airTemperatureLow}${symbol}`;

	return {
		id,
		airTemperatureHigh,
		airTemperatureLow,
		dayOfWeek,
		symbol,
		oneHourForecast
	};
}

export default extractDataFromForecastDay;