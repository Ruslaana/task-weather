import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from '../components/App.module.css';
import Loader from './Loader/Loader';

// import TripList from '../pages/TripList';
// import TripDetails from './TripDetails';
// import AddTripForm from './AddTripForm/AddTripForm';
// import Modal from '../pages/Modal';
// import WeatherForecast from '../pages/WeatherForecast';

const TripList = lazy(() => import('../pages/TripList'));
const TripDetails = lazy(() => import('./TripDetails'));
const AddTripForm = lazy(() => import('./AddTripForm/AddTripForm'));
const Modal = lazy(() => import('../pages/Modal'));
const WeatherForecast = lazy(() => import('../pages/WeatherForecast'));


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
    setShowModal(false); // Закриваємо модальне вікно після додавання подорожі
  };

  return (
    <>
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" index element={<WeatherForecast />} />
        <Route path="/trips" element={<TripList trips={trips} />} />
        <Route path="/trips/:id" element={<TripDetails />} />
        <Route path="*" element={<WeatherForecast />}  />
      </Routes>

      <button className={styles.button} onClick={() => setShowModal(true)}>Add Trip</button>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <AddTripForm addTrip={addTrip} />
      </Modal>
      </Suspense>
    </>
  );
}

export default App;
