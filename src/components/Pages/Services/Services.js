import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../Hooks/Loading";
import Part from "../Part/Part";

const Services = () => {
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
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center my-16  text-primary">Bike parts</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5 justify-center">
        {parts.map((part) => (
          <Part key={part._id} part={part}></Part>
        ))}
      </div>
    </div>
  );
};

export default Services;
