import React, {Component} from 'react';
import './OneMenu.css';

class OneMenu extends Component {

    render () {
      return (
          <div className="OneMenu">
              <img src={this.props.foto} alt=""/>
              <h2>{this.props.title}</h2>
              <p>{this.props.price}</p>
              <button className="AddButton"
                  onClick={this.props.addToCart}>Add to cart</button>
          </div>
      );
    }
}

export default OneMenu;