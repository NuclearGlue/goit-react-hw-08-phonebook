import { NavLink } from 'react-router-dom';
import UserMenu from './UserMenu';
import { useSelector } from 'react-redux';

export const Header = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <>
      <NavLink to="/">
        <h1>Phonebook</h1>
      </NavLink>

      <div>
        <nav>
          {!isLoggedIn ? (
            <>
              <NavLink to="/register" className="navLink">
                Registration
              </NavLink>
              <NavLink to="/login" className="navLink">
                Log in
              </NavLink>
            </>
          ) : (
            <NavLink to="/contacts" className="navLink">
              Contacts
            </NavLink>
          )}
        </nav>

        <div>
          <UserMenu />
        </div>
      </div>
    </>
  );
};
