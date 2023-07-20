import React from 'react';
import { useParams } from 'react-router-dom';
import WeatherForecast from '../pages/WeatherForecast';

function TripDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Trip Details</h1>
      <p>Trip ID: {id}</p>
      <WeatherForecast />
    </div>
  );
}

export default TripDetails;
