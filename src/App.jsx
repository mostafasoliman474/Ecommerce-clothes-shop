import * as React from 'react'
import { Routes,Route} from 'react-router-dom'
import { Home } from './Pages/Home'
import { Shop } from './Pages/Shop';
import { ProductDetails } from './Pages/ProductDetails';
import { Blog } from './Pages/Blog';
import { About } from './Pages/About';
import { Contactus } from './Pages/Contactus';
import { Cart } from './Pages/Cart';

 const App = () => {
  return (
   <div className='App'>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='shop' element={<Shop />}></Route>
      <Route path='productdetails' element={<ProductDetails />}></Route>
      <Route path='blog' element={<Blog />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='contactus' element={<Contactus />}></Route>
      <Route path='cart' element={<Cart />}></Route>
    </Routes>
   </div>
  )
}
export default App;