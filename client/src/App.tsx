import { Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';
import MasterSignin from './components/Auth/masterSignin';
import MasterSignup from './components/Auth/masterSignup';
import UserSignin from './components/Auth/userSignin';
import UserSignup from './components/Auth/userSignup';
import Expirience from './components/Expirience';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import MasterProfile from './components/MasterProfile';
import NewOrder from './components/NewOrder';
import OrderList from './components/OrderList';
import ServiceList from './components/ServiceList';

export default function App() {
  return (
    <>
      <Header />
      <main className="container-sm">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/'>
            <Route path='auth' element={<Auth/>} />
            <Route path='auth/usersignin' element={<UserSignin/>} />
            <Route path='auth/mastersignin' element={<MasterSignin/>} />
            <Route path='auth/usersignup' element={<UserSignup/>} />
            <Route path='auth/mastersignup' element={<MasterSignup/>} />
          </Route>

          <Route path='/expirience/:brandcar' element={<Expirience/>} />

          <Route path='/servicelist' element={<ServiceList/>} />
          <Route path='/servicelist/orderslist/:id' element={<OrderList/>} />
          <Route path='/servicelist/neworder' element={<NewOrder/>} />

          <Route path='/master/:masterid' element={<MasterProfile />}/>
          <Route path='/user/:userid' element={<MasterProfile />}/>
        </Routes>
      </main>
      <Footer/>
    </>
  );
}


