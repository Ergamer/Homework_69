import React, {Component} from 'react';
import './MenuList.css';
import OneMenu from "../OneMenu/OneMenu";


class MenuList extends Component {

    render () {
        console.log(this.props.food);
        return (
            <div className="MenuList">
                {Object.keys(this.props.food).map((dish) =>{
                    return (<OneMenu foto={this.props.food[dish].foto}
                                     title={dish}
                                     price={this.props.food[dish].price}
                                     addToCart={() => this.props.addToCart(dish, this.props.food[dish].price)}
                    />)
                })}
            </div>
        );
    }
}

export default MenuList;