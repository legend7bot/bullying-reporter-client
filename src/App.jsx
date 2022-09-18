import React from 'react';
import Home from './pages/Home';
import Report from './pages/Report';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoutes from './utils/PrivateRoutes';
import DashboardReport from './pages/DashboardReport';

function App() {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        />
        <Route
          path="/report"
          element={<Report />}
        />
        <Route element={<PrivateRoutes />}>
          <Route
            exact
            element={<Dashboard />}
            path="/dashboard"
          />
          <Route
            exact
            element={<DashboardReport />}
            path="/dashboard/report/:id"
          />
        </Route>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/*"
          element={'error 404 page not found sowwy'}
        />
      </Routes>
    </>
  );
}

export default App;
