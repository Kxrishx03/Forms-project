import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/Signup.css';
import { Link } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export const LoginForm  = () => {
  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: { email: '', password: '', rememberMe: false },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      setSuccess(true);
      
      if (values.rememberMe) {
        localStorage.setItem('email', values.email);
      } else {
        localStorage.removeItem('email');
      }
      console.log('Login Successful:', values);
      toast.success('Login successful!');
    },
  });

  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    if (savedEmail) {
      formik.setFieldValue('email', savedEmail);
    }
  }, []);

  return (
    <div className='container'>
        <div className="wrapper">
        <p className="wel-tag"> Login </p>
     
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input id="email" type="email" placeholder='Email' {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null}
        </div>
        <div>
          <input id="password" type="password" placeholder='Password' {...formik.getFieldProps('password')} />
          {formik.touched.password && formik.errors.password ? <span>{formik.errors.password}</span> : null}
        </div>
        <div className="checkbox-container">
            <label>
              <input
                type="checkbox"
                {...formik.getFieldProps('rememberMe')}
              /> Remember Me
            </label>
          </div>
        <button type="submit" className={`submit-button ${success ? 'success' : ''}`}>Login</button>
      </form>
      <p>
         Don't have an account? <Link to="/">Signup</Link>
        </p>
        </div>
        <ToastContainer />
    </div>
  );
};


