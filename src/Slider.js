import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";

export default function Slider() {
  return (
    <section class="hero">
      {
        <div class="slider">
          <FontAwesomeIcon icon={faFacebook} style={{ marginBottom: "10px" }} />
          <FontAwesomeIcon icon={faTwitter} style={{ marginBottom: "10px" }} />
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ marginBottom: "10px" }}
          />
          <FontAwesomeIcon
            icon={faGooglePlus}
            style={{ marginBottom: "10px" }}
          />

          <p>FOLLOW US</p>
        </div>
      }

      <div class="bg"></div>

      {
        <div class="texts">
          <h1>SUMMER</h1>
          <h1>COLLECTION</h1>
          <img src={require("./01.png")} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
            fermentum nibh, vel aliquet massa. Etiam in magna id risus lacinia
            luctus eget eu est.
          </p>
          <button>SHOP NOW</button>
        </div>
      }

      <div class="deal">
        <div class="dealleft"></div>
        <div class="dealright">
          <h1>SPECIAL OFFER OF THE MONTH</h1>
          <h5>Black Long Sleeve</h5>
          <div class="dealthing">
            <p>
              <span>$105</span> $65
            </p>
            <button>SHOP NOW</button>
          </div>
          <div class="dealboxes">
            <div class="dealbox">09 HOURS</div>
            <div class="dealbox">45 MINUTES</div>
            <div class="dealbox">09 SECONDS</div>
          </div>
        </div>
      </div>
    </section>
  );
}
