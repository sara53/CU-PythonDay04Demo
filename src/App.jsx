
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import { Login } from './components/Login';
import MyNav from './components/MyNav';
import MySlider from './components/MySlider';
import Products from './components/Products';
import { Home } from './Pages/Home';
import { ProductDetails } from './Pages/ProductDetails';
import { NotFound } from './Pages/NotFound';

function App() {
  return (
    <div>
      <MyNav />
      <Routes>
        <Route path='home' element={<Home/>} />
        <Route path='login' element={<Login/>} />
        <Route path='products' element={<Products/>} />
        <Route path='products/:id' element={<ProductDetails/>} />
        <Route path='*' element={<NotFound/>} />
        
      </Routes>
    </div>
  );
}

export default App;
