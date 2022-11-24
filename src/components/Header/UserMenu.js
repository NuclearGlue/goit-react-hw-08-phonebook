import { userLogout } from 'redux/user/operations';
import { useSelector, useDispatch } from 'react-redux';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  const logOut = () => {
    dispatch(userLogout());
  };

  return isLoggedIn ? (
    <div>
      <h2>
        Hello,
        <>{user.name}</>
      </h2>
      <button onClick={logOut}> Log Out</button>
    </div>
  ) : (
    <h2>Please register or login</h2>
  );
};

export default UserMenu;
