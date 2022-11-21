import LoginForm from './Form/LoginForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import RegisterForm from './Form/RegisterForm';
import { NotFound } from './NotFound.js/NotFound';

import { Routes, Route , Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { getError, getIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <nav>
  <Link to="/register">Registraton</Link>
  <Link to="/login">Log in</Link>
  <Link to="/contacts">Contacts</Link>
</nav>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
