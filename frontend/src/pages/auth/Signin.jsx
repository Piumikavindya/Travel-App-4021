import React, { useState } from 'react';
import Container from '../../components/Container';
import Title from '../../components/form/Title';
import FormInput from '../../components/form/FormInput';
import CustomLink from '../../components/CustomLink';
import { commonModalClasses } from '../../utils/theme';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signin({ setIsAuthenticated }) {
  const [credentials, setCredentials] = useState({
    Email: '',
    Password: '',
    role: '',
  });
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      console.log('Submitting credentials:', credentials); // Log credentials

      const response = await axios.post('http://localhost:8001/user/signIn', {
        Email: credentials.Email,
        Password: credentials.Password,
        role: credentials.role,
      });

      console.log("Response data:", response.data); // Log entire response
      console.log("User details:", response.data.user);

      if (response.data.user) {
        // Authentication successful
        console.log("User Login is Successful:", response.data.user);
        // Update your state or localStorage with user details
        setLoggedInUser(response.data.user);

        // Update authentication state
        setIsAuthenticated(true);

        // Redirect based on user role
        switch (response.data.user.role) {
          case "admin":
            navigate("/adminHome" + response.data.user.id);
            break;
          case "Travaler":
            navigate(`/${response.data.user.role}/${response.data.user.id}`);
            break;
          // Add more roles as needed
          default:
            console.log("Invalid role");
        }
      } else {
        console.log("Invalid email or password");
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError('Invalid email or password');
      } else {
        console.log('Signin failed:', err);
        setError('Signin failed, please try again later');
      }
    }
  };

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
          <FormInput
            label="role"
            placeholder="admin/Travaler"
            name="role"
            value={credentials.role}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary p-2">
            Sign in
          </button>

          {error && <p className="text-red-500">{error}</p>}

          <div className="flex justify-between">
            
            <CustomLink to="/auth/signup">Sign up</CustomLink>
          </div>
        </form>
      </Container>
    </div>
  );
}
