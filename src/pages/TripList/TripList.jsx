import React from 'react';
import { Link } from 'react-router-dom';

function TripList({ trips, onDeleteTrip }) { 
  const handleDeleteTrip = (id) => {
    onDeleteTrip(id);
  };

  return (
    <div>
      <h2>Trip List</h2>
      <input type="text" placeholder="Search your trip" />
      <button type="submit">Search</button>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <Link to={`/trips/${trip.id}`}>{trip.city}</Link>
            <button onClick={() => handleDeleteTrip(trip.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TripList;
