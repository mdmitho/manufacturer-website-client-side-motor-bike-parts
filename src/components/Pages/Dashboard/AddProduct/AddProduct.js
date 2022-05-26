import React from 'react';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

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
        fetch("http://localhost:5000/parts", {
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
                    <span class="label-text text-white">Product Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-white">Price</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="price"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-white">Minimum Order</span>
                  </label>
                  <input
                    type="text"
                    name="minimumqQantity"
                    placeholder="Order Quantity"
                    class="input input-bordered"
                    required
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-white">Available Stock Product</span>
                  </label>
                  <input
                    type="text"
                    name="availableQquantity"
                    placeholder="Available Product"
                    class="input input-bordered"
                    required
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-white">Images</span>
                  </label>
                  <input
                    type="text"
                    name="img"
                    placeholder="Images"
                    class="input input-bordered"
                    required
                  />
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-white">Your Product Description</span>
                  </label>
                  <textarea
                    class="textarea textarea-accent"
                    name="description"
                    placeholder="Description"
                    required
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

export default AddProduct;