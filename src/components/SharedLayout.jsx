import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "./Loader/Loader";

const SharedLayout = () => {
  return (
    <div>
      <h1>Weather Forecast</h1>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;