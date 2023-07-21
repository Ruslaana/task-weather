// AddTripForm.js
import React, { useState } from 'react';

import styles from './AddTripForm.module.css';

function AddTripForm({ addTrip }) {
  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrip = {
      id: Date.now().toString(),
      city,
      startDate,
      endDate,
    };
    addTrip(newTrip);
    setCity('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Create trip</h3>
      <form onSubmit={handleSubmit}>
        <label>
          City:
          <input
            placeholder='Please select a city'
            className={styles.input}
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <br />
        <label>
          Start Date:
          <input
            className={styles.input}
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          End Date:
          <input
            className={styles.input}
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <br />
        <button className={styles.button} type="button" onClick={() => setCity('')}>Cancel</button>
        <button className={styles.button_save} type="submit">Save</button>
      </form>
    </div>
  );
}

export default AddTripForm;
