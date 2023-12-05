import React from "react";
import Header from './Header';

export default function Category(){
return(
    <section class="category">
    <h1>Product Types</h1>
    <h5>up to 30% discount</h5>

    <div class="categoryWrapper">
      <div class="cat">
        <img src={require('./Image (4).png')}alt="" />
        <button>Shop Men</button>
      </div>
      <div class="cat">
        <img src={require('./Image (5).png')} alt="" />
        <button>Shop Women</button>
      </div>
      <div class="cat">
        <img src={require('./Image (6).png')} alt="" />
        <button>Shop Kids</button>
      </div>
    </div>
  </section>);
}
