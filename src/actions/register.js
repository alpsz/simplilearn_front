import { APIURLS } from "../urls/urls";
import api from '../api/backendApi';
import { 
        SIGNUP_START,
        SIGNUP_FAILED, 
        SIGNUP_SUCCESS 
        } from "./type";

export function register(email, password) {
    return async (dispatch) => {
        dispatch(startSignup());
        const response = await api.post(APIURLS.signup(), {email, password}, {'Content-Type': 'application/json'});
        if(response.data.success) {
            dispatch(signupSuccess(response.data.user));
            return;
        }
        dispatch(signupFailed(response.data.message));
    }
}


export function startSignup() {
    return  {
        type: SIGNUP_START
    };
}

export function signupFailed(error) {
    return {
        type: SIGNUP_FAILED,
        error
    };
}

export function signupSuccess(user) {
    return {
        type: SIGNUP_SUCCESS,
        user
    };
}