import { REGISTER_LOADING } from "../../constants/actionTypes";

const auth = ( state, action ) => {
    switch (action.type) {
        
        case REGISTER_LOADING:
            return {
                ...state, 
                auth: {
                    ...state.auth,
                    loading: true,
                }
            }
        default:
            return state;
    }
}

export default auth;