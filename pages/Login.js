

//   // const handleSubmit = async (values, { setSubmitting, setErrors }) => {
//   //   try {
//   //     const response = await axios.post('https://osbaseleaf-api.andolasoft.co.in/v1/auth/jwt/login', {
//   //       username: values.username,
//   //       password: values.password,
//   //     });
//   //     if (response.data.access_token) {
//   //       localStorage.setItem('accessToken', response.data.access_token);
//   //       setLoading(true);
//   //     }
//   //   } catch (err) {
//   //     console.error('Login error:', err);
//   //     setErrors({ password: 'Invalid email or password' });
//   //   } finally {
//   //     setSubmitting(false);
//   //   }
//   // };
//   const handleSubmit = async (values, { setSubmitting, setErrors }) => {
//     try {
//       const response = await Login(values); 
//       localStorage.setItem('accessToken', response.data.access_token); 
//       setLoading(true)
//     } catch (err) {
//       console.error('Login error:', err);
//       setErrors({ password: 'Invalid email or password' });
//     } finally {
//       setSubmitting(false);
// }
// };
//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>
//         <Formik
//           initialValues={{ username: '', password: '' }}
//           validationSchema={LoginSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ isSubmitting }) => (
//             <Form>
//               <h2>Login</h2>
//               <ErrorMessage name="password" component="p" className={styles.error} />

//               <div className={styles.formGroup}>
//                 <label htmlFor="username">Username</label>
//                 <Field
//                   type="text"
//                   id="username"
//                   name="username"
//                   placeholder="Enter username"
//                   className={styles.inputField}
//                   required
//                 />
//               </div>

//               <div className={styles.formGroup}>
//                 <label htmlFor="password">Password</label>
//                 <Field
//                   type="password"
//                   id="password"
//                   name="password"
//                   placeholder="Enter password"
//                   className={styles.inputField}
//                   required
//                 />
//               </div>

//               <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
//                 {isSubmitting ? 'Logging in...' : 'Login'}
//               </button>

//               <p className={styles.signupLink}>
//                 Don't have an account? <Link href="/signup">Signup</Link>
//               </p>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default Login;






















// // import React from 'react';
// // import { Formik, Form, Field, ErrorMessage } from 'formik';
// // import * as Yup from 'yup';
// // import axios from 'axios';
// // import { useRouter } from 'next/router';
// // import Link from 'next/link';
// // import styles from '../styles/Login.module.css';

// // const LoginSchema = Yup.object().shape({
// //   username: Yup.string().required('Username is required'),
// //   password: Yup.string().required('Password is required'),
// // });

// // const Login = () => {
// //   const router = useRouter();
// //   const [accessToken, setAccessToken] = useState(null);

// //   useEffect(() => {
// //     if (typeof window !== 'undefined') {
// //       const token = localStorage.getItem('token');
// //       setAccessToken(token);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     if (accessToken) {
// //       router.push('/');
// //     }
// //   }, [accessToken, router]);

// //   const handleSubmit = async (values, { setSubmitting, setErrors }) => {
// //     try {
// //       const response = await axios.post('https://osbaseleaf-api.andolasoft.co.in/v1/auth/jwt/login', {
// //         username: values.username,
// //         password: values.password,
// //       });
// //       if (typeof window !== 'undefined') {
// //         localStorage.setItem('token', response.data.token);
// //         setAccessToken(response.data.token);
// //       }
// //     } catch (err) {
// //       console.error('Login error:', err);
// //       setErrors({ password: 'Invalid email or password' });
// //     } finally {
// //       setSubmitting(false);
// //     }
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <div className={styles.card}>
// //         <Formik
// //           initialValues={{ username: '', password: '' }}
// //           validationSchema={LoginSchema}
// //           onSubmit={handleSubmit}
// //         >
// //           {({ isSubmitting }) => (
// //             <Form>
// //               <h2>Login</h2>
// //               <ErrorMessage name="password" component="p" className={styles.error} />

// //               <div className={styles.formGroup}>
// //                 <label htmlFor="username">Username</label>
// //                 <Field
// //                   type="text"
// //                   id="username"
// //                   name="username"
// //                   placeholder="Enter username"
// //                   className={styles.inputField}
// //                   required
// //                 />
// //               </div>

// //               <div className={styles.formGroup}>
// //                 <label htmlFor="password">Password</label>
// //                 <Field
// //                   type="password"
// //                   id="password"
// //                   name="password"
// //                   placeholder="Enter password"
// //                   className={styles.inputField}
// //                   required
// //                 />
// //               </div>

// //               <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
// //                 {isSubmitting ? 'Logging in...' : 'Login'}
// //               </button>

// //               <p className={styles.signupLink}>
// //                 Don't have an account? <Link href="/Signup">Signup</Link>
// //               </p>
// //             </Form>
// //           )}
// //         </Formik>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;

import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Login.module.css';
import { login } from './appService'; 



const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const Login = () => {
  const router = useRouter();
  const [accessToken,setAccessToken]= useState(null)
  const [loading,setLoading]= useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('accessToken');
      setAccessToken(token);
    }
  }, [loading]);

  useEffect(() => {
    if (accessToken) {
      router.push('/');
    }
  }, [accessToken, router]);

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await login(values);
      console.log("login response",response)
      localStorage.setItem('accessToken', response.data.access_token); 
      setLoading(true)
    } catch (err) {
      console.log('Login error:', err);
      setErrors({ password: 'Invalid email or password' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <h2>Login</h2>
              <ErrorMessage name="password" component="p" className={styles.error} />

              <div className={styles.formGroup}>
                <label htmlFor="username">Username</label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter username"
                  className={styles.inputField}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  className={styles.inputField}
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>

              <p className={styles.signupLink}>
                Don't have an account? <Link href="/signup">Signup</Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
















///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
