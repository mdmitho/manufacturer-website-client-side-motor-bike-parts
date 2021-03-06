import React from "react";

const ManagOrderDispaly = ({ part, DeleteBtn }) => {
  const { name, img, price, description, _id } = part;
  return (
    <div>
      <div>
        <div className=" card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img className="h-80" src={img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name : {name}</h2>
            <p>{description}</p>
            <p>Price : $ {price}</p>
            <div className="card-actions justify-center">
              <button
                onClick={() => DeleteBtn(part._id)}
                className="btn btn-primary text-white"
              >
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
