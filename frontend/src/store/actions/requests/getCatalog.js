import {CATALOG} from "../../../api-urls";
import axios from "axios";
import {catchError} from '../actionError';
import {requestStatus} from '../actionLoading';

export const SUCCESS_CATALOG = "SUCCESS_CATALOG";

export const successCatalog = (data) => {
    return {type: SUCCESS_CATALOG, data}
};

export const getCatalog = (url) => {
    return dispatch => {
        dispatch(requestStatus());
        return axios.get(CATALOG).then(response => {
            dispatch(requestStatus());
            return dispatch(successCatalog(response.data));
        }).catch(error => {
            dispatch(requestStatus());
            console.log(error);
            console.log(error.response);
            return dispatch(catchError(error.response));
        });
    }
};