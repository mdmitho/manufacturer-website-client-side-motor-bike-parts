import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../../../Hooks/Loading";
import ManagOrderDispaly from "./ManagOrderDispaly/ManagOrderDispaly";

const ManageProducts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    fetch("https://arcane-bastion-67120.herokuapp.com/parts")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);

  const DeleteBtn = (id) => {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      const url = `https://arcane-bastion-67120.herokuapp.com/parts/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("sucess", data);
          const remaing = parts.filter((item) => item._id !== id);
          setParts(remaing);
        });
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center my-16  text-primary">Bike parts</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5 justify-center">
        {parts.map((part, index) => (
          <ManagOrderDispaly
            index={index}
            key={part._id}
            part={part}
            // refetch={refetch}
            DeleteBtn={DeleteBtn}
          >
            {" "}
          </ManagOrderDispaly>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
