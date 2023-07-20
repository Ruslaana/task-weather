import React, { useEffect, useState } from 'react';
import { fetchWeatherForecast } from '../services/Api';

function WeatherForecast({ city }) {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const getWeatherForecast = async () => {
      const mergedData = await fetchWeatherForecast(city);
      setForecast(mergedData);
    };

    getWeatherForecast();
  }, [city]);

  if (!forecast) {
    return <div>Loading forecast...</div>;
  }

  return (
    <div>
      <h3>Weather Forecast</h3>
      <input type="text" placeholder="Search your trip" /> 
      <button type='submit '>Search</button>    
      {forecast.map((day) => (
        <div key={day.date}>
          <h4>{day.date}</h4>
          <p>City: {city}</p>
          <p>Condition: {day.conditions}</p>
          <p>Temperature: {day.temp}</p>
        </div>
      ))}
    </div>
  );
}

export default WeatherForecast;
