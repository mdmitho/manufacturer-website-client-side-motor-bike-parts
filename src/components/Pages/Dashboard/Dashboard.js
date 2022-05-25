import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../Hooks/useAdmin";


const Dashboard = () => {
const [user] = useAuthState(auth)
const [admin] =useAdmin(user)
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content rounded">
          <h1 className="text-3xl font-bold text-purple-500">Welcome to your Dashboard</h1>
          <Outlet />
          {/* <!-- Page content here --> */}
        </div>
        <div className="drawer-side ">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48 bg-primary  text-white">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard/myOrder">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/addReview">Add A Review</Link>
            </li>
            <li>
              <Link to="/dashboard/myProfile">My Profile</Link>
            </li>

            {admin && (
              <>
                <li>
                  <Link to="/dashboard/makeAdmin">Make Admin</Link>
                </li>
                <li>
                  <Link to="/dashboard/allOrder">All Order</Link>
                </li>
                <li>
                  <Link to="/dashboard/addProduct">Add Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageProducts">Manage Product</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
