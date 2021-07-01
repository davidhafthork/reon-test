import { useState, useEffect } from 'react'
import WeatherList from './components/WeatherList.jsx'
import forecastByDay from './utils/forecastByDay.js'

function App() {
  const [forecast, setForecast] = useState([])
  const [loading, setLoading] = useState(true)
  const api_url = 'https://api.met.no/weatherapi/locationforecast/2.0/complete.json?lat=64.1275706&lon=21.8963886'

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await fetch(api_url)
        const forecast = await response.json()
				const convertedForecast = forecastByDay(forecast);

        setForecast(convertedForecast)
        setLoading(false)
      } catch (err) {
        console.error(err)
      }
    }
    fetchForecast()
  }, [api_url])
	return (!loading && forecast ? <WeatherList forecast={forecast}/> : <h3>loading...</h3>);
}

export default App;
