import React from 'react';
import { useParams } from 'react-router-dom';
import WeatherForecast from './WeatherForecast';

function TripDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Trip Detail</h1>
      <p>Trip ID: {id}</p>
      <WeatherForecast />
    </div>
  );
}

export default TripDetail;
