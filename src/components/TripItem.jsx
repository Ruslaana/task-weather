import React from 'react';
import { Link } from 'react-router-dom';

function TripItem({ trip }) {
  const { id, city, startDate, endDate } = trip;

  return (
    <li>
      <Link to={`/trips/${id}`}>
        <h3>{city}</h3>
        <p>Start Date: {startDate}</p>
        <p>End Date: {endDate}</p>
      </Link>
    </li>
  );
}

export default TripItem;
