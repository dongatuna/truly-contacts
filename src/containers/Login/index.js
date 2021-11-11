import React, { useEffect } from 'react'
import LoginUI from "../../layout/Login";
import useForm from './useForm';


const LoginContainer = () => {

    //useEffect(() => { }, [])
    
    return ( <LoginUI form={useForm()} />  )       
    
}

export default LoginContainer 
