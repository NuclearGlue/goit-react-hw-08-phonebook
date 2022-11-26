import { NavLink } from 'react-router-dom';
import UserMenu from './UserMenu';
import { useSelector } from 'react-redux';
import style from './Header.module.css';

export const Header = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <>
      <NavLink to="/" className={style.headerLink}>
        <h1>Phonebook</h1>
      </NavLink>

      <div>
        <nav>
          {!isLoggedIn ? (
            <>
              <NavLink to="/register" className={style.headerLink}>
                Registration
              </NavLink>
              <NavLink to="/login" className={style.headerLink}>
                Log in
              </NavLink>
            </>
          ) : (
            <NavLink to="/contacts" className={style.headerLink}>
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
