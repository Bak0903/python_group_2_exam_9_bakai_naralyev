import {combineReducers} from 'redux';
import errorReducer from "./reducerError";
import loadingReducer from "./reducerLoading";
import catalogReducer from "./setCatalog";

const rootReducer = combineReducers({
    errors: errorReducer,
    loading: loadingReducer,
    catalog: catalogReducer,
});

export default rootReducer;