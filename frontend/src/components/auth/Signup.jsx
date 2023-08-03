import React from 'react'
import Container from '../Container'
import Title from '../form/Title'
import FormInput from '../form/FormInput'
import Submit from '../form/Submit'
import CustomLink from '../CustomLink'

export default function Signup() {
  return (
    <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center p-1">
     
      <Container>
        <form className='bg-secondary rounded p-8 w-72 sppace-y-'> 
         <Title Children='Sign up'> Sign up</Title>
         <FormInput label='Name' placeholder='piumi kavindya' name='Name'/>
         <FormInput label='Eamil' placeholder='abcd@gmail.com' name='email'/>
         <FormInput label='Password' placeholder='***********' name='Password'/>
         
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
