import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from './SharedLayout';

const Home = lazy(() => import('../pages/Home/Home'));
const WeatherDetails = lazy(() => import('../pages/WeatherDetails'));
const WeatherForecast = lazy(() => import('../pages/WeatherForecast'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />}/>
        <Route path="*" element={<Home />}>
          <Route path="weatherforecast/:id" element={<WeatherForecast />} />
          <Route path="weatherdetail" element={<WeatherDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
