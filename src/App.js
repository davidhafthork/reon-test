import { useState, useEffect } from "react";
import forecastByDay from "./utils/forecastByDay.js";
import Home from "./components/Home.jsx";
import locations from "./locations.js";

function App() {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(locations[0]);
  const api_url = `https://api.met.no/weatherapi/locationforecast/2.0/complete.json?lat=${location.lat}&lon=${location.lon}`;

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await fetch(api_url);
        const forecast = await response.json();
        const convertedForecast = forecastByDay(forecast);

        setForecast(convertedForecast);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchForecast();
  }, [api_url]);
  return !loading && forecast ? (
    <Home forecast={forecast} location={location} setLocation={setLocation} />
  ) : (
    <h3>loading...</h3>
  );
}

export default App;
