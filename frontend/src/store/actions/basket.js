export const ADD = "ADD";
export const CLEAR = "CLEAR";


export const add = (id, name, price) => {
    return {type: ADD, id, name, price}
};

export const clear = () => {
    return dispatch => {
        dispatch({type: CLEAR});
    };
};