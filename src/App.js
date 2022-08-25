
import './App.css';
import { Routes, Route } from 'react-router-dom'

import Header from './componants/Header/Header';
import Home from './componants/Home/Home';
import Login from './Login/Login';
import Register from './componants/Register/Register';
import Order from './componants/Order/Order';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
