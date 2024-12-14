import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/homePage/HomePage';
import Footer from './customer/components/footer/Footer';
import Product from './customer/components/Product/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './customer/components/productDetails/ProductDetails';
import Cart from './customer/components/cart/Cart';
import Checkout from './customer/components/checkOut/CheckOut';
import Order from './customer/components/order/Order';
import OrderDetails from './customer/components/order/OrderDetails';
import CustomerRouters from './routers/CustomerRouters';

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route path='/*' element={<CustomerRouters/>}></Route>
        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
