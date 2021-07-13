function extractDataFromForecastDay(data) {
  // Get the average min and max percentile temperatures for the given day
  const airTemperatureHigh = getAverageTemperatureForDay(data[1], "high");
  const airTemperatureLow = getAverageTemperatureForDay(data[1], "low");
  const dayOfWeek = data[1][0].dayOfWeek;

  const oneHourForecast = extractHourlyDataFromDay(data[1]);
  let symbol = "";

  if (data[1][0].data.next_12_hours) {
    symbol = data[1][0].data.next_12_hours.summary.symbol_code;
  }

  // id is used as a key for rendering the list
  const id = `${dayOfWeek}${airTemperatureHigh}${airTemperatureLow}${symbol}`;

  return {
    id,
    airTemperatureHigh,
    airTemperatureLow,
    dayOfWeek,
    symbol,
    oneHourForecast,
  };
}

function extractHourlyDataFromDay(forecastDayByHours) {
  // Loops through each hour of the given day and returns the view data
  return forecastDayByHours.map((day) => {
    const hour = new Date(day.time).getHours();
    const airTemperatureHigh =
      day.data.instant.details.air_temperature_percentile_90;
    const airTemperatureLow =
      day.data.instant.details.air_temperature_percentile_10;
    let symbol = "";

    // Get the most relevant symbol that exists in the data.
    if (day.data.next_1_hours) {
      symbol = day.data.next_1_hours.summary.symbol_code;
    } else if (day.data.next_6_hours) {
      symbol = day.data.next_6_hours.summary.symbol_code;
    } else {
      symbol = day.data.next_12_hours.summary.symbol_code;
    }
    // id is used as a key for rendering the list
    const id = `${hour}${airTemperatureHigh}${airTemperatureLow}${symbol}`;
    return {
      id,
      hour: `${hour}:00`,
      airTemperatureHigh,
      airTemperatureLow,
      symbol,
    };
  });
}

function getAverageTemperatureForDay(temperatures, percentile) {
  const sum = temperatures.reduce((total, current) => {
    if (percentile === "high") {
      return total + current.data.instant.details.air_temperature_percentile_90;
    }
    return total + current.data.instant.details.air_temperature_percentile_10;
  }, 0);
  const average = sum / temperatures.length;

  // round the average to one decimal point
  return Math.round(average * 10) / 10;
}

export default extractDataFromForecastDay;
