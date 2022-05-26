import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faThumbsUp, faUsers, faSackDollar } from "@fortawesome/free-solid-svg-icons";

import React from "react";

const BusinessTrust = () => {
  return (
    <div className="text-center py-16 bg-accent my-5">
      <section>
        <h1 className="text-center text-5xl font-bold mt-3 text-primary ">
          {" "}
          MILLIONS PEOPLE TRUST US
        </h1>
        <p className="text-center text-white text-2xl font-bold my-5 mb-5">
          TRY TO UNDERSTAND USERS EXPECTATION
        </p>
        <div class="stats stats-vertical lg:stats-horizontal shadow">
          <div class="stat">
            <div className="stat-title">
              <FontAwesomeIcon icon={faFlag} className="h-11 text-primary"></FontAwesomeIcon>
            </div>
            <div className="stat-value">100+</div>
            <div className="stat-desc"> we served Countries</div>
          </div>

          <div className="stat">
            <div className="stat-title">
              {" "}
              <FontAwesomeIcon
                icon={faSackDollar}
                className="h-11 text-primary"
              ></FontAwesomeIcon>
            </div>
            <div className="stat-value">33K+</div>
            <div className="stat-desc">Annual revenue</div>
          </div>

          <div className="stat text-center ">
            <div className="stat-figure text-secondary"></div>
            <div className="stat-title">
              {" "}
              <FontAwesomeIcon icon={faUsers} className="h-11 text-primary"></FontAwesomeIcon>
            </div>
            <div className="stat-value">120M+</div>
            <div className="stat-desc">customers</div>
          </div>

          <div className="stat text-center ">
            <div className="stat-figure text-secondary"></div>
            <div className="stat-title">
              {" "}
              <FontAwesomeIcon
                icon={faThumbsUp}
                className="h-11 text-primary"
              ></FontAwesomeIcon>
            </div>
            <div className="stat-value">50+</div>
            <div className="stat-desc">Best Service Review</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessTrust;
