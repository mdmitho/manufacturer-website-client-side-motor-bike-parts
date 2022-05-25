import React from 'react';
import toast from 'react-hot-toast';
import { useAuthState } from "react-firebase-hooks/auth";

import auth from '../../../../firebase.init';


const MyProfile = () => {

  
const [user] = useAuthState(auth)
const img = user.photoURL

  return (
    <div className="flex justify-center text-center">
      <div className="">
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
      </div>
      <div className="">
        <div className="">
          <div class="avatar">
            {img ? (
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={img} />
              </div>
            ) : (
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={
                    "https://findicons.com/files/icons/1620/crystal_project/128/personal.png"
                  }
                />
              </div>
            )}
          </div>
        </div>
        <div className="">
          <p>Name: {user.displayName}</p>
          <p>userId: {user.metadata?.createdAt}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;