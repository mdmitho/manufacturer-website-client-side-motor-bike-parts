import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({part}) => {
    return (
      <div>
        <div class="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img src={part.img} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Name : {part.name}</h2>
            <p>{part.description}</p>
            <p>Price : $ {part.price}</p>
            <p>Minimum order quantity : {part.minimumqQantity}</p>
            <p>Available quantity : {part.availableQquantity}</p>
            <div class="card-actions justify-end">
              <Link to="/purchasePage" class="btn btn-primary text-white">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Part;