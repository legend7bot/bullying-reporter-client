import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoutes = () => {
  let auth = useSelector((state) => state.auth);
  return auth.isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
