import React from 'react';


function TripItem({ trip }) {
  const { city, startDate, endDate } = trip;

  return (
    <>
      <h3>{city}</h3>
      <img src="" alt={city}></img>
      <p>Start Date: {startDate}</p>
      <p>End Date: {endDate}</p>
    </>
  );
}

export default TripItem;
