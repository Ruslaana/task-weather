import React from 'react';
import { Link } from 'react-router-dom';

function TripList() {
  return (
    <div>
      <h1>Trip List</h1>
      <ul>
        <li>
          <Link to="/trips/1">Trip 1</Link>
        </li>
        <li>
          <Link to="/trips/2">Trip 2</Link>
        </li>
      </ul>
    </div>
  );
}

export default TripList;
