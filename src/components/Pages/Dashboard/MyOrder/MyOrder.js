import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import axios from "axios";
// import Order from '../../../../Hooks/Order';
import MyOrders from "../MyOrders/MyOrders";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrder = async () => {
      const email = user.email;
      const url = `https://arcane-bastion-67120.herokuapp.com/order/${email}`;
      try {
        const { data } = await axios.get(url);
        setOrders(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
        }
      }
    };
    getOrder();
  }, [user]);

  const DeleteBtn = (id) => {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      const url = `https://arcane-bastion-67120.herokuapp.com/order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("sucess", data);
          const remaing = orders.filter((item) => item._id !== id);
          setOrders(remaing);
        });
    }
  };

  return (
    <div className="container mx-auto">
      <h1>My Order : {orders.length}</h1>

      <div className="m-16 overflow-x-auto">
        <table className="table w-full">
          <thead className="">
            <tr>
              <th></th>
              <th>Avatar </th>
              <th>Name</th>
              <th>Email</th>
              <th>Order Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <MyOrders
                key={order._id}
                order={order}
                // refetch={refetch}
                index={index}
                DeleteBtn={DeleteBtn}
              ></MyOrders>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
