import { Outlet, Navigate } from 'react-router';
import { useAuthStatus } from '../hooks/useAuthStatus';
import Spinner from './Spinner';

function PrivateRoute() {
  const { signin, checking } = useAuthStatus();

  if (checking) return <Spinner />;

  return signin ? <Outlet /> : <Navigate to='/sign-in' />;
}

export default PrivateRoute;
