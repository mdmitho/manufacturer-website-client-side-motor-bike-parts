import React from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const AddProduct = () => {
  const handleOrder = (event) => {
    event.preventDefault();

    const order = {
      name: event.target.name?.value,
      price: event.target.price?.value,
      minimumqQantity: event.target.minimumqQantity?.value,
      description: event.target.description?.value,
      availableQquantity: event.target.availableQquantity?.value,
      img: event.target.img?.value,
    };

    console.log(order);
    fetch("https://arcane-bastion-67120.herokuapp.com/parts", {
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
          toast.success("Your Order Completed");
        }
        Navigate("/services");
        event.target.reset();
      });
  };

  return (
    <form onSubmit={handleOrder}>
      <div className="container mx-auto ">
        <div className="hero min-h-screen  ">
          <div className="hero-content flex-col lg:flex-row-reverse "></div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-accent ">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Product Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="price"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Minimum Order</span>
                </label>
                <input
                  type="text"
                  name="minimumqQantity"
                  placeholder="Order Quantity"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Available Stock Product</span>
                </label>
                <input
                  type="text"
                  name="availableQquantity"
                  placeholder="Available Product"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Images</span>
                </label>
                <input
                  type="text"
                  name="img"
                  placeholder="Images"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Your Product Description</span>
                </label>
                <textarea
                  className="textarea textarea-accent"
                  name="description"
                  placeholder="Description"
                  required
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">Add product</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
