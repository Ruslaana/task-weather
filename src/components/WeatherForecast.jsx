import React, { useEffect, useState } from 'react';

const BASE_URL = 'https://api.weatherapi.com/v1/forecast.json';
const API_KEY = 'EWQUHM4BL87DA9JZMMS43GGX2';

function WeatherForecast({ city }) {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const fetchWeatherForecast = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}?key=${API_KEY}&q=${city}&days=7`
        );
        const data = await response.json();
        setForecast(data.forecast.forecastday);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherForecast();
  }, [city]);

  if (!forecast) {
    return <div>Loading forecast...</div>;
  }

  return (
    <div>
      <h3>Weather Forecast</h3>
      {forecast.map((day) => (
        <div key={day.date}>
          <h4>{day.date}</h4>
          <p>Condition: {day.day.condition.text}</p>
          <p>Temperature: {day.day.avgtemp_c}°C</p>
        </div>
      ))}
    </div>
  );
}

export default WeatherForecast;
