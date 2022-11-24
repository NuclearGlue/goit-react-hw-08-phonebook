import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children, restricted = false, navigateTo = '/' }) {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const shouldNavigate = isLoggedIn && restricted;
  return <>{shouldNavigate ? <Navigate to={navigateTo} /> : children}</>;
}

export default PublicRoute;
