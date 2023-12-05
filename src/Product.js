import React from "react";
import Header from './Header';

export default function Product(){
return(
    <section class="products">
    <h1>Featured products</h1>
    <ul>
      <li>All</li>
      <li>Spring-Summer</li>
      <li>Sweatshirt</li>
      <li>Sneakers</li>
      <li>Gadgets</li>
      <li>Outdoor</li>
    </ul>

    <div class="productWrapper">
      <div class="product">
        <img src={require('./Image (7).png')} alt="" />
        <h6>Ted Baker Womens Light</h6>
        <p>Gucci</p>
        <p class="price"><span>$70.00</span> $120.00</p>
      </div>
      <div class="product">
        <img src={require('./Image (8).png')} alt="" />
        <h6>Ted Baker Womens Light</h6>
        <p>Gucci</p>
        <p class="price"><span>$70.00</span> $120.00</p>
      </div>
      <div class="product">
        <img src={require('./Image (9).png')} alt="" />
        <h6>Ted Baker Womens Light</h6>
        <p>Gucci</p>
        <p class="price"><span>$70.00</span> $120.00</p>
      </div>
      <div class="product">
        <img src={require('./Image (10).png')} alt="" />
        <h6>Ted Baker Womens Light</h6>
        <p>Gucci</p>
        <p class="price"><span>$70.00</span> $120.00</p>
      </div>
    </div>
    <button class="productButton">SHOW MORE</button>
  </section>
);
}
