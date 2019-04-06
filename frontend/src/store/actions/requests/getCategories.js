import {CATEGORIES} from "../../../api-urls";
import axios from "axios";
import {catchError} from '../actionError';
import {requestStatus} from '../actionLoading';

export const SUCCESS_CATEGORIES= "SUCCESS_CATEGORIES";

export const successCategories = (data) => {
    return {type: SUCCESS_CATEGORIES, data}
};

export const getCategories = () => {
    return dispatch => {
        dispatch(requestStatus());
        return axios.get(CATEGORIES).then(response => {
            dispatch(requestStatus());
            return dispatch(successCategories(response.data));
        }).catch(error => {
            dispatch(requestStatus());
            console.log(error);
            console.log(error.response);
            return dispatch(catchError(error.response));
        });
    }
};