import { useContext, useState } from "react"
import { register } from "../../context/actions/auth/register";
import { GlobalContext } from '../../context/Provider'

export default () => {
    //initiate the form as blank
    const [ form, setForm ] = useState({})

    const { 
        authDispatch, 
        authState : {auth : {loading}}
     } = useContext(GlobalContext)

    console.log("authState", auth )
    const onChange = (e, { name, value }) => {
        setForm({...form, [name]: value})
    };

    console.log(`form ${form}`, form)

    const registerFormValid = 
        !form.username?.length ||
        !form.email?.length ||
        !form.firstName?.length ||
        !form.lastName?.length ||
        !form.password?.length 
    //handles registration form submission
    const onSubmit = (form) => {
        
        register(form)(authDispatch)
    }
    return { form, onChange , loading, registerFormValid, onSubmit  }
}