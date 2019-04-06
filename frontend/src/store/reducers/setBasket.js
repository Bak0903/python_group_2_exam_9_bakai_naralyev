import {ADD} from "../actions/basket";
import {CLEAR} from "../actions/basket";

const initialState = {};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            if (state[action.id]){
                const newState = {...state};
                const good = newState[action.id];
                good.count = good.count + 1;
                return {...newState[action.id], good};
            }
            else {
                const good = {id:action.id, name: action.name, price: action.price, count: 1};
                const newState = {...state};
                newState[action.id] = good;
                return newState;
            }
        case CLEAR:
            return {};
        default:
            return state;
    }
};

export default userReducer;