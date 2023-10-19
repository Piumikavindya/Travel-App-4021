import React, { useState } from 'react';
import Container from '../Container';
import Title from '../form/Title';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import CustomLink from '../CustomLink';
import { commonModalClasses } from '../../utils/theme';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Signin() {
  const [credentials, setCredentials] = useState({
    Email: '',
    Password: '',
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

    const { Email, Password } = credentials;

    // Send a POST request to your server for custom authentication
    axios.post('http://localhost:8000/user/signin', { Email: Email, Password: Password })
      .then((response) => {
        if (response.data.success) {
          alert('Signin successful');
          console.log('User signed in successfully');
          navigate('/');
        } else {
          setError('Invalid email or password');
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setError('Invalid email or password'); // Handle 401 error by setting an error message
        } else {
          console.log('Signin failed:', err);
        }
      });
  }

  return (
    <div className="fixed inset-0 dark:bg-primary bg-green-200 transparent-background -z-10 flex justify-center items-center p-1">
      <Container className="relative p-4 transparent-bgForm">
        <form onSubmit={handleSignIn} className={commonModalClasses + ' w-72 '}>
          <Title Children="Sign in"> Sign in</Title>
          <FormInput
            label="Email"
            placeholder="abcd@gmail.com"
            name="Email"
            value={credentials.Email}
            onChange={handleChange}
          />
          <FormInput
            label="Password"
            placeholder="***********"
            name="Password"
            type="password"
            value={credentials.Password}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary bg-black p-2">
            Sign in
          </button>

          {error && <p className="text-red-500">{error}</p>}

          <div className="flex justify-between">
            <CustomLink to="/auth/forget-password">Forget Password</CustomLink>
            <CustomLink to="/auth/signup">Sign up</CustomLink>
          </div>
        </form>
      </Container>
    </div>
  );
}
