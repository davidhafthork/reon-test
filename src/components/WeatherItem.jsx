import {useState} from 'react';
import '../styles/WeatherItem.css';
import WeatherItemHourly from './WeatherItemHourly';

function WeatherItem(props) {
	const {
		id,
		airTemperatureHigh,
		airTemperatureLow,
		dayOfWeek,
		symbol,
		handleSelected} = props;

	const DayOfWeek = () => {
		return (
			<div className='day_of_week'>
				{dayOfWeek}
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
		<div className='grid_item' onClick = {() => handleSelected(id)}>
			<DayOfWeek />
			<Logo />
			<Temps />
		</div>)
}

export default WeatherItem;