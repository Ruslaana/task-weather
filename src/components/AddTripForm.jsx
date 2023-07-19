import React, { useState } from 'react';

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
    <div>
      <h2>Add Trip Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          City:
          <input
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
        <button type="submit">Add Trip</button>
      </form>
    </div>
  );
}

export default AddTripForm;
