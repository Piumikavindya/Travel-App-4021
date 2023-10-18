import React, { useState } from 'react';
import Container from '../Container';
import Title from '../form/Title';
import FormInput from '../form/FormInput';

import CustomLink from '../CustomLink';
import { commonModalClasses } from '../../utils/theme';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [userInfo, setUserInfo] = useState({
    Name: '',   // Change to 'Name'
    Email: '',  // Change to 'Email'
    Password: '', // Change to 'Password'
  });

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const sendData = (e) => {
    e.preventDefault();

    // Send user data to the server
    axios
      .post('http://localhost:8000/user/add', userInfo)
      .then(() => {
        alert("User Added");
        console.log('User registered successfully');
        navigate('/auth/signin');
      })
      .catch((err) => {
        console.log('Registration failed:', err);
      });
  };

  const { name, email, password } = userInfo;

  return (
    <div className="fixed inset-0 dark:bg-primary bg-green-200 -z-10 flex justify-center items-center p-1">
      <Container>
        <form onSubmit={sendData} className={commonModalClasses + 'w-72'}>
          <Title Children='Sign up'> Sign up</Title>
          <FormInput value={name} onChange={handleChange} label='Name' placeholder='Piumi Kavindya' name='Name' />
<FormInput value={email} onChange={handleChange} label='Email' placeholder='abcd@gmail.com' name='Email' />
<FormInput value={password} onChange={handleChange} label='Password' placeholder='***********' name='Password' type='password' />

          <button type="submit" className="btn btn-primary bg-black p-2">
            Sign up
          </button>

          <div className='flex justify-between'>
            <CustomLink to='/auth/forget-password'>Forget Password</CustomLink>
            <CustomLink to='/auth/signin'>Sign in</CustomLink>
          </div>
        </form>
      </Container>
    </div>
  );
}
