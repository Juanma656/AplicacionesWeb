import React,{useEffect, useState} from 'react'; 
import "./Signup.css";
import validation from './validation';

const Signup = ({submitForm}) => {

    const [errors,setErrors] = useState({}) 
    const [dataIsCorrect,setDataIsCorrect] = useState(false)
    

    

    const [values,setValues] = useState({
        fullname:'',
        email:'',
        password:'',
    })
    const handleFormSubmit = (event) =>{
        event.preventDefault();
        setErrors(validation(values))
        setDataIsCorrect(true)
    }

    useEffect(() =>{
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            submitForm(true);
        }

    }, [errors])


    const handleChange = (event) =>{
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }

    return(
        <div className='container'>
            <div className='app-wraper'>
                <div>
                    <h2 className='title'>Crear cuenta</h2>
                </div>
                <form className='form-wrapper'>
                    <div className='name'>
                        <label className='laber'>Nombre completo</label>
                        <input className='input' 
                        type='text' 
                        name = 'fullname'
                        value={values.fullname}
                        onChange = {handleChange}
                        />
                    {errors.fullname && <p className = "error">{errors.fullname}</p>}  
                    </div>
                
               
                    <div className='email'>
                        <label className='laber'>Correo electronico</label>
                        <input className='input' 
                        type='email'  
                        name = 'email' 
                        value={values.email}
                        onChange = {handleChange}
                        />
                    {errors.email && <p className = "error">{errors.email}</p>}     

                    </div>
                
                
                    <div className='password'>
                        <label className='laber'>Contraseña</label>
                        <input className='input'
                        type='password'  
                        name = 'password' 
                        value={values.password}
                        onChange = {handleChange}
                        />                       
                    {errors.password && <p className = "error">{errors.password}</p>} 
                    </div>
                    <div>
                        <button className='submit' onClick={handleFormSubmit}>Registrarse</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Signup;