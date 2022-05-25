import React from 'react';

const AllOrderDisplay = ({order,index}) => {

const { address, email, phone, orderQuantity, service } = order
    return (
      <tr>
        <th>{index + 1}</th>
        <td>{service}</td>
        <td> {email}</td>
        <td>{phone}</td>
        <td> {orderQuantity}</td>
        <td> {address}</td>
      </tr>
    );
};

export default AllOrderDisplay;