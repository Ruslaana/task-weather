import React from 'react';
import { Link } from 'react-router-dom';

function TripList({ trips }) {
  return (
    <div>
      <h1>Trip List</h1>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <Link to={`/trips/${trip.id}`}>{trip.city}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TripList;
