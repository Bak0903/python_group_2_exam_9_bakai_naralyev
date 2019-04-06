import {SUCCESS_CATEGORIES} from "../actions/requests/getCategories";


const initialState = {};

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_CATEGORIES:
            return action.data;
        default:
            return state;
    }
};

export default categoriesReducer;