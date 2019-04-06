import {SUCCESS_GOOD} from "../actions/requests/getGood";


const initialState = {};

const goodReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_GOOD:
            return action.data;
        default:
            return state;
    }
};

export default goodReducer;