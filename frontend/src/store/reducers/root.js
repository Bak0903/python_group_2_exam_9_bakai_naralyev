import {combineReducers} from 'redux';
import errorReducer from "./reducerError";
import loadingReducer from "./reducerLoading";
import catalogReducer from "./setCatalog";
import categoriesReducer from './setCategories';
import goodReducer from './setGood';

const rootReducer = combineReducers({
    errors: errorReducer,
    loading: loadingReducer,
    catalog: catalogReducer,
    categories: categoriesReducer,
    good: goodReducer
});

export default rootReducer;