import { useState, useContext, useEffect } from "react"
import { GlobalContext } from '../../context/Provider'
import { login } from "../../context/actions/auth/login";
import { useHistory } from "react-router-dom";


export default () => {
    //initiate the form as blank
    const [ form, setForm ] = useState({})   

    const history = useHistory()
    const { 
        authDispatch,
        authState : {
            auth : { loading, error, data }
        }
        
     } = useContext(GlobalContext)     

    const onChange = (e, { name, value }) => {
        setForm({...form, [name]: value})
    };

     console.log(`form ${form}`, form)

    const loginFormValid = 
        !form.username?.length ||      
        !form.password?.length 
    //handles registration form submission
    const onSubmit = () => {
        
        login(form)(authDispatch)
    }

    useEffect(()=>{
        if(data){
            if(data.user){
                history.push("/")
            }
        }
    }, [data])
    return { form, onChange , loading, loginFormValid, error, onSubmit  }
}