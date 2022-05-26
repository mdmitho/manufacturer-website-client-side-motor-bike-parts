import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../../../Hooks/Loading";
import Part from "../Part/Part";

const Parts = () => {
  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery(["parts"], () =>
    fetch("https://arcane-bastion-67120.herokuapp.com/parts").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="">
      <h1 className="text-2xl font-bold text-center my-16  text-primary">Bike parts</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5 justify-center">
        {parts.slice(0, 3).map((part) => (
          <Part key={part._id} part={part}></Part>
        ))}
      </div>
      <div className="text-center my-10 ">
        <Link className="btn btn-primary text-white " to="/services">
          All Parts
        </Link>
      </div>
    </div>
  );
};

export default Parts;
