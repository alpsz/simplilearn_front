import { APIURLS } from '../urls/urls';
import api from '../api/backendApi';
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    AUTHENTICATE_USER,
    LOG_OUT,
    CLEAR_AUTH_STATE
} from '../actions/type';


export function login(email, password) {
    return async (dispatch) => {
        dispatch(startLogin());
        const response = await api.post(APIURLS.login(), {email, password}, {'Content-Type': 'application/json'});
        if(response.data.success) {
            localStorage.setItem('token', response.data.token);
            dispatch(loginSuccess(response.data.user));
            return;
        }
        dispatch(loginFailed(response.data.error));
    }
}


export function startLogin() {
    return {
        type: LOGIN_START
    };
};

export function loginFailed(errorMessage) {
    return {
        type: LOGIN_FAILED,
        error: errorMessage
    };
};

export function loginSuccess(user) {
    return {
        type: LOGIN_SUCCESS,
        user: user
    };
};

export function authenticateUser(user) {
    return {
        type: AUTHENTICATE_USER,
        user,
    };
};

export function logoutUser() {
    return {
        type: LOG_OUT
    };
};

export function clearAuthState() {
    return {
        type: CLEAR_AUTH_STATE
    }
}



