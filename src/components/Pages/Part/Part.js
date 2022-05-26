import React from "react";
import { Link } from "react-router-dom";

const Part = ({ part }) => {
  const { name, img, price, description, minimumqQantity, availableQquantity, _id } = part;
  return (
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
            <Link to={`/purchasePage/${_id}`} className="btn btn-primary text-white">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part;
