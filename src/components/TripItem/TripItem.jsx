import React from 'react';
import styles from './TripItem.module.css';

function TripItem({ trip }) {
  const { city, startDate, endDate } = trip;

  return (
    <>
      <div className={styles.trip_item}>
      <img src="" alt={city}></img>
      <p>{city}</p>
      <p>Start Date: {startDate}</p>
      <p>End Date: {endDate}</p>
      </div>
    </>
  );
}

export default TripItem;
