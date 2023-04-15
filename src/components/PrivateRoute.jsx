import { Outlet, Navigate } from 'react-router';
import { useAuthStatus } from '../hooks/useAuthStatus';

function PrivateRoute() {
  const { signin, checking } = useAuthStatus();

  if (checking) return <div>Loading...</div>;

  return signin ? <Outlet /> : <Navigate to='/sign-in' />;
}

export default PrivateRoute;
