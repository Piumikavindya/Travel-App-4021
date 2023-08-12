import React,{useState} from 'react'
import Container from '../Container'
import Title from '../form/Title'
import FormInput from '../form/FormInput'
import Submit from '../form/Submit'
import CustomLink from '../CustomLink'
import { commonModalClasses } from '../../utils/theme'

const validateUserInfo=({name, email, password})=>{
if(!name.trim()) return {ok:false, error: 'Name is missing!'}
if(/^[a-z A-Z]+$/.test(name)) return {ok:false, error: 'Invalid name!'}

if(email.trim()) return {ok:false, error: 'emial is missing!'}
}

export default function Signup() {

  const [userInfo, setUserInfo]= useState({
    name: '',
    email: '',
    password:'',
  });
const handleChange = ({target}) =>{
  const {value, name}=target;
  setUserInfo({...userInfo,[name]:value})
 
};
const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(userInfo);
 
};

  const{name,email,password}= userInfo
    return (
    <div className="fixed inset-0 dark:bg-primary bg-green-200 -z-10 flex justify-center items-center p-1"> 
     
     
      <Container>
        <form onSubmit={handleSubmit} className={commonModalClasses+'w-72'}> 
         <Title Children='Sign up'> Sign up</Title>
         <FormInput value={name} onChange={handleChange} label='Name' placeholder='piumi kavindya' name='Name'/>
         <FormInput value={email} onChange= {handleChange} label='Eamil' placeholder='abcd@gmail.com' name='email'/>
         <FormInput value={password} onChange={handleChange}  label='Password' placeholder='***********' name='Password'
         type='password'/>
         
         <Submit  value="Sign up"/>

         <div className='flex justify-between'>
          <CustomLink  to ='/auth/forget-password'> Forget Password</CustomLink>

          <CustomLink  to ='/auth/signin'> Sign in</CustomLink>

         </div>
        </form>
      </Container>
    </div>
  )
}
