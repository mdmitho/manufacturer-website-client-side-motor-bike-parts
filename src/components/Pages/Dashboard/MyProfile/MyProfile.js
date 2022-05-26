import React from 'react';
import toast from 'react-hot-toast';
import { useAuthState } from "react-firebase-hooks/auth";

import auth from '../../../../firebase.init';


const MyProfile = () => {

  
const [user] = useAuthState(auth)
const img = user?.photoURL

  return (
    <div className="flex justify-center m-10  text-center">
      <div className="">
        <div class="form-control">
          <label class="label">
            <span class="label-text ">Your location </span>
          </label>
          <input
            type="text"
            placeholder="location "
            name="location"
            class="input input-bordered"
            required
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text ">Your Education</span>
          </label>
          <input
            type="text"
            placeholder="education"
            name="education"
            class="input input-bordered"
            required
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text ">Social profile link</span>
          </label>
          <input type="text"
          name='socialLink'
          placeholder="Social link" class="input input-bordered" 
          required />
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
        <div className="ml-5">
          <p>Name: {user.displayName}</p>
          <p>userId: {user.metadata?.createdAt}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;