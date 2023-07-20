import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import TripList from '../pages/TripList';
import TripDetails from './TripDetails';
import AddTripForm from './AddTripForm/AddTripForm';
import Modal from '../pages/Modal';
import WeatherForecast from '../pages/WeatherForecast';

import styles from '../components/App.module.css'


function App() {
  const [trips, setTrips] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Load trips from local storage on initial render
    const savedTrips = JSON.parse(localStorage.getItem('trips'));
    if (savedTrips) {
      setTrips(savedTrips);
    }
  }, []);

  useEffect(() => {
    // Save trips to local storage whenever it changes
    localStorage.setItem('trips', JSON.stringify(trips));
  }, [trips]);

  const addTrip = (newTrip) => {
    setTrips([...trips, newTrip]);
  };

  return (
    <div>
      <Routes>
      <Route path="/" element={<WeatherForecast />} />
        <Route path="/trips" element={<TripList />} />
        <Route path="/trips/:id" element={<TripDetails />} />
      </Routes>

      <button className={styles.button} onClick={() => setShowModal(true)}>Add Trip</button>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <AddTripForm addTrip={addTrip} />
      </Modal>
    </div>
  );
}

export default App;
