import { Link } from 'react-router-dom';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>404 - Page Not Found</h1>
      <p className={s.text}>Oops! The page you're looking for doesn't exist.</p>
      <Link className={s.link} to='/'>
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
