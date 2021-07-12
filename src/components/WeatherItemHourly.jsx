function WeatherItemHourly({hour, airTemperatureHigh, airTemperatureLow, symbol}) {
	return ( 
		<div>
			{hour} {airTemperatureHigh} {airTemperatureLow} {symbol}
		</div>);
}

export default WeatherItemHourly;