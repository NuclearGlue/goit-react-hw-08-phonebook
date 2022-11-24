import { useEffect } from "react";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { useDispatch, useSelector } from "react-redux";
import { Routes,Route } from "react-router-dom";
import LoginForm from "./Form/LoginForm/LoginForm";
import RegisterForm from "./Form/RegisterForm/RegisterForm";
import NotFound from './NotFound/NotFound';
import Contacts from './Contacts/Contacts';
import { Homepage } from "./Homepage/Homepage";
import { Header } from "./Header/Header";
import { fetchCurrentUser } from "redux/user/operations";

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(state => state.user.isLoading);
  const token = useSelector(state => state.user.token);

  useEffect(() => {
    if (!token ) {
      return;
    }
    dispatch(fetchCurrentUser());
    }, [dispatch, token]);

  return (
    !isFetchingCurrentUser ? (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <RegisterForm />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted navigateTo="/contacts">
                <LoginForm />
              </PublicRoute>
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute navigateTo="/">
                <Contacts />
              </PrivateRoute>
            }
          />
          
        </Routes>
        
      </>
        ):<div className='loader'></div> 
  );
};
