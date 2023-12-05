import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div class="logo">
          <img src={require("./Fashion.png")} alt="" />
        </div>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>Men</li>
          <li>Women</li>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/signup">
            <li style={{ textDecoration: "none" }}>Signup</li>
          </Link>
        </ul>
        <div class="icons">
          <img src={require("./cart.png")} alt="" />
          <img src={require("./icon.png")} alt="" />
          <img src={require("./search .png")} alt="" />
        </div>
      </header>
    );
  }
}
export default Header;
