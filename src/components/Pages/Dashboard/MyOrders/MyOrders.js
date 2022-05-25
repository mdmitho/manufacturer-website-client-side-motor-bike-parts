import React from 'react';

const MyOrders = ({order,index}) => {
    const {service, img, email,orderQuantity}=order
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
          {/* onClick={() => setDeletingDoctor(doctor)} */}
          <label for="my-modal-6" class="btn btn-xs btn-error">
            Delete
          </label>
        </td>
      </tr>
    );
};

export default MyOrders;