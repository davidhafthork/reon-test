import WeatherItemHourly from './WeatherItemHourly';

function WeatherItemHourlyList({oneHourForecast}) {
	return (
		<div className="grid-container-hours">
			{oneHourForecast.map(hourForecast => 
				<WeatherItemHourly {...hourForecast} />)}
		</div>);
}

export default WeatherItemHourlyList;