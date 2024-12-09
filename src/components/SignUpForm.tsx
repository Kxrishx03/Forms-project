import { useState } from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import '../styles/Signup.css';
import { PasswordStrengthIndicator } from './PasswordStrengthIndicator';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


export const SignUpForm = () => {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { username: '', email: '', password: '', confirmPassword: '' },
    validationSchema: Yup.object({
      username: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: (values) => {
      setSuccess(true);
      toast.success('Signup successful! Redirecting to login...');
      console.log('Sign Successful:', values);
      setTimeout(() => {
        navigate('/login');
      }, 2000); 
    },
  });

  return (
    <div className="container">
      <div className="wrapper">
        <p className="wel-tag">Welcome to our community</p>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <input
              id="username"
              type="text"
              placeholder="Username"
              {...formik.getFieldProps('username')}
            />
            {formik.touched.username && formik.errors.username && (
              <span>{formik.errors.username}</span>
            )}
          </div>
          <div>
            <input
              id="email"
              type="email"
              placeholder="Email"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email && (
              <span>{formik.errors.email}</span>
            )}
          </div>
          <div>
            <input
              id="password"
              type="password"
              placeholder="Password"
              {...formik.getFieldProps('password')}
            />
            {formik.values.password && (
              <PasswordStrengthIndicator password={formik.values.password} />
            )}
            {formik.touched.password && formik.errors.password && (
              <span>{formik.errors.password}</span>
            )}
          </div>
          <div>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              {...formik.getFieldProps('confirmPassword')}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <span>{formik.errors.confirmPassword}</span>
            )}
          </div>
          <button
            type="submit"
            className={`submit-button ${success ? 'success' : ''}`}
          >
            Create an account
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};
