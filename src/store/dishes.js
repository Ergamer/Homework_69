import {
    ADD_TO_CART, CREATE_ORDER, DISH_REMOVER, FETCH_MENU_ERROR, FETCH_MENU_REQUEST, FETCH_MENU_SUCCESS, PLACE_ORDER
} from "./actions";


const initialState = {
    menu: {},
    summa: 0,
    cart: [],
    loading: false
};


const dishes = (state = initialState, action) => {
    switch (action.type) {
        case PLACE_ORDER:
            return {...state, menu: action.menu};
        case CREATE_ORDER:
            return {...state, menu: action.menu};
        case FETCH_MENU_REQUEST:
            return {...state, loading: true};
        case FETCH_MENU_SUCCESS:
            return {...state, menu: action.info || {}, loading: false};
        case FETCH_MENU_ERROR:
            return {...state, loading: false};
        default:
            return state;
    }
};


export default dishes;