import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";

export const register = ({
    email, 
    password, 
    username,
    lastName: last_name,
    firstName: first_name
}) => ( dispatch ) => {
    dispatch({
        type: REGISTER_LOADING
    })

    axiosInstance()
        .post('/auth/register', {
            username,
            email,
            first_name, 
            last_name, 
            password        
    }).then(res=> {
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: REGISTER_ERROR, 
            payload: err.response ? err.response.data : 'Could not connect!'
        })
    })
}
