import React, { useEffect, useState } from 'react';
import AllOrderDisplay from '../AllOrderDisplay/AllOrderDisplay';

const AllOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
      const url = `http://localhost:5000/order`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setOrders(data);
        });
    }, []);
    return (
        <div className='container mx-auto'>
                      <div>
                    <h2>All Order {orders.length}</h2>
                    <div class="overflow-x-auto">
                        <table class="table w-full">
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
                            {
                           orders.map((order,index)=><AllOrderDisplay
                           key={order._id}
                           order={order}
                           index={index}
                           
                           ></AllOrderDisplay>)
                       }
        
        
                            </tbody>
                        </table>
                    </div>
                </div>
                   
                       
                   
                </div>
    );
};

export default AllOrder;