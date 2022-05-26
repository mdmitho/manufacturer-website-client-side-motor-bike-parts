import React from 'react';
import myimg from '../../../assets/myimg.png'
import Progress from '../../../Hooks/Progress';
const MyPortfolio = () => {
    return (
      <div className="container mx-auto">
        <div class="card lg:card-side bg-base-100 shadow-xl ">
          <figure>
            <img className="" src={myimg} alt="Album" />
          </figure>
          <div class="card-body mt-16 ">
            <h2 class=" card-title ">My Name : Hossen</h2>
            <h1>Educational : BS.c first years </h1>
            <h1>I currently want to learn web development at Programming Hero</h1>
            <p>Email : mdmitho199911@gmail.com</p>
          </div>
        </div>

    <div className="">
        <Progress></Progress>
    </div>
      </div>
    );
};

export default MyPortfolio;