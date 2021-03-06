import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useParts from "../../Hooks/Partsjson";

const PurchasePage = () => {
  const { id } = useParams();
  const [parts] = useParts(id);
  return (
    <div className="container mx-auto">
      <h1>Purchse : {parts._id}</h1>

      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={parts.img} className="w-96 h-96 rounded-lg shadow-2xl " />
          <div className="m-6">
            <h1 className="text-5xl font-bold">Name : {parts.name}</h1>
            <p className="py-4">{parts.description}</p>
            <p className="py-2"> Price : ${parts.price}</p>
            <p className="py-2">Minimum Order Quantity : {parts.minimumqQantity}</p>
            <p className="py-2">Available Quantity : {parts.availableQquantity}</p>
            <Link to={`/order/${id}`} className=" btn btn-primary mt-5 text-white">
              order{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
