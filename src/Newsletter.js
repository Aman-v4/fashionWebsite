import React from "react";
import Header from './Header';

export default function Newsletter(){
return(
  <section class="newsLetter">
  <div class="letter">
    <div class="letterLeft">
      <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
      <h3>SIGN UP NOW AND GET 75% OFF</h3>
      <button>SIGN UP NOW</button>
    </div>
    <div class="letterRight">
      <img src={require('./Image (11).png')} alt="" />
    </div>
  </div>
</section> );
}
