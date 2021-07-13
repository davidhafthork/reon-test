import { useState, useEffect } from "react";
import WeatherItem from "./WeatherItem";
import WeatherItemHourlyList from "./WeatherItemHourlyList";
import "../styles/WeatherList.css";

function WeatherList({ forecast, location }) {
  const [selected, setSelected] = useState(forecast[0]);

  // If the forecast location has been updated, we need to update the selected day as well
  useEffect(() => {
    const exists = forecast.includes(selected);
    if (!exists) {
      setSelected(forecast[0]);
    }
  }, [forecast, selected]);

  const handleSelected = (id) => {
    let selectedForecast = forecast.find((day) => {
      return day.id === id;
    });
    setSelected(selectedForecast);
  };

  return (
    <>
      <h1>{location.name}</h1>
      <div className="grid-container-days">
        {forecast.map((forecastDay) => {
          return (
            <WeatherItem
              {...forecastDay}
              key={forecastDay.id}
              handleSelected={handleSelected}
              selected={selected}
            />
          );
        })}
      </div>
      <div>
        <WeatherItemHourlyList oneHourForecast={selected.oneHourForecast} />
      </div>
    </>
  );
}

export default WeatherList;
