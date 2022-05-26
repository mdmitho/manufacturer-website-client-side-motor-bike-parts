import React from 'react';

import Order from '../../../../Hooks/Order';
import MyOrders from '../MyOrders/MyOrders';



const MyOrder = () => {
  const [orders] = Order()
    return (
      <div className="container mx-auto">
        <h1>My Order : {orders.length}</h1>

        <div class="m-16 overflow-x-auto">
          <table class="table w-full">
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
                ></MyOrders>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyOrder;