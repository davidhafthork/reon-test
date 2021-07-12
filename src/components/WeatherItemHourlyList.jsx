import WeatherItemHourly from './WeatherItemHourly';

function WeatherItemHourlyList({oneHourForecast}) {
	return (
		<div>
			{oneHourForecast.map(hourForecast => 
				<WeatherItemHourly {...hourForecast} />)}
		</div>);
}

export default WeatherItemHourlyList;