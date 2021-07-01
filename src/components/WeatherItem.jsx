function WeatherItem({airTemperature, windSpeed, logo}) {
	return (<li>
		<img src="" alt="" />
		<div>
			{airTemperature}
		</div>
		<div>
			{windSpeed}
		</div>
	</li>)
}

export default WeatherItem;