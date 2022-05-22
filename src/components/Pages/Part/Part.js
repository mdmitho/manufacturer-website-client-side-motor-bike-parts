import React from 'react';

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
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Part;