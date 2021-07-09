function extractDataFromForecastDay(data) {
	const airTemperatureHigh = data[1][0].data.instant.details.air_temperature_percentile_90;
	const airTemperatureLow = data[1][0].data.instant.details.air_temperature_percentile_10;
	const dayOfWeek = data[1][0].dayOfWeek;
	let symbol = '';

	if(data[1][0].data.next_6_hours) {
		symbol = data[1][0].data.next_6_hours.summary.symbol_code;
	}
	const id = `${airTemperatureHigh}${airTemperatureLow}${symbol}`;

	return {
		id,
		airTemperatureHigh,
		airTemperatureLow,
		dayOfWeek,
		symbol
	};
}

export default extractDataFromForecastDay;