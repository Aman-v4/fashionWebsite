import "./App.css";

import Slider from "./Slider";
import Offer from "./Offer";
import Category from "./Category";
import Product from "./Product";
import Newsletter from "./Newsletter";
import Blogs from "./Blogs";

function App() {
  return (
    <div className="main">
      <Slider />
      <Offer />
      <Category />
      <Product />
      <Newsletter />
      <Blogs />
    </div>
  );
}

export default App;
