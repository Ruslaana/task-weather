import React, { useEffect, useState } from 'react';
import { fetchWeatherForecast } from '../services/Api';

function WeatherForecast({ city }) {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const getWeatherForecast = async () => {
      const mergedData = await fetchWeatherForecast(city);
      setForecast(mergedData);
      // console.log(mergedData)
    };

    getWeatherForecast();
  }, [city]);

  if (!forecast) {
    return <div>Loading forecast...</div>;
  }

  return (
    <div>
      <h3>Weather Forecast</h3>   
      {forecast.map((day) => (
        <div>
          <h4>City: {city}</h4>
          <p>Day: {day.datetime}</p>
          <p>Condition: {day.conditions}</p>
          <p>Temperature: {day.temp}</p>
        </div>
      ))}
    </div>
  );
}

export default WeatherForecast;
