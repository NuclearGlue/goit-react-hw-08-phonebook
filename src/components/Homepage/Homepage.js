import { useSelector } from 'react-redux';

export const Homepage = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <>
      <div className="Homepage">
        
        {isLoggedIn ? (
          <h2>Welcome back!</h2>
        ) : (
          <h2>Please log in to continue</h2>
        )}
      </div>
    </>
  );
};