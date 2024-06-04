import React from 'react'
import Container from '../../components/Container'
import Title from '../../components/form/Title'
import FormInput from '../../components/form/FormInput'
import CustomLink from '../../components/CustomLink'
import Submit from '../../components/form/Submit'
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
