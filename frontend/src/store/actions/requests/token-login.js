import axios from 'axios';
import {catchError} from '../actionError';
import {requestStatus} from '../actionLoading';

export const TOKEN_LOGIN = "TOKEN_LOGINT";

export const tokenLogin = (data) => {
    return {type: TOKEN_LOGIN, data}
};

export const tokenLoginRequest = () => {
    return dispatch => {
        dispatch(requestStatus());
        const token = localStorage.getItem('auth-token');
        if (!token) {
            localStorage.removeItem('auth-token');
            dispatch(catchError({'token': "Token does not exist."}));
        }
        return axios.post('token-login/', {token}).then(response => {
            dispatch(requestStatus());
            return dispatch(tokenLogin(response.data));
        }).catch(error => {
            console.log(error);
            console.log(error.response);
            localStorage.removeItem('auth-token');
            return dispatch(catchError(error.response.data));
        });
    }
};