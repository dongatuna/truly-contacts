import axiosInstance from "../../helpers/axios";

export const register = () => {
    axiosInstance.post('/auth/register')
    .then(res=> console.log('res ', res.data))
    .catch(err => console.log(`Errors: ${err}`))
}
