import locations from "../locations.js";
import WeatherList from "./WeatherList.jsx";
import "../styles/LocationButton.css";

function Home({ forecast, location, setLocation }) {
  // Updates the current forecast to the appropriate location
  const handleClick = (e, location) => {
    e.preventDefault();
    setLocation(location);
  };

  const Button = ({ location }) => {
    return (
      <button
        className="location_button"
        onClick={(e) => handleClick(e, location)}
      >
        {location.name}
      </button>
    );
  };

  return (
    <>
      {locations.map((location) => (
        <Button location={location} key={location.name} />
      ))}
      <WeatherList forecast={forecast} location={location} />
    </>
  );
}

export default Home;
