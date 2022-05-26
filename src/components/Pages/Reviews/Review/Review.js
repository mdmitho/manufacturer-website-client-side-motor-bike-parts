import React from "react";
import Star from "../../../../Hooks/Star";

const Review = (props) => {
  const { name, img, review } = props.review;
  return (
    <div className="">
      <div className="card lg:max-w-lg  bg-accent text-white shadow-xl m-2 mt-8 ">
        <div className="avatar p-5 ">
          {img ? (
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} />
            </div>
          ) : (
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={"https://findicons.com/files/icons/1620/crystal_project/128/personal.png"}
              />
            </div>
          )}
        </div>
        <div className="card-body">
          <p className="card-title">{name}</p>
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
