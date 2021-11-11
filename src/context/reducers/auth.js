import { 
    REGISTER_LOADING, 
    REGISTER_ERROR, 
    REGISTER_SUCCESS, 
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_ERROR 
} from "../../constants/actionTypes";

const auth = ( state, {payload, type} ) => {
    switch (type) {
        
        case REGISTER_LOADING:
        case LOGIN_LOADING:
            return {
                ...state, 
                auth: {
                    ...state.auth,
                    error: false,
                    loading: true
                }
            }

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state, 
                auth: {
                    ...state.auth,
                    data: payload,
                    loading: true
                }
            }    

        case REGISTER_ERROR:
        case LOGIN_ERROR:
            return {
                ...state, 
                auth: {
                    ...state.auth,
                    error: payload,
                    loading: false
                }
            }      
        default:
            return state;
    }
}

export default auth