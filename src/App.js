import logo from './logo.svg';
import './App.css';
import Header from './pages/Home/Header/Header';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/Utilitis/Login/Login';
import Signup from './pages/Utilitis/Signup/Signup';
import Home from './pages/Home/Home/Home'
import BaskFast from './pages/Home/BackFast/BaskFast';
import Lanch from './pages/Home/Lanch/Lanch';
import Dinner from './pages/Home/Dinner/Dinner';

function App() {
  return (
    <div className="">
     <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>
        <Route path='/' element={<BaskFast></BaskFast>}></Route>
        <Route path='/brackfast' element={<BaskFast></BaskFast>}></Route>
          <Route path='lanch' element={<Lanch></Lanch>}></Route>
          <Route path='dinner' element={<Dinner></Dinner>}></Route>
         


        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        

      </Routes>

     
    </div>
  );
}

export default App;
