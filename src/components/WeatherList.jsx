import {useState} from 'react';
import WeatherItem from './WeatherItem';
import WeatherItemHourlyList from './WeatherItemHourlyList';
import '../styles/WeatherList.css';

function WeatherList({forecast}) {
	const [selected, setSelected] = useState(forecast[0]);

	const handleSelected = id => {
		const selectedForecast = forecast.find(day => {
			return day.id === id;
		});
		setSelected(selectedForecast);
	};

	return (
		<>
			<h1>Veðurspáin</h1>
			<div className='grid-container-days'>
				{forecast.map((forecastDay) => {
					return (
							<WeatherItem {...forecastDay} key={forecastDay.id} handleSelected={handleSelected} selected={selected} />
					)
				})}
			</div>
			<div>
				<WeatherItemHourlyList oneHourForecast={selected.oneHourForecast} />
			</div>
		</>
	);
}

export default WeatherList;