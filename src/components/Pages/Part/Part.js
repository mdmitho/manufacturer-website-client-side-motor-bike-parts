import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({part}) => {
const {name, img, price, description,minimumqQantity,availableQquantity,_id}=part
    return (
      <div>
        <div class=" card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img className="h-80" src={img} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Name : {name}</h2>
            <p>{description}</p>
            <p>Price : $ {price}</p>
            <div class="card-actions justify-end">
              <Link to={`/purchasePage/${_id}`} class="btn btn-primary text-white">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Part;