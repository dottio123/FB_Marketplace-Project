import React, { Component } from "react";
 
class Categories extends Component {
  render() {
    return (
      <div>
      <div id="Categories">
        <h2>Categories</h2>
        
        <div class="list">

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
              <div class="category_name"><h3>Homes &amp; Rentals</h3></div>
            </div>
          </div>

          <div class="category">
            <img src={require('./assets/categories/entertainment.jpeg')} alt="Entertainment"/>
            <div class="caption">
              <div class="category_name"><h3>Entertainment</h3></div>
            </div>
          </div>

          <div class="category">
            <img src={require('./assets/categories/video_games.jpeg')} alt="Video Games"/>
            <div class="caption">
              <div class="category_name"><h3>Video Games</h3></div>
            </div>
          </div>

        </div>
      </div>


      </div>
    );
  }
}
 
export default Categories;