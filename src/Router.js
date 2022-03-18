import React from 'react';
import { Routes, Route, HashRouter as Routers } from 'react-router-dom';
import Persist from './pages/Persist';
import Top from './pages/Top';
import UseState from './pages/UseState';
import Recoil from './pages/Recoil';

const Router = () => {
  return (
    <Routers>
      <Routes>
        <Route path='/' element={<Top />} />
        <Route path='/usestate' element={<UseState />} />
        <Route path='/recoil' element={<Recoil />} />
        <Route path='/persist' element={<Persist />} />
      </Routes>
    </Routers>
  )
}
export default Router;