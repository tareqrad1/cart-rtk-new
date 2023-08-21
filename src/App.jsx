import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Store from './Components/Store'
import Navbar from './Components/Navbar';
import Carts from './Components/Carts';

const App = () => {
  return (
        <>
          <Navbar />
          <Routes>
            <Route path='*' element={<h1>Not found</h1>} />
            <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Carts />} />
            <Route path='/home' element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </>
  )
}

export default App