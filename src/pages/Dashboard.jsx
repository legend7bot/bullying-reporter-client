import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllReports } from '../features/report/reportSlice';

function Dashboard() {
  const report = useSelector((state) => state.reports.reports);
  const user = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

  console.log(report);
  useEffect(() => {
    dispatch(getAllReports(user));
  }, [user]);
  return (
    <div>
      Dashboard
      {report.map((report) => (
        <p key={report._id}>{report._id}</p>
      ))}
    </div>
  );
}

export default Dashboard;
