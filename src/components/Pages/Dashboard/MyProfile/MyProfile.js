import React from 'react';
import toast from 'react-hot-toast';
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import auth from '../../../../firebase.init';
import useParts from '../../../../Hooks/Partsjson';

const MyProfile = () => {

    const {id} = useParams()
    const [parts] = useParts(id);
  
const [user] = useAuthState(auth)
const navigate = useNavigate();
const location = useLocation();
let from = location.state?.from?.pathname || "/dashboard";




  const handleOrder = (event) => {
    event.preventDefault();
    const Profile = {
      email: user.email,
      name: user.displayName,
      phone: event.target.phone?.value,
      education: event.target.education?.value,
      location: event.target.location?.value,
      linkedInLink: event.target.linkedInLink?.value,
    };

      console.log(Profile);
      fetch("http://localhost:5000/profile", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify(Profile),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            toast.success("Update your Profile Completed");
          }
          navigate(from, { replace: true });
          event.target.reset();
        });
  };

  return (
    <div>
      <form onSubmit={handleOrder}>
        <div className="container mx-auto ">
          <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse ">
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
                      <span class="label-text text-white w-96">Your Education</span>
                    </label>
                    <input
                      type="text"
                      name="education"
                      placeholder="education"
                      class="input input-bordered"
                      required
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text text-white">Your location</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="city"
                      class="input input-bordered"
                      required
                    />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text text-white">Your LinkedIn profile link</span>
                    </label>
                    <input
                      type="text"
                      name="linkedInLink"
                      placeholder="LinkedIn Link"
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
                    <button class="btn btn-primary text-white">Update your Profile</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;