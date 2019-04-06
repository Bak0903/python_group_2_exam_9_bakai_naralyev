import {SUCCESS_CATALOG} from "../actions/requests/getCatalog";


const initialState = {};

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_CATALOG:
            return Object.values(action.data).sort(function(a,b){
                  return new Date(b.receipt_date) - new Date(a.receipt_date);
                });
        default:
            return state;
    }
};

export default listReducer;