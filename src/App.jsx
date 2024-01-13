import * as React from 'react'
import {BrowserRouter as Router, Routes,Route,Navigate} from 'react-router-dom'
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
 const App = () => {
  const {currentUser}=useSelector(state=>state.user);
  return (
   <div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='shop' element={<Shop />}></Route>
        <Route path='productdetails' element={<ProductDetails />}></Route>
        <Route path='blog' element={<Blog />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='contactus' element={<Contactus />}></Route>
        <Route path='cart' element={<Cart />}></Route>
        <Route path='register' element={currentUser?<Navigate to='/'></Navigate>:<Register />}></Route>
        <Route path='login' element={currentUser?<Navigate to='/'></Navigate>:<LogIn />}></Route>
      </Routes>
    </Router>
   </div>
  )
}
export default App;