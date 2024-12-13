import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/homePage/HomePage';
import Footer from './customer/components/footer/Footer';
import Product from './customer/components/Product/Product';
import { BrowserRouter } from 'react-router-dom';
import ProductDetails from './customer/components/productDetails/ProductDetails';
import Cart from './customer/components/cart/Cart';
import Checkout from './customer/components/checkOut/CheckOut';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Checkout/>
        {/* <Cart/> */}
        {/* <ProductDetails/> */}
        {/* <HomePage />
        <Product /> */}
        <Footer />
      </div>
    </BrowserRouter>
    // <div className="App">
    //   <Navigation/>
    //   {/* <HomePage/> */}
    //   <Product/>
    //   <Footer/>
    // </div>

  );
}

export default App;
