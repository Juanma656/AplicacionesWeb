import React from 'react';

const validation = (values) =>{

    let errors = {}

    if(!values.fullname){
        errors.fullname = "Es requerido el nombre."
    }
    if(!values.email){
        errors.email = "Es requerido el email."
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Correo inválido"
    }
    if(!values.password){
        errors.password = "Es requerida la contraseña."
    }else if(values.password.length < 5){
        errors.password = "La contraseña debe tener más de 5 caracteres."
    }

    return errors;

}
export default validation;