import React from 'react';

const ManagOrderDispaly = ({ part, DeleteBtn }) => {
  const { name, img, price, description, _id } = part;
  return (
    <div>
      <div>
        <div class=" card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img className="h-80" src={img} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Name : {name}</h2>
            <p>{description}</p>
            <p>Price : $ {price}</p>
            <div class="card-actions justify-center">
              <button onClick={() => DeleteBtn(part._id)} class="btn btn-primary text-white">
               Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagOrderDispaly;