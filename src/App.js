import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Pages/Contact/Contact';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Navbar from './components/Pages/Nabvar/Navbar';
import PurchasePage from './components/PurchasePage/PurchasePage';
import  AboutUs from './components/Pages/About-Us/AboutUs'
import NotFound from './components/Pages/NotFound/NotFound';
import SignUp from './components/Pages/SignUp/SignUp';
import Blogs from './components/Pages/Blogs/Blogs';


function App() {
  return (
    <div className=" ">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/aboutUS" element={<AboutUs></AboutUs>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/purchasePage" element={<PurchasePage></PurchasePage>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
