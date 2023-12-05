import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Add this line to include Bootstrap CSS

class Yhanu extends React.Component {
  render() {
    return (
      <div className="container">
        {/* <!-- Header --> */}
        <header>
      <div class="logo"><img src={require('./Fashion.png')} alt="" /></div>
      <ul>
        <li>Home</li>
        <li>Men</li>
        <li>Women</li>
        <li>Shop</li>
        <li>Find Stores</li>
      </ul>
      <div class="icons">
        <img src={require('./cart.png')} alt="" /><img src={require('./icon.png')} alt="" /><img
          src={require('./search .png')}
          alt=""
        />
      </div>
    </header>

        {/* <!-- Hero --> */}
        <section className="hero">
          {/* ... your existing code ... */}
        </section>



          {/* <!-- texts --> */}
      <div className="texts">
        <h1>SUMMER</h1>
        <h1>COLLECTION</h1>
        <img src={require('./01.png')} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
          fermentum nibh, vel aliquet massa. Etiam in magna id risus lacinia
          luctus eget eu est.
        </p>
        <button>SHOP NOW</button>
      </div>

      {/* <!-- deal --> */}
      <div className="deal">
        <div class="dealleft"></div>
        <div class="dealright">
          <h1>SPECIAL OFFER OF THE MONTH</h1>
          <h5>Black Long Sleeve</h5>
          <div class="dealthing">
            <p><span>$105</span> $65</p>
            <button>SHOP NOW</button>
          </div>
          <div class="dealboxes">
            <div class="dealbox">09 HOURS</div>
            <div class="dealbox">45 MINUTES</div>
            <div class="dealbox">09 SECONDS</div>
          </div>
        </div>
      </div>

        {/* <!-- -----offers--- --> */}
        <section className="offers">
        <ul>
        <li>All</li>
        <li>Spring-Summer</li>
        <li>Sweatshirt</li>
        <li>Sneakers</li>
        <li>Gadgets</li>
        <li>Outdoor</li>
      </ul>

      <div class="imageWrapper">
        <div className="w1">
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
            <img src={require('./image (15).png')} />
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

        {/* <!------ category ------> */}
        <section className="category">
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
    </section>

        {/* <!-------- products --------> */}
        <section className="products">
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
        {/* <!-- -----newsLetter----- --> */}
        <section className="newsLetter">
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
    </section>

        {/* <!-- -----blogs------ --> */}
        <section className="blogs">
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

        {/* <!------- footer -------> */}
        <footer>
        <div class="footerWrapper">
        <div class="foot">
          <h4>Information</h4>
          <p>The brand</p>
          <p>local brands</p>
          <p>customer service</p>
          <p>privacy & cookies</p>
          <p>site map</p>
        </div>
        <div class="foot">
          <h4>my profile</h4>
          <p>getting started</p>
          <p>FAQs</p>
          <p>buying guide</p>
          <p>order returns</p>
          <p>affiliate program</p>
        </div>
        <div class="foot">
          <h4>Your account</h4>
          <p>shipping & returns</p>
          <p>secure shopping</p>
          <p>testimonials</p>
          <p>award winning</p>
          <p>ethical trading</p>
        </div>
        <div class="foot">
          <h4>lookbonk</h4>
          <p>getting started</p>
          <p>FAQs</p>
          <p>buying guide</p>
          <p>order returns</p>
          <p>affiliate program</p>
        </div>
        <div class="foot lh">
          <h4>CONTACT DETAILS</h4>
          <p><span>Telephone:</span> 0123-456-789</p>
          <p><span>Email:</span> xyz@gmail.com</p>
          <p>
            <span>Head Office</span> 245 Yellow House,<br />
            Main Street London 456789
          </p>
        </div>
      </div>
    </footer>
      </div>
    );
  }
}

export default Yhanu;
