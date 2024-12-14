import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
