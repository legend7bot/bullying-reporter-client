import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function DashboardReport() {
  const { id } = useParams();
  const reports = useSelector((state) => state.reports.reports);
  const report = reports.find((report) => report._id === id);
  console.log("just checkout",report);
  return <div>DashboardReport of {id}</div>;
}

export default DashboardReport;
