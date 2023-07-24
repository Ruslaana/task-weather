import React, { Suspense, useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import AddTripForm from '../../components/AddTripForm/AddTripForm';
import TripList from '../TripList/TripList';

import styles from './Home.module.css';
import { Outlet } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

export default function Home() {
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

  const addTrip = newTrip => {
    setTrips([...trips, newTrip]);
    setShowModal(false); // Закриваємо модальне вікно після додавання подорожі
  };

  const deleteTrip = id => {
    setTrips(trips.filter(trip => trip.id !== id));
  };

  return (
    <div>
      <div>
        <input className={styles.search_trip} type="text" placeholder="Search your trip" />
        <button className={styles.submit} type="submit">Search</button>
      </div>

      <TripList trips={trips} onDeleteTrip={deleteTrip}/>

      <button className={styles.button} onClick={() => setShowModal(true)}>
        Add Trip
      </button>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <AddTripForm addTrip={addTrip} />
      </Modal>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
