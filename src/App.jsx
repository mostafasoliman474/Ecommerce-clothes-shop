import * as React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Shop } from './Pages/Shop';
import { ProductDetails } from './Pages/ProductDetails';
import { Blog } from './Pages/Blog';
import { About } from './Pages/About';
import { Contactus } from './Pages/Contactus';
import { Cart } from './Pages/Cart';
import LogIn from './Pages/LogIn'
import Register from './Pages/Register'
import { useSelector } from 'react-redux';
import Seccess from './Pages/Success';
import Account from './Pages/Account';

const App = () => {
  
  const { currentUser } = useSelector(state => state.user);
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='shop/category' element={<Shop />} />
          <Route path='productdetails/:id' element={<ProductDetails />} />
          <Route path='cart' element={<Cart />} />
          <Route path='register' element={currentUser ? <Navigate to='/'></Navigate> : <Register />} />
          <Route path='login' element={currentUser ? <Navigate to='/'></Navigate> : <LogIn />} />
          <Route path='blog' element={<Blog />} />
          <Route path='about' element={<About />} />
          <Route path='contactus' element={<Contactus />} />
          <Route path='success' element={<Seccess />} />
          <Route path='account' element={<Account />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App;