import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllReports } from '../features/report/reportSlice';

function Dashboard() {
  const report = useSelector((state) => state.reports.reports);
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  console.log(report);
  useEffect(() => {
    if (user.isLogin) {
      dispatch(getAllReports(user));
    }
  }, [user.isLogin, dispatch]);
  return (
    <div>
      <h1>Dashboard</h1>
      Welcome {user.user ? user.user.firstName : ''} {user.user ? user.user.lastName : ''}
      {report.map((report) => (
        <p key={report._id}>{report._id}</p>
      ))}
    </div>
  );
}

export default Dashboard;
