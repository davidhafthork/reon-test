function WeatherItemHourly({hour, airTemperatureHigh, airTemperatureLow, symbol}) {
	const Hour = () => {
		return (
			<div className='day_of_week'>
				{hour}
			</div>
		)};

	const Logo = () => {
		return (
			<>
				{symbol ? <img src={`${process.env.PUBLIC_URL}/logos/${symbol}.svg`} className="item_logo" alt={symbol} /> : 'mynd ekki til'}
			</>
		)};

	const Temps = () => {
		return (
			<div className='temps'>
				<span>{airTemperatureHigh}&#176;</span> <span className='low_temp'>{airTemperatureLow}&#176;</span>
			</div>
		)
	}

	return (
		<div className='grid_item'>
			<Hour />
			<Logo />
			<Temps />
		</div>)
}

export default WeatherItemHourly;