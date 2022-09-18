import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllReports } from '../features/report/reportSlice';
import ReportCard from '../components/ReportCard';

function Dashboard() {
  const reports = useSelector((state) => state.reports.reports);
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.isLogin) {
      dispatch(getAllReports(user));
    }
  }, [user.isLogin, dispatch]);
  console.log('reports', reports);
  return (
    <div>
      <h1>Dashboard</h1>
      Welcome {user.user ? user.user.firstName : ''} {user.user ? user.user.lastName : ''}
      {reports.map((report) => <ReportCard
        key={report._id}
        id={report._id}
        name={report.name}
        email={report.email}
        statusResolved={report.isResolved}
        description={report.description}
        status={report.status}
      /> )}
    </div>
  );
}

export default Dashboard;
