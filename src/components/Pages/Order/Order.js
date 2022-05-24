import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useParts from '../../../Hooks/Partsjson';
import { useAuthState,} from "react-firebase-hooks/auth";
import auth from '../../../firebase.init'
import toast from 'react-hot-toast';

const Order = () => {
    const {id} = useParams()
    const [parts] = useParts(id);
  
const [user] = useAuthState(auth)
const navigate = useNavigate();
const location = useLocation();
let from = location.state?.from?.pathname || "/services";


const handleOrder = (event) => {
  event.preventDefault();
  const img = parts.img;
  const orderQuantity=event.target.orderQuantity?.value
  console.log(orderQuantity)
  if (parts.minimumqQantity > orderQuantity) {
    toast.error(`Please Minimum products order : ${parts.minimumqQantity}`);
  } else if (parts.availableQquantity < orderQuantity) {

    toast.error(`Available Stock Products  : ${parts.availableQquantity}`);

  } else {
    const order = {
      img:img,
      email: user.email,
      service: parts.name,
      id: id,
      address: event.target.address?.value,
      phone: event.target.phone?.value,
      orderQuantity: orderQuantity,
    };

    console.log(order);
    fetch("http://localhost:5000/order", {
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
  

}

    return (
      <form onSubmit={handleOrder}>
        <div className="container mx-auto ">
          <div class="hero min-h-screen  ">
            <div class="hero-content flex-col lg:flex-row-reverse ">
              <div class="text-center lg:text-left lg-shadow">
                <img src={parts.img} alt="" />
              </div>
              <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-accent ">
                <div class="card-body">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text text-white">Your Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      value={user?.displayName}
                      class="input input-bordered"
                      required
                      readOnly
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text text-white">Your Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      value={user?.email}
                      class="input input-bordered"
                      required
                      readOnly
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text text-white">Your Parts Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      value={parts.name}
                      class="input input-bordered"
                      required
                      readOnly
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text text-white">
                        Available Stock : {parts.availableQquantity}
                      </span>
                    </label>
                    <input
                      type="number"
                      name="orderQuantity"
                      placeholder="Order Quantity"
                      class="input input-bordered"
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text text-white">Your Address</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      class="input input-bordered"
                      required
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text text-white">Your Phone Number</span>
                    </label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone Number"
                      class="input input-bordered"
                    />
                  </div>
                  <div class="form-control mt-6">
                    <button class="btn btn-primary text-white">order now</button>
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