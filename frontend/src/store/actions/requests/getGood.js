import {CATALOG} from "../../../api-urls";
import axios from "axios";
import {catchError} from '../actionError';
import {requestStatus} from '../actionLoading';

export const SUCCESS_GOOD = "SUCCESS_GOOD";

export const successGood = (data) => {
    return {type: SUCCESS_GOOD, data}
};

export const getGood = (id) => {
    return dispatch => {
        dispatch(requestStatus());
        return axios.get(CATALOG + id).then(response => {
            dispatch(requestStatus());
            return dispatch(successGood(response.data));
        }).catch(error => {
            dispatch(requestStatus());
            console.log(error);
            console.log(error.response);
            return dispatch(catchError(error.response));
        });
    }
};