import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shipment from './components/Shipment/Shipment';

function App() {  
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element = {<Shop />} ></Route>
        <Route path='/home' element = {<Shop />} ></Route>
        <Route path='/shop' element = {<Shop />} ></Route>
        <Route path='/Orders' element = {<Orders />} ></Route>
        <Route path='/inventory' element = {
              <RequireAuth>
                <Inventory />
              </RequireAuth> 
        } ></Route>
        <Route path='/shipment' element={
          <RequireAuth>
            <Shipment />
          </RequireAuth>
        }></Route>
        <Route path='/about' element = {<About />} ></Route>
        <Route path='/login' element = {<Login />} ></Route>
        <Route path='/signup' element = {<SignUp />} ></Route>
      </Routes>
      {/* <Shop></Shop> */}
    </div>
  );
}

export default App;
