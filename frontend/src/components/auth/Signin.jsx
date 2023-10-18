import React, { useState } from 'react';
import Container from '../Container';
import Title from '../form/Title';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import CustomLink from '../CustomLink';
import { commonModalClasses } from '../../utils/theme';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signin() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    const { email, password } = credentials;

    // Send user credentials to the server for authentication
    axios
      .post('http://localhost:8000/user/add', { email, password }) // Change the endpoint to /user/signin
      .then((response) => {
        if (response.data.success) {
          alert('Signin successful');
          console.log('User signed in successfully');
          navigate('/'); // Redirect to the dashboard or any other protected route
        } else {
          setError('Invalid email or password');
        }
      })
      .catch((err) => {
        console.log('Signin failed:', err);
      });
  };

  return (
    <div className="fixed inset-0 dark:bg-primary bg-green-200 transparent-background -z-10 flex justify-center items-center p-1">
      <Container className="relative p-4 transparent-bgForm">
        <form onSubmit={handleSignIn} className={commonModalClasses + ' w-72 '}>
          <Title Children="Sign in"> Sign in</Title>
          <FormInput
            label="Email"
            placeholder="abcd@gmail.com"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
          <FormInput
            label="Password"
            placeholder="***********"
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
          />

          <Submit value="Sign in" />

          {error && <p className="text-red-500">{error}</p>}

          <div className="flex justify between">
            <CustomLink to="/auth/forget-password">Forget Password</CustomLink>
            <CustomLink to="/auth/signup">Sign up</CustomLink>
          </div>
        </form>
      </Container>
    </div>
  );
}
