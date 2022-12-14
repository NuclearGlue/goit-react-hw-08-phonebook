import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children, navigateTo = '/' }) {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return <>{isLoggedIn ? children : <Navigate to={navigateTo} />}</>;
}

export default PrivateRoute;
