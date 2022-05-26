import React, { useEffect, useState } from "react";
import AllOrderDisplay from "../AllOrderDisplay/AllOrderDisplay";

const AllOrder = () => {
  const [allorders, setAllOrders] = useState([]);
  console.log(allorders);
  useEffect(() => {
    const url = `https://arcane-bastion-67120.herokuapp.com/order`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
      });
  }, []);
  return (
    <div className="container mx-auto">
      <div>
        <h2>All Order {allorders?.length}</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Service Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Order Quantity</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {allorders?.map((order, index) => (
                <AllOrderDisplay key={order._id} order={order} index={index}></AllOrderDisplay>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllOrder;
