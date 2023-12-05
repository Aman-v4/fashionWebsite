import React from "react";
import Header from './Header';

export default function Offer(){
return(
    
  <section class="offers">
  <ul>
    <li>All</li>
    <li>Spring-Summer</li>
    <li>Sweatshirt</li>
    <li>Sneakers</li>
    <li>Gadgets</li>
    <li>Outdoor</li>
  </ul>

  <div class="imageWrapper">
    <div class="w1">
      <img src={require('./Image (1).png')} alt="" />
      <img src="img2.png" alt="" />
    </div>
    <div class="w2">
      <img src={require('./Image (2) (2).png')} alt="" />
      <div class="w2text">
        <p>Winter Jacket</p>
        <h2>Vintage Look For Women</h2>
        <button>Shop Now</button>
      </div>
      <div class="rech">
        <img src={require('./image (15).png')} alt="" />
      </div>
    </div>
    <div class="w3">
      <img src={require('./Image (2).png')} alt="" />
      <div class="w3text">
        <p>Winter Jacket</p>
        <h5>Fashion For Men</h5>
        <button>Shop Now</button>
      </div>
      <img src={require('./Image (3).png')} alt="" />
    </div>
    <img src="background copy 3.png" alt="" />
  </div>
</section> 
);
}
