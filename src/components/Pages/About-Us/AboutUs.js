import React from 'react';

const AboutUs = () => {
    return (
      <div>
        <div class="hero container mx-auto  mt-16 ">
          <div class="hero-content flex-col lg:flex-row">
            <div className="">
              <img src="https://img.freepik.com/free-vector/flat-repair-motorcycle-composition-with-father-biker-his-son-garage_1284-19396.jpg?t=st=1653228990~exp=1653229590~hmac=1f15e0449c520650d0dc629c12bef1e3d50431919d6e9956f67579f0699ff4bb&w=996" />
            </div>
            <div>
              <h1 className="text-5xl font-bold">WE OVER 25 YEARS EXPERIENCE</h1>
              <p className="py-6">
                We are offering all kinds of motorcycle servicing. Also, we provide different
                parts and other accessories.Later on, many bike owners start getting service
                done from local ... rely on the mechanic's expertise in suggesting and
                replacing the parts.
              </p>
              <button class="btn btn-primary text-white">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;