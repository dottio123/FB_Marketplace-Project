import React, { Component } from "react";
 
class Stores extends Component {
  render() {
    return (
      <div>
      <div id="Stores">
        <h2>Stores</h2>
        
        <div class="list">

          <div class="category">
            <img src={require('./assets/stores/fb_logo.png')} alt="Facebook's Featured"/>
            <div class="caption">
              <div class="category_name"><h3>Facebook's Featured Deals</h3></div>
            </div>
          </div>

          <div class="category">
            <img src={require('./assets/stores/daily_steals.png')} alt="Daily Steals"/>
            <div class="caption">
              <div class="category_name"><h3>Daily Steals</h3></div>
            </div>
          </div>
  
          <div class="category">
            <img src={require('./assets/stores/opensky.png')} alt="OpenSky Store"/>
            <div class="caption">
              <div class="category_name"><h3>OpenSky Store</h3></div>
            </div>
          </div>

          <div class="category">
            <img src={require('./assets/stores/mobstub.png')} alt="MobStub Daily Deals"/>
            <div class="caption">
              <div class="category_name"><h3>MobStub Daily Deals</h3></div>
            </div>
          </div>

          <div class="category">
            <img src={require('./assets/stores/shopping_network.png')} alt="Shopping Network"/>
            <div class="caption">
              <div class="category_name"><h3>Shopping Network</h3></div>
            </div>
          </div>

          <div class="category">
            <img src={require('./assets/stores/alatac.png')} alt="Alatac"/>
            <div class="caption">
              <div class="category_name"><h3>Alatac</h3></div>
            </div>
          </div>

          <div class="category">
            <img src={require('./assets/stores/paypal.png')} alt="PayPal"/>
            <div class="caption">
              <div class="category_name"><h3>PayPal</h3></div>
            </div>
          </div>

          <div class="category">
            <img src={require('./assets/stores/groupon.png')} alt="Groupon"/>
            <div class="caption">
              <div class="category_name"><h3>Groupon</h3></div>
            </div>
          </div>

        </div>
      </div>
      </div>
    );
  }
}
 
export default Stores;