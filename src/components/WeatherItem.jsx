import "../styles/WeatherItem.css";
import getLogoUrl from "../utils/getLogoUrl";

function WeatherItem(props) {
  const {
    id,
    airTemperatureHigh,
    airTemperatureLow,
    dayOfWeek,
    symbol,
    handleSelected,
    selected,
  } = props;

  const DayOfWeek = () => {
    return <div className="day_of_week">{dayOfWeek}</div>;
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
    <div
      className={selected.id === id ? "grid_item selected" : "grid_item"}
      onClick={() => handleSelected(id)}
    >
      <DayOfWeek />
      <Logo />
      <Temps />
    </div>
  );
}

export default WeatherItem;
