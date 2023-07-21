import React, { useEffect, useState } from 'react';
import { fetchWeatherForecast } from '../services/Api';
import Loader from '../components/Loader/Loader';

function WeatherForecast({ city }) {
  const [forecast, setForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!city) return

    const getWeatherForecast = async (city) => {
      try {
        setIsLoading(true);
        const mergedData = await fetchWeatherForecast(city);
        mergedData.shift();
        setForecast(mergedData);
        } catch (error) {
          console.log(error)
      } finally {
        setIsLoading(false);
      }
    }
    getWeatherForecast(city);
  }, [city]);

  return (
    <div>
    {isLoading && <Loader />}
      <h3>Week</h3>   
      {forecast?.length > 0 && forecast.map((day) => ( //немає нічого унікального в масиві, який приходить з беку
        <div key={day.datetime}>
          <p>Day: {day.datetime}</p>
          <p>Condition: {day.conditions}</p>
          <p>Temperature: {day.temp}</p> 
        </div>
      ))}
    </div>
  );
}

export default WeatherForecast;
