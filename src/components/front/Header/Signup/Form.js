import React, { useState } from 'react';
import Signup from './Signup';
import SignupSuccess from './SignupSuccess';

 const Form = () =>{
    const [formIsSubmitted,setFormIsSubmitted] = useState(false)
    const submitForm = () =>{
        setFormIsSubmitted(true)
    }

    return(
        <div>
            {!formIsSubmitted ? <Signup submitForm = {submitForm}/> : <SignupSuccess/>}
        </div>
    )
 }
export default Form;


