import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Routes } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/cart' element={<Cart/>}>Cart</Route>
        <Route path='/order' element={<PlaceOrder/>}>PlaceOrder</Route>
      </Routes>
    </div>
  )
}

export default App