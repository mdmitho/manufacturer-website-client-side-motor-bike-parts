import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="container mx-auto mt-24 mb-10">
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row ">
          <img
            src="https://whereismap.net/wp-content/uploads/2019/12/Where-is-Dhaka-Located-What-Country-is-Dhaka-in-Dhaka-Map-800x445.jpg"
            alt=""
          />
          <div className="text-left italic mt-16 ml-20   ">
            <h5 className="text-gray-900 text-2xl font-medium mb-2">Contact Details</h5>
            <h1 className="text-gray-900 text-xl font-medium mb-2">Find Location</h1>
            <h2>
              {" "}
              <FontAwesomeIcon className="text-primary mr-3" icon={faMapLocation} />
              Bangladesh , Dhaka
            </h2>
            <h1 className=" text-xl font-medium mb-2">Call Us 24/7</h1>
            <h2>
              {" "}
              <FontAwesomeIcon className="text-primary mr-3" icon={faMobile} />
              +880 1878573729
            </h2>
            <h1 className="text-gray-900 text-xl font-medium mb-2">Mail Us</h1>
            <h2>
              <FontAwesomeIcon className="text-primary mr-3" icon={faEnvelope} />
              mdmitho199911@gmail.com
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
