import WeatherItem from './WeatherItem'
import extractDataFromForecastDay from '../utils/extractDataFromForecastDay';
import '../styles/WeatherList.css';

function WeatherList({ forecast }) {
	return (
		<>
			<h1>Veðurspáin</h1>
			<div className='grid-container'>
				{forecast.map((data) => {
					const props = extractDataFromForecastDay(data);

					return (
					<WeatherItem {...props} key={props.id} />)
				})}
			</div>
		</>
	);
}

export default WeatherList;