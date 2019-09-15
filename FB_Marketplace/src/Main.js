import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import Stores from "./Stores";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div id="navbar">
          <a href="/Home"><img id="main_logo" src={require('./assets/menu/logo_white.png')} alt="FB Marketplace Logo" width="423px"/></a>
              <input id="searchbar" type="text" placeholder="Search Marketplace"></input>
              <img id="search_icon" src={require('./assets/menu/search_icon.png')} alt="Search" width="27.14px"/>
              <img id="profile" src={require('./assets/menu/profile.png')} alt="profile_photo" width="48px" />
              <p id="username">D'Ontre</p>
            <h1>
              <ul className="header">
                <img id="location" src={require('./assets/menu/location_icon.png')} alt="Messenger" width="19px" height="30px"/>
                <li> Chesapeake, VA 23322</li>
                <li><NavLink to="/Categories">Categories</NavLink></li>
                <li>Deals</li>
                <li><NavLink to="/Stores">Stores</NavLink></li>
                <li>Groups</li>
                <li>Classifieds</li>
                <li>Buying</li>
                <li>Selling</li>
                <li><img src={require('./assets/menu/messenger_icon.png')} alt="Messenger" width="35px" height="35px"/></li>
                <li><img src={require('./assets/menu/notification_icon.png')} alt="Notifications" width="34px"/></li>
              </ul>
            </h1>
          </div>
            <div className="content">
            <Route exact path="/" component={Home}/>
              <Route path="/Categories" component={Categories}/>
              <Route path="/Stores" component={Stores}/>
            </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;