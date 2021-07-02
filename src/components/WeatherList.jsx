import WeatherItem from './WeatherItem'

function WeatherList({ forecast }) {
	return (
		<>
			<h1>Forecast</h1>
			<ul>
				{forecast.map((data) => {
					// todo: get data properly and send through props
					// todo: find a unique key for each list item
					const airTemperature = data[1][0].data.instant.details.air_temperature;
					const windSpeed = data[1][0].data.instant.details.wind_speed;
					let symbol = '';

					if(data[1][0].data.next_6_hours) {
						symbol = data[1][0].data.next_6_hours.summary.symbol_code;
					}
					const key = `${airTemperature}${windSpeed}${symbol}`;

					return (
					<WeatherItem key={key} airTemperature={airTemperature} windSpeed={windSpeed} symbol={symbol} />)
				})}
			</ul>
		</>
	);
}

export default WeatherList;