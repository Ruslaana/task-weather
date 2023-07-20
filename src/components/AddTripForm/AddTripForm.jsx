import React, { useState } from 'react';

import styles from './AddTripForm.module.css'

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
      <h2 className={styles.header}>Add Trip</h2>
      <form onSubmit={handleSubmit}>
        <label>
          City:
          <input
          className={styles.input_data}
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <br />
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <br />
        <button className={styles.button} type="submit">Save</button>
        <button className={styles.button} type="submit">Cancel</button>
      </form>
    </div>
  );
}

export default AddTripForm;
