import React, { Component } from 'react';
import './App.css';
import {Switch,Route,NavLink} from "react-router-dom";
import Menu from "./containers/Menu/Menu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavLink to="/menu">Menu</NavLink>
        <Switch>
            <Route path="/menu" exact component={Menu}/>
        </Switch>
      </div>
    );
  }
}

export default App;
