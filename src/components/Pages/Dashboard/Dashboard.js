import React from "react";
import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-primary rounded">
          <h1 className="text-3xl font-bold text-purple-500">Welcome to your Dashboard</h1>
          <Outlet />
          {/* <!-- Page content here --> */}
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/myOrder">My Orders</Link>
            </li>
            <li>
              <Link to="/addReview">Add A Review</Link>
            </li>
            <li>
              <Link to="/myProfile">My Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
