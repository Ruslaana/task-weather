import React from 'react';
import { useParams } from 'react-router-dom';
import WeatherForecast from '../pages/WeatherForecast';

function TripDetails() {
  const { city } = useParams();

  return (
    <div>
      <h1>Trip Details</h1>
      <p>Trip to {city}</p>
      <WeatherForecast />
    </div>
  );
}

export default TripDetails;
