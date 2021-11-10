import { REGISTER_LOADING } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axios";

export const register = ({
    email, 
    password, 
    username,
    lastName: last_name,
    firstName: first_name
}) => ( dispatch ) => {
    // dispatch({
    //     type: REGISTER_LOADING
    // })

    axiosInstance
    .post('/auth/register', {
        email, password, username,
        last_name,first_name
    })
    .then(res=> console.log('res ', res.data))
    .catch(err => console.log(`Errors: ${err}`))
}
