import React from 'react';
import Star from '../../../../Hooks/Star';

const Review = (props) => {
    const { name, img, review, } = props.review;
    return (
      <div className="">
        <div class="card lg:max-w-lg  bg-accent text-white shadow-xl m-2 mt-8 ">
          <div class="avatar p-5 ">
            <div class="w-24 rounded-full">
              <img src={img} />
            </div>
          </div>
          <div class="card-body">
            <p class="card-title">{name}</p>
            <p>
             <Star></Star>
            </p>
            <p>{review}</p>
          </div>
        </div>
      </div>
    );
};

export default Review;