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
              <h1 class="text-5xl font-bold">Box Office News!</h1>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button class="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;