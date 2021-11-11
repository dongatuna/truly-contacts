import { useState, useContext, useEffect } from "react"
import { GlobalContext } from '../../context/Provider'
import { register } from "../../context/actions/auth/register";
import { useHistory } from "react-router-dom";


export default () => {
    //initiate the form as blank
    const [ form, setForm ] = useState({})
    const [ fieldErrors, setFieldErrors ] = useState({})

    const history = useHistory()
    const { 
        authDispatch,
        authState : {
            auth : { loading, error, data }
        }
        
     } = useContext(GlobalContext)

     useEffect(() => {
       
        if(error){           
            for (const item in error){
                console.log(`Item inside ofor loop....${item}`)
                setFieldErrors({ ...fieldErrors, [item]: error[item][0]})
            }            
        }
     }, [error])

     useEffect(()=>{
        if(data) history.push("/auth/login")
     }, [data])

    const onChange = (e, { name, value }) => {
        setForm({...form, [name]: value})
    };

    // console.log(`form ${form}`, form)

    const registerFormValid = 
        !form.username?.length ||
        !form.email?.length ||
        !form.firstName?.length ||
        !form.lastName?.length ||
        !form.password?.length 
    //handles registration form submission
    const onSubmit = () => {
        setFieldErrors({})
        register(form)(authDispatch)
    }
    return { form, onChange , loading, fieldErrors, registerFormValid, onSubmit  }
}