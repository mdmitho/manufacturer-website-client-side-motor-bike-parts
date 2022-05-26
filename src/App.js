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
import MyOrder from "./components/Pages/Dashboard/MyOrder/MyOrder";
import AddReview from './components/Pages/Dashboard/AddReview/AddReview';
import MyProfile from './components/Pages/Dashboard/MyProfile/MyProfile';
import MakeAdmin from './components/Pages/Dashboard/MakeAdmin/MakeAdmin';
import AllOrder from './components/Pages/Dashboard/AllOrder/AllOrder';
import ManageProducts from './components/Pages/Dashboard/ManageProducts/ManageProducts';
import AddProduct from './components/Pages/Dashboard/AddProduct/AddProduct';

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
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/purchasePage/:id"
          element={
            <RequireAuth>
              <PurchasePage></PurchasePage>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route path="myOrder" element={<MyOrder></MyOrder>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
          <Route path="/dashboard/allOrder" element={<AllOrder></AllOrder>}></Route>
          <Route path="/dashboard/makeAdmin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path="/dashboard/manageProducts" element={<ManageProducts></ManageProducts>}></Route>
          <Route path="/dashboard/AddProduct" element={<AddProduct></AddProduct>}></Route>
        </Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footers></Footers>
      <Toaster />
    </div>
  );
}

export default App;
