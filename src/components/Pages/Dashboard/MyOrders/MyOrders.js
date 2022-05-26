import React from 'react';



const MyOrders = ({ order, index, DeleteBtn }) => {
  const { service, img, email, orderQuantity ,_id} = order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-16 rounded">
            <img src={img} alt={service} />
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{email}</td>
      <td>{orderQuantity}</td>
      <td>
        <label onClick={() => DeleteBtn(_id)} for="my-modal-6" class="btn btn-xs btn-error">
          Delete
        </label>
      </td>
    </tr>
  );
};

export default MyOrders;