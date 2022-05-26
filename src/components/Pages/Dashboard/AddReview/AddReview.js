import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import auth from '../../../../firebase.init';

const AddReview = () => {

    const [user] = useAuthState(auth)
    const img = user?.photoURL;

    const handleOrder = (event) => {
      event.preventDefault();

      const order = {
        name: event.target.name?.value,
        review:event.target.review?.value,
        img: img,
      };

      console.log(order);
      fetch("http://localhost:5000/review", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            toast.success("Your Review Completed");
          }
          Navigate("/dashboard");
          event.target.reset();
        });
    }


    return (
      <form onSubmit={handleOrder}>
        <div className="container mx-auto ">
          <div class="hero min-h-screen  ">
            <div class="hero-content flex-col lg:flex-row-reverse "></div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-accent ">
              <div class="card-body">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-white">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    class="input input-bordered"
                  />
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-white">Your review </span>
                  </label>
                  <textarea
                    class="textarea textarea-accent"
                    name="review"
                    placeholder="review"
                    requiredreview
                  ></textarea>
                </div>

                <div class="form-control mt-6">
                  <button class="btn btn-primary text-white">Add product</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
};

export default AddReview;