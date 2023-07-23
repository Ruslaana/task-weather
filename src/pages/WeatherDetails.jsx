import React, { useEffect, useState } from 'react';
import { fetchWeatherToday } from '../services/Api';
import  Loader  from '../components/Loader/Loader';

export default function WeatherDetail({ city }) {
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line
  const [wthToday, setWthToday] = useState([]);

  useEffect(() => {
    const weatherToday = async (city) => {
      try {
        setIsLoading(true);
        const data = await fetchWeatherToday(city);
        setWthToday(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    weatherToday(city);
  }, [city]);

  return (
    <div>
      {isLoading && <Loader />}
      {/* <p>{date}</p>
      <icon>{icon.id}</icon>
      <p>Temperature</p> */}
    </div>
  );
}
