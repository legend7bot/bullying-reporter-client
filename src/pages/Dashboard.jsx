import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllReports } from '../features/report/reportSlice';
import { logout } from '../features/auth/authSlice';
import ReportCard from '../components/ReportCard';
import { Button } from '@mui/material';

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
    <div className='dashboard-body'>
      <h1 className='dashboard-heading'>Dashboard</h1>
      <div className='dashboard-heading'>
      Welcome {user.user ? user.user.firstName : ''} {user.user ? user.user.lastName : ''}
      <Button
        variant="outlined"
        className='logout-btn'
        onClick={() => dispatch(logout())}>
        Logout
      </Button>
      </div>
      {reports.map((report) => (
        <ReportCard
          key={report._id}
          id={report._id}
          name={report.name}
          email={report.email}
          statusResolved={report.isResolved}
          description={report.description}
          status={report.status}
        />
      ))}
    </div>
  );
}

export default Dashboard;
