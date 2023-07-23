import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TripList.module.css';
import TripItem from '../../components/TripItem/TripItem';

function TripList({ trips, onDeleteTrip }) {
  const handleDeleteTrip = id => {
    onDeleteTrip(id);
  };

  return (
    <div>
      <h2>Trip List</h2>
      <ul className={styles.list}>
        {trips.map(trip => (
          <li key={trip.id}>
            <NavLink className={styles.link} to={`weatherforecast/${trip.city}`} city={trip.city}> 
              <TripItem trip={trip} />
            </NavLink>
            <button
              className={styles.btn_delete}
              onClick={() => handleDeleteTrip(trip.id)}
            >
              Delete
            </button>
          </li>
        ))}
      
      </ul>
    </div>
  );
}

export default TripList;
