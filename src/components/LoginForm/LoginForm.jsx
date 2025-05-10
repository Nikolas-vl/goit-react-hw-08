import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './LoginForm.module.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const initialValues = { email: '', password: '' };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.setSubmitting(false);
  };

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
        })}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={s.form}>
            <label className={s.label} htmlFor='email'>
              Email
            </label>
            <Field className={s.input} name='email' type='email' autoComplete='email' />
            <ErrorMessage className={s.error} name='email' component='div' />

            <label className={s.label} htmlFor='password'>
              Password
            </label>
            <Field className={s.input} name='password' type='password' autoComplete='current-password' />
            <ErrorMessage className={s.error} name='password' component='div' />
            <div>
              <Link to='/register' className={s.link}>
                You don't have account? Sign up!
              </Link>
            </div>
            <button className={s.button} type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Login'}
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

export default LoginForm;
