import React, { useEffect, useState } from 'react'
import { fetchWeatherToday } from '../services/Api';

export default function WeatherDetail() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [wthToday, setWthToday] = useState([]);

  // useEffect(() => {
  //   const weatherToday = async (city) => {
  //     try {
  //       setIsLoading(true);
  //       const data = await fetchWeatherToday(city);
  //       setWthToday(data);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   weatherToday(city);
  // }, [city]);

  return (
    <div>
    {/* {isLoading && <Loader />} */}
      
    </div>
  )
}
