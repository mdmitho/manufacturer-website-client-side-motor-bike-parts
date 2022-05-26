import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useParts from "../../../Hooks/Partsjson";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import toast from "react-hot-toast";

const Order = () => {
  const { id } = useParams();
  const [parts] = useParts(id);

  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/services";

  const handleOrder = (event) => {
    event.preventDefault();
    const img = parts.img;
    const orderQuantity = event.target.orderQuantity?.value;
    console.log(orderQuantity);
    if (parts.minimumqQantity > orderQuantity) {
      toast.error(`Please Minimum products order : ${parts.minimumqQantity}`);
    } else if (parts.availableQquantity < orderQuantity) {
      toast.error(`Available Stock Products  : ${parts.availableQquantity}`);
    } else {
      const order = {
        img: img,
        email: user.email,
        service: parts.name,
        id: id,
        address: event.target.address?.value,
        phone: event.target.phone?.value,
        orderQuantity: orderQuantity,
      };

      console.log(order);
      fetch("https://arcane-bastion-67120.herokuapp.com/order", {
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
          navigate(from, { replace: true });
          event.target.reset();
        });
    }
  };

  return (
    <form onSubmit={handleOrder}>
      <div className="container mx-auto ">
        <div className="hero min-h-screen  ">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <div className="text-center lg:text-left lg-shadow">
              <img src={parts.img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-accent ">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    value={user?.displayName}
                    className="input input-bordered"
                    required
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Your Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    value={user?.email}
                    className="input input-bordered"
                    required
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Your Parts Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    value={parts.name}
                    className="input input-bordered"
                    required
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Order Quantity</span>
                  </label>
                  <input
                    type="number"
                    name="orderQuantity"
                    placeholder="Order Quantity"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Your Address</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Your Phone Number</span>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Phone Number"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary text-white">order now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Order;
