import {SUCCESS_LOGIN} from "../actions/requests/login";
import {LOGOUT} from "../actions/logout";
import {TOKEN_LOGIN} from "../actions/requests/token-login";

const initialState = {};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_LOGIN:
            return action.data;
        case TOKEN_LOGIN:
            return action.data;
        case LOGOUT:
            return {};
        default:
            return state;
    }
};

export default userReducer;