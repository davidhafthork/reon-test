import WeatherItem from './WeatherItem'

function WeatherList({ forecast }) {
	return (
		<>
			<h1>Forecast</h1>
			<ul>
				{forecast.map((data) => {
					// todo: get data properly and send through props
					// todo: find a unique key for each list item
					return (
					<WeatherItem airTemperature={'14.5'} windSpeed={'1.8'} logo={'imgpath'} />)
				})}
			</ul>
		</>
	);
}

export default WeatherList;