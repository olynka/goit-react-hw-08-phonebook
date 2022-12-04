import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLogin } from 'redux/auth/authSelectors';

export default function PrivateRoute() {
  const isLogin = useSelector(getIsLogin);
  if (!isLogin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
