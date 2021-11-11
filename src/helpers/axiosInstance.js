import axios from "axios"

export default (history = null) => {
    const baseURL = process.env.REACT_APP_BACKEND_URL

    console.log(`BASE URL: ${baseURL}`)
    let headers = {}

    if(localStorage.token){
        headers.Authorization = `Bearer ${localStorage.token}`
    }
    const axiosInstance = axios.create({
        baseURL: baseURL,
        headers
    })

    axiosInstance.interceptors.response.use(
        (response) => 
            new Promise((resolve, reject)=>{
            resolve(response)
        }),
        (error) => {
            //error not from the server, maybe front end
            if(!error.response){
                return new Promise((resolve, reject) => {
                    reject(error)
                })
            }
            //error from the server for example due to invalid token
            if(error.response.status === 403){
                localStorage.removeItem("token")
                if(history){
                    history.push("/auth/login")
                } else window.location= "/auth/login"
            } else {
                return new Promise((resolve, reject) => {
                    reject(error)
                })
            }
        }
    )

    return axiosInstance
}


