import {combineReducers} from 'redux';
import errorReducer from "./reducerError";
import loadingReducer from "./reducerLoading";
import catalogReducer from "./setCatalog";
import categoriesReducer from './setCategories';
import goodReducer from './setGood';
import userReducer from './setUser';
import basketReducer from './setBasket';

const rootReducer = combineReducers({
    errors: errorReducer,
    loading: loadingReducer,
    catalog: catalogReducer,
    categories: categoriesReducer,
    good: goodReducer,
    user: userReducer,
    basket: basketReducer
});

export default rootReducer;