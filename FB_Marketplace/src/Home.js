import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
      <div id="last_viewed">
        <h2>Pick Up Where You Left Off</h2>
        
        <div class="placement">

          <div class="card">
            <img src={require('./assets/images/65inch_tv.jpg')} alt="lv1"/>
            <div class="caption">
              <div class="price_tag"><h3>$300</h3></div>
              <h3 class="title">65" Roku TV</h3>
              <p>Portsmouth, VA</p>
            </div>
          </div>

          <div class="card">
            <img class="item_image" src={require('./assets/images/oculus.jpg')} alt="lv2" width="100%"/>
            <div class="caption">
            <div class="price_tag"><h3>$150</h3></div>
            <h3 class="title">Oculus Rift</h3>
              <p>Chesapeake, VA</p>
            </div>
          </div>
  
          <div class="card">
            <img src={require('./assets/images/dove_men.jpg')} alt="lv3" width="100%"/>
            <div class="caption">
            <div class="price_tag"><h3>$20</h3></div>
            <h3 class="title">Dove Men Bundle</h3>
              <p>Portsmouth, VA</p>
            </div>
          </div>
        </div>
      </div>


      <div id="top_picks">
        <h2>Top Picks</h2>
        
        <div class="placement">

          <div class="card">
            <img src={require('./assets/images/nintendo_switch.jpg')} alt="lv1"/>
            <div class="caption">
              <div class="price_tag"><h3>$300</h3></div>
              <h3 class="title">Nintendo Switch</h3>
              <p>Hampton, VA</p>
            </div>
          </div>

          <div class="card">
            <img class="item_image" src={require('./assets/images/wireless_earbuds.jpg')} alt="lv2" width="100%"/>
            <div class="caption">
            <div class="price_tag"><h3>$150</h3></div>
            <h3 class="title">Ideation Wireless Earbuds</h3>
              <p>Daily Steals</p>
            </div>
          </div>
  
          <div class="card">
            <img src={require('./assets/images/living_room.jpg')} alt="lv3" width="100%"/>
            <div class="caption">
            <div class="price_tag"><h3>FREE</h3></div>
              <h3 class="title">Living Room Set</h3>
              <p>Chesapeake, VA</p>
            </div>
          </div>
            
          <div class="card">
            <img src={require('./assets/images/custom_pc.jpg')} alt="lv3" width="100%"/>
            <div class="caption">
            <div class="price_tag"><h3>$40</h3></div>
            <h3 class="title">Custom Gaming PC</h3>
              <p>Virginia Beach, VA</p>
            </div>
          </div>
            
          <div class="card">
            <img src={require('./assets/images/avocado_box.jpg')} alt="lv3" width="100%"/>
            <div class="caption">
            <div class="price_tag"><h3>$9.99</h3></div>
            <h3 class="title">Avocado Box</h3>
              <p>MoStub Daily Steals</p>
            </div>
          </div>
            
          <div class="card">
            <img src={require('./assets/images/switch_2.jpg')} alt="lv3" width="100%"/>
            <div class="caption">
            <div class="price_tag"><h3>$350</h3></div>
            <h3 class="title">Nintendo Switch w/ 2 Games</h3>
              <p>Norfolk, VA</p>
            </div>
          </div>
            
          <div class="card">
            <img src={require('./assets/images/phone_repair.jpg')} alt="lv3" width="100%"/>
            <div class="caption">
            <div class="price_tag"><h3>$20</h3></div>
            <h3 class="title">We Repair All Phones and Tablets!</h3>
              <p>Norfolk, VA</p>
            </div>
          </div>
            
          <div class="card">
            <img src={require('./assets/images/lenovo_yoga.jpg')} alt="lv3" width="100%"/>
            <div class="caption">
            <div class="price_tag"><h3>$100</h3></div>
            <h3 class="title">Lenovo Yoga</h3>
              <p>Suffolk, VA</p>
            </div>
          </div>
        </div>
      </div>

      <div id="top_categories">
        <h2>Top Categories</h2>
        
        <div class="placement">

          <div class="category">
            <img src={require('./assets/categories/car_lot.jpg')} alt="Vehicles"/>
            <div class="caption">
              <div class="category_name"><h3>Vehicles</h3></div>
            </div>
          </div>

          <div class="category">
            <img src={require('./assets/categories/clothing.jpg')} alt="Clothing"/>
            <div class="caption">
              <div class="category_name"><h3>Clothing</h3></div>
            </div>
          </div>
  
          <div class="category">
            <img src={require('./assets/categories/electronics.jpg')} alt="Electronics"/>
            <div class="caption">
              <div class="category_name"><h3>Electronics</h3></div>
            </div>
          </div>

          <div class="category">
            <img src={require('./assets/categories/homes.jpg')} alt="Homes"/>
            <div class="caption">
              <div class="category_name"><h3>Homes</h3></div>
            </div>
          </div>

        </div>
      </div>


      </div>
    );
  }
}
 
export default Home;