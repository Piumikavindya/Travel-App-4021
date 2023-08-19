import React from 'react'
import Container from '../Container'
import Title from '../form/Title'
import FormInput from '../form/FormInput'
import Submit from '../form/Submit'
import CustomLink from '../CustomLink'
import { commonModalClasses } from '../../utils/theme'




export default function Signin() {
  return (
    <div className="fixed inset-0 dark:bg-primary bg-green-200 transparent-background -z-10 flex justify-center items-center p-1">
     
      <Container className="relative p-4 transparent-bgForm">
        <form className={commonModalClasses+ ' w-72 '}> 
         <Title Children='Sign in'> Sign in</Title>
         <FormInput label='Eamil' placeholder='abcd@gmail.com' name='email'/>
         <FormInput label='Password' placeholder='***********' name='Password'/>
         
       
          <Submit value="Sign in"/>

          
         <div className='flex justify-between'>
          <CustomLink  to ='/auth/forget-password'> Forget Password</CustomLink>

          <CustomLink  to ='/auth/signup'> Sign up</CustomLink>

         </div>
        </form>
      </Container>
    </div>
  )
}
