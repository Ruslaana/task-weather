import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TripList.module.css';

function TripList({ trips, onDeleteTrip }) { 
  const handleDeleteTrip = (id) => {
    onDeleteTrip(id);
  };

  return (
    <div>
      <h2>Trip List</h2>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <Link to={`/trips/${trip.id}`}>{trip.city}</Link>
            <button className={styles.btn_delete} onClick={() => handleDeleteTrip(trip.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TripList;
