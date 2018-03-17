import React, {Component} from 'react';
import './Menu.css';
import {connect} from 'react-redux';
import MenuList from "../../components/MenuList/MenuList";
import MenuInfo from "../../components/MenuInfo/MenuInfo";
import {addToCart, createOrder, fetchMenu, placeOrder, dishRemover} from "../../store/actions";


class Menu extends Component {
    // state = {
    //     price: '',
    //     foto: ''
    // };

    componentDidMount() {
        this.props.fetchMenu();
    }


    render () {
        return (
            <div className="Menu">
                <MenuList food={this.props.menu} addToCart={this.props.addToCart}/>
                <MenuInfo cart={this.props.cart} summa={this.props.summa} dishRemover={this.props.dishRemover}/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        menu: state.dishes.menu,
        summa: state.cart.totalPrice,
        cart: state.cart.cart
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (name, price) => dispatch(addToCart(name, price)),
        placeOrder: () => dispatch(placeOrder()),
        createOrder: () => dispatch(createOrder()),
        dishRemover: (name, price) => dispatch(dishRemover(name, price)),
        fetchMenu: () => dispatch(fetchMenu()),
    }
};


export default connect (mapStateToProps, mapDispatchToProps) (Menu);