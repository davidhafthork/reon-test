import WeatherItemHourly from "./WeatherItemHourly";

function WeatherItemHourlyList({ oneHourForecast }) {
  return (
    <div className="grid-container-hours">
      {oneHourForecast.map((hourForecast) => (
        <WeatherItemHourly {...hourForecast} key={hourForecast.id} />
      ))}
    </div>
  );
}

export default WeatherItemHourlyList;
