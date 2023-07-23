import React, { useEffect, useState } from 'react';
import { fetchWeatherForecast } from '../services/Api';
import Loader from '../components/Loader/Loader';
import { useParams } from 'react-router-dom';

function WeatherForecast() {
  const { id } = useParams();
  const [forecast, setForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getWeatherForecast = async () => {
      try {
        setIsLoading(true);
        const mergedData = await fetchWeatherForecast(id);
        setForecast(mergedData);
        } catch (error) {
          console.log(error)
      } finally {
        setIsLoading(false);
      }
    }
    getWeatherForecast();
  }, [id]);

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
