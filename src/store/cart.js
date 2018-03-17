import {ADD_TO_CART, DISH_REMOVER} from "./actions";


const initialState = {
  cart: {},
    totalPrice: 0
};


const reducer = (state = initialState, action) => {
    switch  (action.type) {
        case ADD_TO_CART:
            let cart = {...state.cart};
            if(cart[action.name]) {
                cart[action.name].amount++;
            } else {
                cart[action.name] = {amount: 1, price: action.price};
            }
            console.log(cart)
            return {...state, cart, totalPrice: state.totalPrice + action.price};
        case DISH_REMOVER:
            let fufel = {...state.cart};
            if (fufel[action.name]) {
                fufel[action.name].amount--;
            } else {
                fufel[action.name] = {price: action.price};
            }
            return {...state, fufel, totalPrice: state.totalPrice - action.price};
        default:
            return state;
    }
};

export default reducer;
