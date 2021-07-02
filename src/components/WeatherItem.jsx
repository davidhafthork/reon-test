import '../styles/WeatherItem.css';

function WeatherItem({airTemperature, windSpeed, symbol}) {
	return (<li>
		{symbol ? <img src={`${process.env.PUBLIC_URL}/logos/${symbol}.svg`} className="item_logo" alt={symbol} /> : 'mynd ekki til'}
		<div>
			hitastig {airTemperature}
		</div>
		<div>
			vindhraði {windSpeed}
		</div>
	</li>)
}

export default WeatherItem;