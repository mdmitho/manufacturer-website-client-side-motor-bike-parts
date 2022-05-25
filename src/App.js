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
import  Footers from './Hooks/Footers';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Services from './components/Pages/Services/Services';
import Order from './components/Pages/Order/Order';
import Dashboard from './components/Pages/Dashboard/Dashboard';

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
        <Route path="/order/:id" element={<Order></Order>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route
          path="/purchasePage/:id"
          element={
            <RequireAuth>
              <PurchasePage></PurchasePage>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/myOrder" element={<Dashboard></Dashboard>}></Route>
        <Route path="/addReview" element={<Dashboard></Dashboard>}></Route>
        <Route path="/myProfile" element={<Dashboard></Dashboard>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footers></Footers>
      <Toaster />
    </div>
  );
}

export default App;
