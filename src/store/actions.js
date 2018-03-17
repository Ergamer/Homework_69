import axios from '../axios-menu';


export const ADD_TO_CART = 'ADD_TO_CART';
export const PLACE_ORDER = 'PLACE_ORDER';
export const CREATE_ORDER = 'CREATE_ORDER';
export const DISH_REMOVER = 'DISH_REMOVER';
export const FETCH_MENU_REQUEST = 'FETCH_MENU_REQUEST';
export const FETCH_MENU_SUCCESS = 'FETCH_MENU_SUCCESS';
export const FETCH_MENU_ERROR = 'FETCH_MENU_ERROR';





export const addToCart = (name, price) => {
    return {type: ADD_TO_CART, name, price}
};

export const placeOrder = (menu) => {
    return (dispatch, getState) => {
        dispatch(fetchMenuRequest());
        axios.post('/food.json', {menu: menu}).then(() => {
           dispatch(fetchMenu());
        });
    }
};

export const createOrder = (menu) => {
    return (dispatch, getState) => {
        dispatch(fetchMenuRequest());
        axios.post('/food.json', {menu: menu}).then(() => {
            dispatch(fetchMenu());
        })
    }
};


export const dishRemover = (name, price) => {
  return {type: DISH_REMOVER, name, price}
};

export const fetchMenuRequest = () => {
    return {type: FETCH_MENU_REQUEST};
};

export const fetchMenuSuccess = (info) => {
    return {type: FETCH_MENU_SUCCESS, info}
};

export const fetchMenuError = () => {
    return {type: FETCH_MENU_ERROR}
};



export const fetchMenu = () => {
    return dispatch => {
        dispatch(fetchMenuRequest());
        axios.get('/food.json').then(response => {
            console.log(response.data);
            dispatch(fetchMenuSuccess(response.data));
        }, error => {
            dispatch(fetchMenuError());
        });
    }
};