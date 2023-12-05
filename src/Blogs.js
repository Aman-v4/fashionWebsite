import React from "react";
import Header from './Header';

export default function Blogs(){
return(
    <section class="blogs">
    <h1>OUR BLOGS & NEWS</h1>

    <div class="blogsWrapper">
      <div class="blog">
        <img src={require('./Image (12).png')} alt="" />
        <div class="blogText">
          <h3>THE 15 SECRETS ABOUT FASHION PEOPLE</h3>
          <p>January 12, 2020 by admin</p>
        </div>
      </div>
      <div class="blog">
        <img src={require('./Image (13).png')}alt="" />
        <div class="blogText">
          <h3>THE 15 SECRETS ABOUT FASHION PEOPLE</h3>
          <p>January 12, 2020 by admin</p>
        </div>
      </div>
    </div>
  </section>
);

}
