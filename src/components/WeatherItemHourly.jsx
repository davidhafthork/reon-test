import getLogoUrl from "../utils/getLogoUrl";

function WeatherItemHourly({
  hour,
  airTemperatureHigh,
  airTemperatureLow,
  symbol,
}) {
  const Hour = () => {
    return <div className="hour_of_day">{hour}</div>;
  };

  const Logo = () => {
    return (
      <>
        {symbol ? (
          <img src={getLogoUrl(symbol)} className="item_logo" alt={symbol} />
        ) : (
          "mynd ekki til"
        )}
      </>
    );
  };

  const Temps = () => {
    return (
      <div className="temps">
        <span>{airTemperatureHigh}&#176;</span>{" "}
        <span className="low_temp">{airTemperatureLow}&#176;</span>
      </div>
    );
  };

  return (
    <div className="grid_item">
      <Hour />
      <Logo />
      <Temps />
    </div>
  );
}

export default WeatherItemHourly;
