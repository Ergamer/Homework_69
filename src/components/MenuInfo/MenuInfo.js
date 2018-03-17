import React, {Component} from 'react';
import './MenuInfo.css';


class MenuInfo extends Component {
    render () {
        return (
            <div className="MenuInfo">
                {Object.keys(this.props.cart).map((dish) => {
                return (<div><p>{dish}</p>
                        <p>X:{this.props.cart[dish].amount}</p>
                        <p>{this.props.cart[dish].price * this.props.cart[dish].amount}</p>
                <button onClick={() => this.props.dishRemover(dish, this.props.cart[dish].price)}>Удалить блюдо</button>
                </div>
                )
            })}
                <p>Доставка: 150 KGS</p>
                <p>Итого:{this.props.summa + 150}</p>
                <button onClick={this.placeOrder}>Place order</button>
            </div>
        )
    }
}



export default MenuInfo;