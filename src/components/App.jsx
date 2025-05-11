import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import Layout from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from '../redux/auth/operations';
import { useEffect } from 'react';
import { selectIsRefreshing } from '../redux/auth/selectors';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? null : (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path='contacts'
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/login' element={<RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />} />
        <Route path='/register' element={<RegistrationPage />} />
      </Routes>
    </div>
  );
};

export default App;
