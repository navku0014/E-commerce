import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/homePage/HomePage';
import Footer from './customer/components/footer/Footer';
import Product from './customer/components/Product/Product';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        {/* <HomePage /> */}
        <Product />
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
