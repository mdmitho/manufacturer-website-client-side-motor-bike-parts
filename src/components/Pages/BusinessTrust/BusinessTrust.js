import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag,faThumbsUp,faUsers, faSackDollar } from '@fortawesome/free-solid-svg-icons'

import React from 'react';


const BusinessTrust = () => {
    return (
      <div className="text-center py-16 bg-accent my-5">
        <section className="container mx-auto py-5 ">
          <h1 className="text-center text-5xl font-bold mt-3 text-primary ">
            {" "}
            MILLIONS PEOPLE TRUST US
          </h1>
          <p className="text-center text-white text-2xl font-bold my-5 mb-5">
            TRY TO UNDERSTAND USERS EXPECTATION
          </p>

          <div class="stats shadow mb-16 ,">
            <div class="stat">
              <div class="stat-figure text-secondary"></div>
              <div class="stat-title">
                <FontAwesomeIcon icon={faFlag} className="h-11 text-primary"></FontAwesomeIcon>
              </div>

              <div class="stat-value">100+</div>
              <div class="stat-desc"> we served Countries</div>
            </div>

            <div class="stat">
              <div class="stat-title">
                {" "}
                <FontAwesomeIcon
                  icon={faSackDollar}
                  className="h-11 text-primary"
                ></FontAwesomeIcon>
              </div>
              <div class="stat-value">33K+</div>
              <div class="stat-desc">Annual revenue</div>
            </div>

            <div class="stat text-center ">
              <div class="stat-figure text-secondary"></div>
              <div class="stat-title">
                {" "}
                <FontAwesomeIcon
                  icon={faUsers}
                  className="h-11 text-primary"
                ></FontAwesomeIcon>
              </div>
              <div class="stat-value">120M+</div>
              <div class="stat-desc">customers</div>
            </div>

            <div class="stat text-center ">
              <div class="stat-figure text-secondary"></div>
              <div class="stat-title">
                {" "}
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="h-11 text-primary"
                ></FontAwesomeIcon>
              </div>
              <div class="stat-value">50+</div>
              <div class="stat-desc">Best Service</div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default BusinessTrust;