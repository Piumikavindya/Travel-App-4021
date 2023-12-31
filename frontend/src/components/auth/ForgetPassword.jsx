import React from 'react'
import Container from '../Container'
import Title from '../form/Title'
import FormInput from '../form/FormInput'
import CustomLink from '../CustomLink'
import Submit from '../form/Submit'
import { commonModalClasses } from '../../utils/theme'

export default function ForgetPassword() {
  return (
    <div className="fixed inset-0 dark:bg-primary bg-green-200 -z-10 flex justify-center items-center p-1"> 
     
     
    <Container>
    <form className={commonModalClasses+'w-96'}> 
       <Title Children='Please Enter Your Email'> </Title>
       <FormInput label='Eamil' placeholder='abcd@gmail.com' name='email'/>
       
       
       <Submit className='w-96' value="Send Link"/>

       <div className='flex justify-between'>
        <CustomLink  to ='/auth/signin'> Sign in</CustomLink>

        <CustomLink  to ='/auth/signup'> Sign up</CustomLink>

       </div>
      </form>
    </Container>
  </div>
  )
}
