import React, { useEffect, useState } from 'react';
import { fetchWeatherForecast } from '../services/Api';
import Loader from '../components/Loader/Loader';
import { useParams } from 'react-router-dom';

import styles from './WeatherForecats.module.css'

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
    <ul className={styles.list}>
    {/* <h3>Week</h3>    */}
    {isLoading && <Loader />}
      {forecast?.length > 0 && forecast.map((day) => ( //немає нічого унікального в масиві, який приходить з беку
        <li key={day.datetime}>
          <p>{day.datetime}</p>
          <p>{day.conditions}</p>
          <p>{day.temp}</p> 
        </li>
      ))}
    </ul>
  );
}

export default WeatherForecast;
