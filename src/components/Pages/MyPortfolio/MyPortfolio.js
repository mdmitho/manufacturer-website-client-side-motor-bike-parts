import React from "react";
import myimg from "../../../assets/myimg.png";
import Progress from "../../../Hooks/Progress";
const MyPortfolio = () => {
  return (
    <div className="container mx-auto">
      <div className="card lg:card-side bg-base-100 shadow-xl ">
        <figure>
          <img className="" src={myimg} alt="Album" />
        </figure>
        <div className="card-body mt-16 ">
          <h2 className=" card-title ">My Name : Hossen</h2>
          <h1>Educational : BS.c first years </h1>
          <h1>I currently want to learn web development at Programming Hero</h1>
          <p>Email : mdmitho199911@gmail.com</p>
        </div>
      </div>

      <div className="grid justify-center lg:grid-cols-2 gap-10 sm:grid-cols-1 mt-10 mx-auto">
        <div className="">
          <h1 className="text-5xl mt-16 font-bold text-primary ">My previous Work</h1>
          <h1 className="text-2xl mt-5 text-secondary">
            live Website Link :{" "}
            <a
              className="text-blue-500"
              href=" https://car-warehouse-2291c.web.app/home"
              target="_blank"
            >
              see website 1
            </a>
          </h1>
          <h1 className="text-2xl mt-5 text-secondary">
            live Website Link :{" "}
            <a
              target="_blank"
              className="text-blue-500"
              href=" https://dentist-care-c901c.web.app/"
            >
              see website 2
            </a>
          </h1>
          <h1 className="text-2xl mt-5 text-secondary">
            live Website Link :{" "}
            <a
              target="_blank"
              className="text-blue-500"
              href=" https://serene-halva-3ed972.netlify.app/home"
            >
              see website 3
            </a>
          </h1>
        </div>
        <div className="">
          <Progress></Progress>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
