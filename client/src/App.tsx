import { Routes, Route, Link } from 'react-router-dom';
import Auth from './components/Auth';
import MasterSignin from './components/Auth/masterSignin';
import MasterSignup from './components/Auth/masterSignup';
import UserSignin from './components/Auth/userSignin';
import UserSignup from './components/Auth/userSignup';
import Experience from './components/Experience';
import Comment from './components/Comment';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import MasterProfile from './components/MasterProfile';
import NewOrder from './components/NewOrder';
import OrderList from './components/OrderList';
import ServiceList from './components/ServiceList';
import UserProfile from './components/UserProfile';
import AddPost from './components/AddPost';
import { useEffect, useState } from 'react';

export default function App() {
  const [scroll, setScroll] = useState(0);
  
  const handleScroll = () => {
    setScroll(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <>
      <Header />
      <main className="pt-5 main">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/'>
            <Route path='auth' element={<Auth/>} />
            <Route path='auth/usersignin' element={<UserSignin/>} />
            <Route path='auth/mastersignin' element={<MasterSignin />} />
            <Route path='auth/usersignup' element={<UserSignup/>} />
            <Route path='auth/mastersignup' element={<MasterSignup />} />
          </Route>

          <Route path='/expirience/:carBrand' element={<Experience />} />
          <Route path='/expirience/:carBrand/:id' element={<Comment />} />

          <Route path='/servicelist' element={<ServiceList/>} />
          <Route path='/servicelist/orderslist/:id' element={<OrderList />} />
          <Route path='/servicelist/neworder' element={<NewOrder/>} />

          <Route path='/master/:masterid' element={<MasterProfile />} />
          <Route path='/user/:userid' element={<MasterProfile />} />
          <Route path='/addPost/:carBrand' element={<AddPost />} />
          <Route path='/userprofile/:id' element={<UserProfile />} />
        </Routes>
        {scroll > 150
          ?
          <div onClick={() => window.scrollTo(0, 0)} className="akeconsa-udaneles rounded-3">
            <i className="fas fa-caret-up"></i>
            <i className="fas fa-caret-up"></i>
          </div>
          : null}
      </main>
       <Footer />
    </>
  );
}


