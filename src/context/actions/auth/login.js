import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";

export const login = ({  
    password, 
    username   
}) => ( dispatch ) => {
    dispatch({
        type: LOGIN_LOADING
    })

    axiosInstance()
        .post('/auth/login', {
            username,        
            password        
    }).then(res=> {
        localStorage.token = res.data.token
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(`stupid error during login ${JSON.stringify(err.response.data)}`)
        dispatch({
            type: LOGIN_ERROR, 
            payload: err.response ? err.response.data : 'Could not connect!'
        })
    })
}
