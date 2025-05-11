import LoginForm from '../../components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to='/' />;
  }
  return <LoginForm />;
};

export default LoginPage;
