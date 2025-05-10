import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './RegistrationForm.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = { name: '', email: '', password: '' };

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values));
  };

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
        })}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={s.form}>
            <label className={s.label} htmlFor='name'>
              Name
            </label>
            <Field className={s.input} name='name' type='text' />
            <ErrorMessage className={s.error} name='name' component='div' autoComplete='name' />

            <label className={s.label} htmlFor='email'>
              Email
            </label>
            <Field className={s.input} name='email' type='email' autoComplete='email' />
            <ErrorMessage className={s.error} name='email' component='div' />

            <label className={s.label} htmlFor='password'>
              Password
            </label>
            <Field className={s.input} name='password' type='password' autoComplete='new-password' />
            <ErrorMessage className={s.error} name='password' component='div' />
            <div>
              <Link to='/login' className={s.link}>
                You already have account? Sign in!
              </Link>
            </div>
            <button className={s.button} type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
            <Link to='/' className={s.link}>
              Back to Home
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
