import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/homePage/HomePage";
import Navigation from "../customer/components/navigation/Navigation";
import Footer from "../customer/components/footer/Footer";
import Cart from "../customer/components/cart/Cart";
import ProductDetails from "../customer/components/productDetails/ProductDetails";
import Product from "../customer/components/Product/Product";
import CheckOut from "../customer/components/checkOut/CheckOut";
import Order from "../customer/components/order/Order";
import OrderDetails from "../customer/components/order/OrderDetails";

export default function CustomerRouters() {
    return (
        <div>
            <div>
                <Navigation />
            </div>
            <Routes>
                <Route path="/" element={<Cart />}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/:lavelOne/:lavelTwo:/lavelThree" element={<Product/>}></Route>{/* need to fx this from video 1 */}
                <Route path="/product/:productId" element={<ProductDetails/>}></Route>
                <Route path="/checkOut" element={<CheckOut/>}></Route>
                <Route path="/account/order/:orderId" element={<OrderDetails/>}></Route>

                {/* <OrderDetails/> */}
                {/* <Order/> */}
                {/* <Checkout/> */}
                {/* <Cart/> */}
                {/* <ProductDetails/> */}
                {/* <HomePage /> */}
                {/* <Product /> */}
            </Routes>
            <div>
                <Footer />
            </div>
        </div>
    )
}